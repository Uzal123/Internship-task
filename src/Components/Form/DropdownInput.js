import React from "react";

const DropdownInput = ({label,...props}) => {
  return (
    <div>
      <label className="px-4 font-bold">{label}</label>
      <div className="border-2 rounded-md p-4 bg-lightGray">
        <select
          name="category"
          id="category"
          className="w-full rounded-md bg-inherit focus:outline-none text-darkGray"
        >
          <option className="" value="drinks">
            Drink
          </option>
          <option value="Food">Food</option>
          <option value="snack">Snack</option>
          <option value="package">Package</option>
        </select>
      </div>
    </div>
  );
};

export default DropdownInput;
