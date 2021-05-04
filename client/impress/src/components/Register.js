import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { userRegister } from "../actions";
import { withRouter } from "react-router-dom";

function Register(props, { history }) {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(userRegister(data, history));
    console.log(data);
  };

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 font-sans min-h-screen antialiased pt-24 pb-5">
        <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
          <h1 className="font-bold text-center text-4xl text-yellow-500">
            Im<span className="text-blue-500">press</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
              <h1 className="font-bold text-xl text-center">Sign up</h1>

              <div className="flex flex-col space-y-1">
                <input
                  {...register("email")}
                  type="text"
                  name="email"
                  id="email"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Password"
                />
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                <a
                  href="#"
                  className="inline-block text-blue-500 hover:text-blue-800 hover:underline"
                >
                  Forgot your password?
                </a>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div className="flex justify-center text-gray-500 text-sm">
            <p>&copy;2021. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(withRouter(Register));
