import React from "react";
import Button from "../../Components/Button/Button";
import CheckBox from "../../Components/CheckBox/CheckBox";

export const Section2 = () => {
  return (
    <>
      {/* <label htmlFor="id" className="text-white font-medium text-lg">
        Subjects
      </label> */}
      <p className="text-white font-medium text-2xl m-auto text-center shadow-lg p-2">
        Select Subjects
      </p>
      <div className="flex flex-col items-center justify-center mt-6">
        <div className="grid grid-cols-2 gap-2 gap-x-6">
          <CheckBox text="Math" value="math" />
          <CheckBox text="English" value="english" />
          <CheckBox text="Science" value="science" />
          <CheckBox text="hindi" value="Hindi" />
          <CheckBox text="history" value="History" />
          <CheckBox text="drawing" value="Drawing" />
        </div>
        <div className="flex w-full my-4 justify-between gap-5 ">
          <Button text="Previous" />
          <Button text="Next" />
        </div>
      </div>

      {/* <select
        className="block w-52 text-gray-700 py-2 px-3 mt-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        name="animals"
        id="Subject"
      >
        <option value="">Select an Subject</option>
        <option value="english">English</option>
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="hindi">Hindi</option>
        <option value="history">History</option>
        <option value="drawing">Drawing</option>
      </select> */}
    </>
  );
};
