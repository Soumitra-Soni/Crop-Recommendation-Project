# Crop Recommendation System 🌾

This project is a **Crop Recommendation System** that predicts the most suitable crop for cultivation based on environmental factors like soil nutrients, temperature, humidity, pH, and rainfall. It uses a **Logistic Regression** machine learning model, exposed through a **FastAPI** backend, with a **React** frontend for user interaction.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup (FastAPI)](#backend-setup-fastapi)
- [Frontend Setup (React)](#frontend-setup-react)
- [Deployment](#deployment)
  - [Backend on Render](#backend-on-render)
  - [Frontend on Vercel](#frontend-on-vercel)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Predicts the best crop based on environmental inputs.
- User-friendly form to input nitrogen (N), phosphorus (P), potassium (K), temperature, humidity, pH, and rainfall.
- API-based backend for model inference.
- Interactive React frontend for user interaction.

## Tech Stack

- **Backend**: FastAPI (Python), scikit-learn
- **Frontend**: React, Axios
- **Deployment**: Render (Backend), Vercel (Frontend)

## Prerequisites

- **Node.js** installed on your system for React.
- **Python 3.x** installed for FastAPI.

## Installation

### Backend Setup (FastAPI)

1. Clone the repository and navigate to the backend directory:

    ```bash
    git clone https://github.com/yourusername/crop-recommendation-backend.git
    cd crop-recommendation-backend
    ```

2. Install the required Python dependencies:

    ```bash
    pip install -r requirements.txt
    ```

3. Start the FastAPI server:

    ```bash
    uvicorn main:app --reload
    ```

4. Access the API at `http://127.0.0.1:8000`.

### Frontend Setup (React)

1. Clone the frontend repository and navigate to the frontend directory:

    ```bash
    git clone https://github.com/yourusername/crop-recommendation-frontend.git
    cd crop-recommendation-frontend
    ```

2. Install the required Node modules:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

4. Access the frontend at `http://localhost:3000`.

## Deployment

### Backend on Render

1. Push your backend code to a GitHub repository.
2. Go to [Render](https://render.com/) and create a **New Web Service**.
3. Connect it to your GitHub repository.
4. Set **Build Command** to install dependencies:
   ```bash
   pip install -r requirements.txt
## Usage
Visit the deployed React frontend (e.g., https://your-frontend-url.vercel.app).
Input values for Nitrogen (N), Phosphorus (P), Potassium (K), Temperature, Humidity, pH, and Rainfall.
Click on "Recommend Crop".
The predicted crop will be displayed based on the given input.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

## License
This project is licensed under the MIT License.
