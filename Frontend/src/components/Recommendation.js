import React from "react";

const Recommendation = ({ crop }) => {
  const getRandomRecommendation = () => {
    const recommendations = [
      `Based on the conditions, you might try`,
      `You should consider planting`,
      `Given your data, you should go for`,
      `With these parameters, suitable crop for you is`,
      `Looking at your conditions, you should`,
      `You might want to plant`,
      `Based on your data, you should consider planting`,
    ];
    return recommendations[Math.floor(Math.random() * recommendations.length)];
  };

  return (
    <div>
      <h2>{getRandomRecommendation()}</h2>
      <h1 className="text-3xl font-bold text-green-600">{crop}</h1>
    </div>
  );
};

export default Recommendation;
