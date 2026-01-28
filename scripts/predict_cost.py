
import sys
import json
import joblib
import pandas as pd
import numpy as np
import os

# Define model paths
UNIVARIATE_MODEL_PATH = "public/CatBoost.pkl"
MULTIVARIATE_MODEL_PATH = "public/best_multivariate_cost_model.pkl"

def load_pkl(path):
    if not os.path.exists(path):
        return None
    try:
        # Some pkl files might be metrics (pandas Series). 
        # Only return if it has a 'predict' method.
        obj = joblib.load(path)
        if hasattr(obj, 'predict'):
            return obj
        return None
    except:
        return None

def predict():
    try:
        # Read input from stdin
        input_data = sys.stdin.read()
        if not input_data:
            print(json.dumps({"error": "No input data provided"}))
            return

        data = json.loads(input_data)
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
                # Features for multivariate: Country, Level, Program, Duration_Years, Living_Cost_Index, Exchange_Rate
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
                # If feature mismatch or other error, record it for debugging if needed
                # pass
                results["debug_multi_error"] = str(e)
        
        # 2. Predict Total using Univariate model
        uni_model = load_pkl(UNIVARIATE_MODEL_PATH)
        if uni_model:
            try:
                # Features for univariate: Country, Level, Program, Living_Cost_Index
                # (The old inspection suggested these 4)
                uni_features = ['Country', 'Living_Cost_Index', 'Exchange_Rate']
                uni_df = df[uni_features]
                
                prediction = uni_model.predict(uni_df)
                results["predicted_cost"] = float(prediction[0])
            except Exception as e:
                results["debug_uni_error"] = str(e)
        
        if not results or (len(results) == 1 and "debug_uni_error" in results):
             # Try to provide at least a fallback if both failed
             print(json.dumps({"error": f"Model prediction failed. Multi: {results.get('debug_multi_error')}, Uni: {results.get('debug_uni_error')}"}))
             return

        print(json.dumps(results))

    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)

if __name__ == "__main__":
    predict()
