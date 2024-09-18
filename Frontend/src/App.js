import React, { useState } from "react";
import axios from "axios";
import FormData from "./components/formData";
import Recommendation from "./components/Recommendation";
import "./index.css";

const App = () => {
  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [crop, setCrop] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/recommend", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setCrop(response.data.recommended_crop))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="w-full min-h-screen bg-blue-50 flex flex-col items-center p-10">
      <h1 className="text-4xl font-extrabold text-pink-600 mb-8">
        Crop Recommendation System
      </h1>
      <div className="justify-end items-center text-end">
        <FormData formData={formData} handleChange={handleChange} />
        <div className="my-10 justify-between p-4 flex bg-transparent gap-4 items-center w-full border-4 border-gray-100 rounded-lg shadow-lg">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-auto p-10 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600"
          >
            Recommend Crop
          </button>
          <Recommendation crop={crop} className="p-5 items-end" />
        </div>
      </div>
    </div>
  );
};

export default App;
