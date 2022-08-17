import React from 'react'

const TextInput = ({ label , placeholder , inputtype , ...props }) => {
  return (
    <div className="py-4">
      <label className="p-4 font-bold">{label}</label>
      <div className="border-2 rounded-md p-4 bg-lightGray">
        <input
          className="w-full rounded-md bg-inherit focus:outline-none"
          type={inputtype}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default TextInput