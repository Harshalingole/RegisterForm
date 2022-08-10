/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Form from "../../Components/Form/Form";
// import Section1 from "../Section1/Section1";
import { Section2 } from "../Section2/Section2";
// import Section3 from "../Section3/Section3";

const Home = () => {
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center h-[100vh] bg-slate-100">
      {/* // Wraper Container- Home */}
      <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        {/* Title */}
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Student registration form
        </div>
        {/* Subtitle */}
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already register ?
          <a
            href="#"
            target="_blank"
            className="text-sm text-blue-500 underline hover:text-blue-700"
          >
            Check Profile
          </a>
        </span>
        {/* Form Container */}
        <div className="p-6 mt-8">
          {/* <Outlet /> */}
          {/* <Section -1 Basic Info /> */}
          {/* <Form section={<Section1 />} /> */}

          {/* Section-2  Subject Selection*/}
          <Form section={<Section2 />} />

          {/* Section-2  Subject Selection*/}
          {/* <Form section={<Section3 />} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
