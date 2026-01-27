import joblib
import pandas as pd
import numpy as np

try:
    model = joblib.load('public/Gradient Boosting (Multivariate).pkl')
    print(f"Type: {type(model)}")
    if hasattr(model, 'feature_names_in_'):
        print(f"Features: {model.feature_names_in_}")
    
    # If it's a series or something else, let's see what's inside
    if isinstance(model, pd.Series):
        print("Model is a Pandas Series. Contents:")
        print(model)
    elif isinstance(model, dict):
        print("Model is a dict. Keys:")
        print(model.keys())
    
    # Try a dummy prediction if it's a pipeline/model
    try:
        # Assuming typical features
        dummy_data = pd.DataFrame([{
            'Country': 'Germany',
            'Level': 'Master',
            'Program': 'Computer Science',
            'Living_Cost_Index': 82.5
        }])
        pred = model.predict(dummy_data)
        print(f"Dummy Prediction Result: {pred}")
        print(f"Prediction Shape: {np.shape(pred)}")
    except Exception as e:
        print(f"Prediction attempt failed: {e}")

except Exception as e:
    print(f"Loading failed: {e}")
