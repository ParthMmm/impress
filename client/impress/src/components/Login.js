import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { userRegister } from "../actions";

function Login(props) {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(userRegister(data));
    console.log(data);
  };

  return (
    <div>
      <div class="bg-white dark:bg-gray-800 font-sans min-h-screen antialiased pt-24 pb-5">
        <div class="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
          <h1 class="font-bold text-center text-4xl text-yellow-500">
            Im<span class="text-blue-500">press</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
              <h1 class="font-bold text-xl text-center">Sign up</h1>

              <div class="flex flex-col space-y-1">
                <input
                  {...register("username")}
                  type="text"
                  name="username"
                  id="username"
                  class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Username"
                />
              </div>

              <div class="flex flex-col space-y-1">
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Password"
                />
              </div>

              <div class="relative">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked
                  class="inline-block align-middle"
                />
                <label class="inline-block align-middle pl-1" for="remember">
                  Remember me
                </label>
              </div>

              <div class="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                <a
                  href="#"
                  class="inline-block text-blue-500 hover:text-blue-800 hover:underline"
                >
                  Forgot your password?
                </a>
                <button
                  type="submit"
                  class="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div class="flex justify-center text-gray-500 text-sm">
            <p>&copy;2021. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Login);
