import React from "react";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { userLogin } from "../actions";
import ErrorAlert from "./ErrorAlert";
import history from "../util/history";
import { authError } from "../actions";

function Login({ error, auth, msg }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(userLogin(data));
    reset();

    console.log(data);
  };

  const onRegisterClick = () => {
    dispatch(authError());
    history.push("/register");
    reset();
  };

  return (
    <div className="bg-white dark:bg-gray-800 font-sans antialiased ">
      <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8 h-screen ">
        <h1 className="font-bold text-center text-4xl text-blue-500 pb-1 cursor-default">
          Im<span className="text-black dark:text-white">press</span>
        </h1>
        <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8 rounded-xl border-2 border-blue-500 dark:border-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
              <h1 className="font-bold text-xl text-center cursor-default">
                Log In
              </h1>

              <div className="flex flex-col space-y-1">
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  id="email"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Email"
                />
                <span className="text-sm text-red-500 pl-2">
                  {" "}
                  {errors.email?.type === "required" && "Email required"}
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Password"
                />
                <span className="text-sm text-red-500 pl-2">
                  {errors.password?.type === "required" && "Password required"}
                </span>
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                <button
                  href="#"
                  className="inline-block text-blue-500 hover:text-blue-800 transition-colors pt-5 sm:pt-0"
                >
                  Forgot your password?
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="flex justify-center text-gray-700 dark:text-gray-300 text-sm clickable hover:text-blue-500 transition-colors pt-5">
            <button onClick={() => onRegisterClick()}>
              {" "}
              Don't have an account?
            </button>
          </div>
        </div>
        <div className="flex justify-center text-gray-500 text-sm">
          {error === true ? <ErrorAlert /> : <span></span>}
        </div>
      </div>
    </div>
  );
}
function mapStateToProps({ auth }) {
  return { error: auth.error, auth: auth.authorized, msg: auth.msg };
}

export default connect(mapStateToProps)(Login);
