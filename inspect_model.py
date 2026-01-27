
import pickle
import sys
import os
import pandas as pd
import numpy as np

model_path = "public/Gradient Boosting (Boosted Trees).pkl"

try:
    if not os.path.exists(model_path):
        print(f"Error: File not found at {model_path}")
        sys.exit(1)

    with open(model_path, 'rb') as f:
        model = pickle.load(f)

    print(f"Model Type: {type(model)}")
    
    if hasattr(model, 'feature_names_in_'):
        print("Feature Names:", list(model.feature_names_in_))
    else:
        print("Feature names not explicitly stored in model.")

    if hasattr(model, 'n_features_in_'):
        print(f"Number of Features: {model.n_features_in_}")

except Exception as e:
    print(f"Error loading model: {e}")
