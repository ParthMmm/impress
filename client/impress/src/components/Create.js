import React from "react";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    // dispatch(userLogin(data));
    reset();

    console.log(data);
  };
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 font-sans min-h-screen antialiased pt-24 pb-5">
        <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
          <div className="flex flex-col bg-white p-10 rounded-lg shadow-2xl space-y-6  ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col pb-2">
                <input
                  {...register("title", { required: true })}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  class=" placeholder-gray-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2"
                ></input>
              </div>
              <div className="flex flex-col  pb-2">
                <input
                  {...register("description", { required: true })}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  class="placeholder-gray-500 border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2 "
                ></input>
              </div>
              <div className="flex flex-col items-center pb-2 ">
                <select
                  {...register("switchType", { required: true })}
                  name="switchType"
                  id="switchType"
                  class=" w-full  border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-1 "
                >
                  <option className="text-red-500" value="" disabled selected>
                    ppppp
                  </option>
                  <option>Linear</option>
                  <option>Tactile</option>
                  <option>Clicky</option>
                  <option>Clicky + Tactile</option>
                </select>
                {/* <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none pb-1">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div> */}
              </div>
              <div className="relative inline-block w-full  items-center  pb-2">
                <select
                  {...register("lube", { required: true })}
                  name="lube"
                  id="lube"
                  class="placeholder-gray-500 w-full  border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-1 "
                  placeholder="Lube"
                >
                  <option value="" disabled selected>
                    Lube
                  </option>
                  <option>Krytox 205 G0</option>
                  <option>Krytox GPL 105</option>
                  <option>Tribosys 3203</option>
                  <option>Tribosys 3204</option>
                </select>
              </div>
              <div className="relative inline-block w-full items-center pb-2">
                <select
                  {...register("film", { required: true })}
                  class="placeholder-gray-500 w-full border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-1"
                  placeholder="Switch Type"
                >
                  <option class="text-gray-400" value="" disabled selected>
                    Switch Film
                  </option>
                  <option>TX Films</option>
                  <option>Deskey</option>
                  <option>NovelKeys</option>
                  <option>Kebo</option>
                </select>
              </div>

              <div className="flex flex-col  ">
                <label class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-500">
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span class="mt-2 text-base leading-normal">
                    Select a file
                  </span>
                  <input type="file" class="hidden" />
                </label>
              </div>
              <div className="flex flex-col  ">
                <button
                  type="submit"
                  className="bg-blue-500 text-black font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;

// class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
