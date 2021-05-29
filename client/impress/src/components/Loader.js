import React from "react";

function Loader({ message }) {
  return (
    <div className="bg-white dark:bg-gray-800 font-sans antialiased overflow-hidden overscroll-none sticky ">
      {/* <div className="flex flex-row justify-center align-middle sm:w-96 sm:m-auto m-60 "> */}
      <div className="flex flex-col items-center justify-center h-screen pb-40">
        <button
          type="button"
          className="cursor-default disabled h-12   w-auto animate-pulse bg-blue-500 text-white font-bold  rounded-lg shadow-md focus:outline-none  transition-colors "
        >
          <span className="p-5"> {message}</span>
        </button>
      </div>
    </div>
  );
}

export default Loader;
