import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { userLogin } from "../actions";
import ErrorAlert from "./ErrorAlert";

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
  // switch (auth) {
  //   case true:
  //     return <div></div>;
  //   case false:
  //     return (
  //       <div>
  //         <div className="bg-white dark:bg-gray-800 font-sans min-h-screen antialiased pt-24 pb-5">
  //           <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
  //             <h1 className="font-bold text-center text-4xl text-yellow-500">
  //               Im<span className="text-blue-500">press</span>
  //             </h1>
  //             <form onSubmit={handleSubmit(onSubmit)}>
  //               <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
  //                 <h1 className="font-bold text-xl text-center">Log In</h1>

  //                 <div className="flex flex-col space-y-1">
  //                   <input
  //                     {...register("email", { required: true })}
  //                     type="text"
  //                     name="email"
  //                     id="email"
  //                     className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
  //                     placeholder="Email"
  //                   />
  //                   <span className="text-red-700">
  //                     {" "}
  //                     {errors.email?.type === "required" && "Email required"}
  //                   </span>
  //                 </div>

  //                 <div className="flex flex-col space-y-1">
  //                   <input
  //                     {...register("password", { required: true })}
  //                     type="password"
  //                     name="password"
  //                     id="password"
  //                     className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
  //                     placeholder="Password"
  //                   />
  //                   <span className="text-red-700">
  //                     {errors.password?.type === "required" &&
  //                       "Password required"}
  //                   </span>
  //                 </div>

  //                 <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
  //                   <button
  //                     href="#"
  //                     className="inline-block text-blue-500 hover:text-blue-800 hover:underline"
  //                   >
  //                     Forgot your password?
  //                   </button>
  //                   <button
  //                     type="submit"
  //                     className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
  //                   >
  //                     Log In
  //                   </button>
  //                 </div>
  //               </div>
  //             </form>
  //             <div className="flex justify-center text-gray-500 text-sm">
  //               {error === true ? <ErrorAlert /> : <span></span>}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   default:
  //     return (
  //       <div>
  //         <div className="bg-white dark:bg-gray-800 font-sans min-h-screen antialiased pt-24 pb-5">
  //           <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
  //             <h1 className="font-bold text-center text-4xl text-yellow-500">
  //               Im<span className="text-blue-500">press</span>
  //             </h1>
  //             <form onSubmit={handleSubmit(onSubmit)}>
  //               <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
  //                 <h1 className="font-bold text-xl text-center">Log In</h1>

  //                 <div className="flex flex-col space-y-1">
  //                   <input
  //                     {...register("email", { required: true })}
  //                     type="text"
  //                     name="email"
  //                     id="email"
  //                     className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
  //                     placeholder="Email"
  //                   />
  //                   <span className="text-red-700">
  //                     {" "}
  //                     {errors.email?.type === "required" && "Email required"}
  //                   </span>
  //                 </div>

  //                 <div className="flex flex-col space-y-1">
  //                   <input
  //                     {...register("password", { required: true })}
  //                     type="password"
  //                     name="password"
  //                     id="password"
  //                     className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
  //                     placeholder="Password"
  //                   />
  //                   <span className="text-red-700">
  //                     {errors.password?.type === "required" &&
  //                       "Password required"}
  //                   </span>
  //                 </div>

  //                 <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
  //                   <button
  //                     href="#"
  //                     className="inline-block text-blue-500 hover:text-blue-800 hover:underline"
  //                   >
  //                     Forgot your password?
  //                   </button>
  //                   <button
  //                     type="submit"
  //                     className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
  //                   >
  //                     Log In
  //                   </button>
  //                 </div>
  //               </div>
  //             </form>
  //             <div className="flex justify-center text-gray-500 text-sm">
  //               {error === true ? <ErrorAlert /> : <span></span>}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  // }

  // switch (auth) {
  //   case null:

  //   case true:

  //   default:
  //     showError(false);
  // }

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 font-sans min-h-screen antialiased pt-24 pb-5">
        <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
          <h1 className="font-bold text-center text-4xl text-yellow-500">
            Im<span className="text-blue-500">press</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
              <h1 className="font-bold text-xl text-center">Log In</h1>

              <div className="flex flex-col space-y-1">
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  id="email"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Email"
                />
                <span className="text-red-700">
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
                <span className="text-red-700">
                  {errors.password?.type === "required" && "Password required"}
                </span>
              </div>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                <button
                  href="#"
                  className="inline-block text-blue-500 hover:text-blue-800 hover:underline"
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
          <div className="flex justify-center text-gray-500 text-sm">
            {error === true ? <ErrorAlert /> : <span></span>}
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps({ auth }) {
  return { error: auth.error, auth: auth.authorized, msg: auth.msg };
}

export default connect(mapStateToProps)(Login);
