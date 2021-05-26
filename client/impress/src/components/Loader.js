import React from "react";

function Loader({ message }) {
  return (
    <div className="bg-white dark:bg-gray-800 font-sans antialiased">
      {/* <div className="flex flex-row justify-center align-middle sm:w-96 sm:m-auto m-60 "> */}
      <div className="flex items-center justify-center h-screen ">
        <button
          type="button"
          className=" w-40 animate-pulse bg-blue-500 text-white font-bold  rounded-lg shadow-md focus:outline-none  transition-colors disabled"
        >
          {message}
        </button>
      </div>
    </div>
  );
}

export default Loader;
