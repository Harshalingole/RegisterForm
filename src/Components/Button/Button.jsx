import React from "react";

const Button = ({ text, color = "purple" }) => {
  console.log(color);
  return (
    <div class="flex w-full my-4">
      <button
        type="submit"
        class={`py-2 px-4  bg-${color}-600 bg-[${color}] hover:bg-${color}-700 focus:ring-${color}-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
