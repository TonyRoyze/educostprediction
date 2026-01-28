from http.server import BaseHTTPRequestHandler
import json
import joblib
import pandas as pd
import numpy as np
import os

# Define model paths - using absolute paths relative to this file
# This ensures it works both locally and in Vercel's environment
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UNIVARIATE_MODEL_PATH = os.path.join(BASE_DIR, "public", "CatBoost.pkl")
MULTIVARIATE_MODEL_PATH = os.path.join(BASE_DIR, "public", "best_multivariate_cost_model.pkl")

# Cache models to avoid reloading on every request
_cached_models = {}

def load_pkl(path):
    """Load a pickle model file, with caching."""
    if path in _cached_models:
        return _cached_models[path]
    
    if not os.path.exists(path):
        return None
    try:
        obj = joblib.load(path)
        if hasattr(obj, 'predict'):
            _cached_models[path] = obj
            return obj
        return None
    except Exception:
        return None


def predict_cost(data: dict) -> dict:
    """Run predictions using the loaded models."""
    df = pd.DataFrame([data])
    
    # Ensure correct types for numeric columns
    numeric_cols = ['Living_Cost_Index', 'Duration_Years', 'Exchange_Rate']
    for col in numeric_cols:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors='coerce')
    
    results = {}
    
    # 1. Predict Components using Multivariate model
    multi_model = load_pkl(MULTIVARIATE_MODEL_PATH)
    if multi_model:
        try:
            multi_features = ['Country', 'Level', 'Program', 'Duration_Years', 'Living_Cost_Index', 'Exchange_Rate']
            multi_df = df[multi_features]
            
            preds = multi_model.predict(multi_df)
            # Output order: [Tuition_USD, Rent_USD, Insurance_USD, Visa_Fee_USD]
            if hasattr(preds, 'shape') and (len(preds.shape) > 1 and preds.shape[1] >= 4):
                results["tuitionUSD"] = float(preds[0][0])
                results["rentUSD"] = float(preds[0][1])
                results["insuranceUSD"] = float(preds[0][2])
                results["visaFeeUSD"] = float(preds[0][3])
            elif isinstance(preds[0], (list, np.ndarray)) and len(preds[0]) >= 4:
                results["tuitionUSD"] = float(preds[0][0])
                results["rentUSD"] = float(preds[0][1])
                results["insuranceUSD"] = float(preds[0][2])
                results["visaFeeUSD"] = float(preds[0][3])
        except Exception as e:
            results["debug_multi_error"] = str(e)
    
    # 2. Predict Total using Univariate model
    uni_model = load_pkl(UNIVARIATE_MODEL_PATH)
    if uni_model:
        try:
            uni_features = ['Country', 'Living_Cost_Index', 'Exchange_Rate']
            uni_df = df[uni_features]
            
            prediction = uni_model.predict(uni_df)
            results["predicted_cost"] = float(prediction[0])
        except Exception as e:
            results["debug_uni_error"] = str(e)
    
    if not results or (len(results) == 1 and "debug_uni_error" in results):
        return {"error": f"Model prediction failed. Multi: {results.get('debug_multi_error')}, Uni: {results.get('debug_uni_error')}"}
    
    return results


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            # Read request body
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            data = json.loads(body.decode('utf-8'))
            
            # Validate required fields
            required_fields = ['Country', 'Level', 'Program', 'Living_Cost_Index', 'Duration_Years', 'Exchange_Rate']
            missing = [f for f in required_fields if f not in data or data[f] is None]
            
            if missing:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "error": f"Missing required fields: {', '.join(missing)}"
                }).encode())
                return
            
            # Run prediction
            result = predict_cost(data)
            
            if "error" in result:
                self.send_response(400)
            else:
                self.send_response(200)
            
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(result).encode())
            
        except json.JSONDecodeError:
            self.send_response(400)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Invalid JSON"}).encode())
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode())
    
    def do_OPTIONS(self):
        """Handle CORS preflight requests."""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
