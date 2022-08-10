import React from "react";

const CheckBox = ({ text, value = "none" }) => {
  return (
    <label className="flex items-center space-x-3 mb-3">
      <input
        value={value}
        type="checkbox"
        name="Subject"
        className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
      />
      <span className="text-gray-700 font-bold text-2xl dark:text-white ">
        {text}
      </span>
    </label>
  );
};

export default CheckBox;
