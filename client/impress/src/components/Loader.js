import React from "react";

function Loader({ message }) {
  return (
    <div className="align-middle">
      <div className="flex flex-row justify-center align-middle sm:w-96 sm:m-auto  ">
        <button
          type="button"
          className=" w-40 animate-pulse bg-blue-500 text-white font-bold px-5 py-2 rounded-lg shadow-md focus:outline-none  transition-colors disabled"
        >
          {message}
        </button>
      </div>
    </div>
  );
}

export default Loader;
