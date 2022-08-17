import React from "react";

const FoodCard = ({title,price,...props}) => {
  return (
    <div className="border-2 border-lightPurple p-2 rounded-md cursor-pointer">
      <div className="h-40 bg-customGray rounded-md"></div>
      <figcaption className="font-bold text-customDark">{title}</figcaption>
      <p className="font-bold text-customGreen">{price}</p>
    </div>
  );
};

export default FoodCard;
