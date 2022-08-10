import React from "react";
import Button from "../../Components/Button/Button";
import InputTag from "../../Components/InputTag/InputTag";

const Section1 = () => {
  return (
    <>
      <div className="flex flex-col mb-2 gap-4">
        <InputTag id={"name"} type="text" placeholder="Name*" />
        <InputTag id={"school"} type="text" placeholder="School*" />
        <InputTag id={"name"} type="text" placeholder="Class*" />
        <InputTag id={"name"} type="text" placeholder="Gender*" />
      </div>
      <div className="flex w-full my-4">
        <Button text="Next" />
      </div>
    </>
  );
};

export default Section1;
