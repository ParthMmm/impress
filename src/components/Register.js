import React from "react";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { userRegister } from "../actions";
import history from "../util/history";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(userRegister(data));
    console.log(data);
    reset();
  };

  return (
    <div className="bg-white dark:bg-gray-800 font-sans antialiased ">
      <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8 h-screen ">
        <h1 className="font-bold text-center text-4xl text-blue-500 pb-1 cursor-default">
          Im<span className="text-black dark:text-white">press</span>
        </h1>
        <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8 shadow-xl rounded-xl border-2 border-blue-500 dark:border-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
              <h1 className="font-bold text-xl text-center cursor-default">
                Sign Up
              </h1>

              <div className="flex flex-col space-y-1">
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Enter a valid e-mail address",
                    },
                  })}
                  type="text"
                  name="email"
                  id="email"
                  className="border-2 rounded px-3 py-2 w-full s:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Email"
                />
                <span className="text-sm text-red-500 pl-2">
                  {" "}
                  {errors.email?.type === "required" && "Email required"}
                  {errors.email?.message}
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                <input
                  {...register("username", {
                    required: true,
                    minLength: {
                      value: 4,
                      message: "Must be at least 4 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Must be at most 12 characters",
                    },
                  })}
                  type="text"
                  name="username"
                  id="username"
                  className="border-2 rounded px-3 py-2 w-full s:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Username"
                />
                <span className="text-sm text-red-500 pl-2">
                  {" "}
                  {errors.username?.type === "required" && "Username required"}
                  {errors.username?.message}
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                <input
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Must be at least 8 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Must be at most 20 characters",
                    },
                  })}
                  type="password"
                  name="password"
                  id="password"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Password"
                />
                <span className="text-sm text-red-500 pl-2">
                  {" "}
                  {errors.password?.type === "required" && "Password required"}
                  {errors.password?.message}
                </span>
              </div>

              <div className="flex flex-row-reverse sm:flex-row-reverse sm:justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white  font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="flex justify-center text-gray-700 dark:text-gray-300 text-sm clickable hover:text-blue-500 transition-colors pt-5">
            <button onClick={() => history.push("/login")}>
              {" "}
              Already have an account?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Register);
