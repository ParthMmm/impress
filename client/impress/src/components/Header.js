import React from "react";

import { connect, useDispatch } from "react-redux";
import { userLogOut } from "../actions";
import history from "../util/history";

function Header({ auth }) {
  const dispatch = useDispatch();
  console.log(auth);

  const logOut = () => {
    console.log("aaaaaasdf");
    dispatch(userLogOut());
  };

  const showMenu = () => {
    console.log("I will show menu");
  };

  switch (auth) {
    case undefined:
      return (
        <nav class="bg-white flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="text-black font-semibold text-xl tracking-tight">
              Impress
            </span>
          </div>
          <div class="flex lg:hidden">
            <button
              class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-blue-500"
              onClick={() => showMenu()}
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="w-full hidden lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Sign In
              </a>
            </div>
            <div className="px-2">
              {" "}
              <button
                onClick={() => history.push("/register")}
                type="submit"
                className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
      );
    case true:
      return (
        <div className="flex flex-row justify-center sticky">
          <div className="px-2">
            {" "}
            <button
              onClick={() => history.push("/profile")}
              type="submit"
              className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
            >
              Profile
            </button>
          </div>

          <div className="px-2">
            {" "}
            <button
              onClick={() => history.push("/")}
              type="submit"
              className="justify-center bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
            >
              Home
            </button>
          </div>
          <div className="px-2">
            {" "}
            <button
              onClick={() => logOut()}
              type="submit"
              className="justify-center bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex flex-row sticky">
          <div className="px-2">
            {" "}
            <button
              onClick={() => history.push("/login")}
              type="submit"
              className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
            >
              Log In
            </button>
          </div>
          <div className="px-2">
            {" "}
            <button
              onClick={() => history.push("/")}
              type="submit"
              className="justify-center bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
            >
              Home
            </button>
          </div>
          <div className="px-2">
            {" "}
            <button
              onClick={() => logOut()}
              type="submit"
              className="justify-center bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
            >
              Logout
            </button>
          </div>
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
