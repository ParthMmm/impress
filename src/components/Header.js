import React from "react";

import { connect, useDispatch } from "react-redux";
import history from "../util/history";
import "alpinejs";
import { authError } from "../actions";

function Header({ auth }) {
  const dispatch = useDispatch();

  const noAuthClick = (location) => {
    history.push(location);
    dispatch(authError());
  };

  switch (auth) {
    case true:
      return (
        <div>
          <nav className=" dark:bg-gray-800 items-center pl-6 pr-6 pt-4 pb-4 fixed w-full z-10 top-0">
            <div className="flex flex-row justify-between items-center ">
              <span
                className="text-blue-500 font-semibold  text-2xl tracking-tight cursor-pointer antialiased"
                onClick={() => history.push("/")}
              >
                Im
                <span
                  className="text-black font-semibold  text-2xl tracking-tight hover:text-blue-500  dark:text-white cursor-pointer antialiased transition-colors"
                  onClick={() => history.push("/")}
                >
                  press
                </span>
              </span>
              <div className="w-full hidden lg:flex lg:flex-row-reverse  items-center lg:w-auto antialiased h-0 ">
                <div className="pr-4">
                  {" "}
                  <button
                    onClick={() => history.push("/create")}
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 font-semibold	 rounded-md shadow-2xl focus:outline-none hover:bg-blue-700 transition-colors"
                  >
                    Create Post
                  </button>
                </div>
                <div className="pr-4">
                  {" "}
                  <button
                    onClick={() => history.push("/profile")}
                    type="submit"
                    className="text-black hover:text-blue-500 dark:text-white focus:outline-none transition-colors"
                  >
                    Profile
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    default:
      return (
        <div>
          <nav className=" dark:bg-gray-800 items-center pl-6 pr-6 pt-4 pb-4 fixed w-full z-10 top-0">
            <div className="flex flex-row justify-between items-center">
              <span
                className="text-blue-500 font-semibold  text-2xl tracking-tight cursor-pointer antialiased"
                onClick={() => noAuthClick("/")}
              >
                Im
                <span
                  className="text-black font-semibold  text-2xl tracking-tight hover:text-blue-500  dark:text-white cursor-pointer antialiased"
                  onClick={() => noAuthClick("/")}
                >
                  press
                </span>
              </span>
              <div className="w-full hidden lg:flex lg:flex-row-reverse  items-center lg:w-auto antialiased h-0">
                <div className="pr-4">
                  {" "}
                  <button
                    onClick={() => noAuthClick("/register")}
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-2xl focus:outline-none hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </button>
                </div>
                <div className="pr-4">
                  {" "}
                  <button
                    onClick={() => noAuthClick("/login")}
                    type="submit"
                    className="text-black hover:text-blue-500 dark:text-white focus:outline-none"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
  }

  // console.log(secretToken);

  // console.log(secretToken.token);
}

function mapStateToProps({ auth }) {
  return { auth: auth.authorized };
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
