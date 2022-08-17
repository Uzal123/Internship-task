import React from "react";


const TextareaInput = ({label,placeholder,...props}) => {
  return (
    <div className="py-4">
      <label className="px-4 font-bold">{label}</label>
      <div className="border-2 rounded-md p-4 bg-lightGray">
        <textarea
          className="w-full rounded-md bg-inherit focus:outline-none"
          type="textarea"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextareaInput;
