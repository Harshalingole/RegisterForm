import React from "react";
import Button from "../../Components/Button/Button";
import InputTag from "../../Components/InputTag/InputTag";

const Section3 = () => {
  return (
    <>
      <div className="flex flex-col mb-2 gap-4">
        <InputTag id={"email"} type="email" placeholder="Email*" />
        <InputTag id={"number"} type="number" placeholder="Mobile Number*" />
      </div>
      <div className="flex flex-row justify-between gap-5 w-full my-4">
        <Button text="Previous" />
        <Button text="Submit" color="green" />
      </div>
    </>
  );
};

export default Section3;
