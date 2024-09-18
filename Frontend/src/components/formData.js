import React from "react";

const FormData = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 p-4 bg-transparent border-4 border-gray-100 rounded-lg shadow-lg w-full max-w-4xl"
    >
      <div className="flex justify-between">
        <div className="p-4 flex bg-transparent gap-4 items-center w-full rounded-lg">
          <p className="text-lg font-semibold text-black">Nitrogen Content </p>
          <input
            type="number"
            name="N"
            placeholder=" "
            value={formData.N}
            onChange={handleChange}
            className="p-6 text-2xl bg-transparent border-2 border-green-200 rounded-3xl focus:outline-none w-full focus:border-cyan-200"
          />
        </div>
        <div className="p-4 flex bg-transparent gap-4 items-center w-full rounded-lg">
          <p className="text-lg font-semibold text-black">
            Phosphorus Content{" "}
          </p>
          <input
            type="number"
            name="P"
            placeholder=""
            value={formData.P}
            onChange={handleChange}
            className="p-6 text-2xl bg-transparent border-2 border-green-200 rounded-3xl focus:outline-none w-full focus:border-cyan-200"
          />
        </div>
        <div className="p-4 flex bg-transparent gap-4 items-center w-full rounded-lg">
          <p className="text-lg font-semibold text-black">Potassium Content </p>
          <input
            type="number"
            name="K"
            placeholder=""
            value={formData.K}
            onChange={handleChange}
            className="p-6 text-2xl bg-transparent border-2 border-green-200 rounded-3xl focus:outline-none w-full focus:border-cyan-200"
          />
        </div>
      </div>

      <div className="p-4 flex bg-transparent gap-4 items-center w-full rounded-lg">
        <p className="text-lg font-semibold text-black">Humidity</p>
        <input
          name="humidity"
          value={formData.humidity}
          onChange={handleChange}
          min="0"
          max="100"
          type="number"
          placeholder=" "
          className="p-6 text-2xl bg-transparent border-2 border-green-200 rounded-3xl focus:outline-none w-full focus:border-cyan-200"
        />
        <p className="text-lg font-semibold text-black">{formData.humidity}%</p>
      </div>
      <div className="p-4 flex bg-transparent gap-4 items-center w-full rounded-lg">
        <p className="text-lg font-semibold text-black">pH Level </p>
        <input
          type="number"
          value={formData.ph}
          onChange={handleChange}
          name="ph"
          min="0"
          max="14"
          placeholder=" "
          className="p-6 text-2xl bg-transparent border-2 border-green-200 rounded-3xl focus:outline-none w-full focus:border-cyan-200"
        />
      </div>
      <div className="flex justify-between gap-5 items-center p-4">
        <p className="text-lg font-semibold text-black">Temperature</p>
        <input
          type="range"
          name="temperature"
          min="-100"
          max="100"
          value={formData.temperature}
          onChange={handleChange}
          className="w-full h-2 p-2 m-2 bg-green-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-200"
        />
        <p className="text-lg font-semibold text-black">
          {formData.temperature}°C
        </p>
      </div>
      <div className="flex justify-between gap-5 items-center p-4">
        <p className="text-lg font-semibold text-black">Rainfall</p>
        <input
          type="range"
          name="rainfall"
          min="0"
          max="300"
          value={formData.rainfall}
          onChange={handleChange}
          className="w-full h-2 p-2 m-2 bg-green-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-200"
        />
        <p className="text-lg font-semibold text-black">
          {formData.rainfall}mm
        </p>
      </div>
    </form>
  );
};

export default FormData;
