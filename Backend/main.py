from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np


model = joblib.load('Crop_App')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # Adjust this to the specific origin, e.g., ["http://localhost:3000"]
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["POST", "OPTIONS", "GET", "PUT", "DELETE", "PATCH", "HEAD"],
    allow_headers=["*"],
)


class CropData(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float


@app.post("/recommend")
def recommend_crop(data: CropData):
    features = np.array(
        [[data.N, data.P, data.K, data.temperature,
            data.humidity, data.ph, data.rainfall]]
    )

    crop_prediction = model.predict(features)

    return {"recommended_crop": crop_prediction[0]}

# Run the API with: uvicorn main:app --reload
