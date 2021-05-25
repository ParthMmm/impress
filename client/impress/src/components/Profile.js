import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { userProfile } from "../actions";
import history from "../util/history";
import { userLogOut, logOut } from "../actions";
function Profile({ secretToken, username, authorized }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile(secretToken));
  });
  const doLogOut = () => {
    dispatch(userLogOut());
    dispatch(logOut());
  };

  switch (authorized) {
    case undefined:
      return (
        <div className="bg-white dark:bg-gray-800 font-sans min-h-screen antialiased pt-24 pb-5">
          <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8 ">
            <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
              <h1 className="font-bold text-xl text-center">
                Authentication Error
              </h1>
              <h2 className="font-bold text-l text-center">Please Login</h2>
              <button
                onClick={() => history.push("/login")}
                type="submit"
                className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      );
    case false:
      return (
        <div>
          <h1>error</h1>
        </div>
      );
    default:
      return (
        <div className="bg-white dark:bg-gray-800 font-sans min-h-screen  pt-24 pb-5 ">
          <div className="flex flex-col justify-center  shadow-xl rounded-2xl sm:w-96 sm:m-auto mx-5 mb-5 space-y-8 bg-white border-2 border-blue-500 dark:border-white">
            <img
              className="w-full shadow-lg rounded-t-xl "
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{username}</div>
              <p className="text-grey-darker text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                #clicky
              </span>
              <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                #nk
              </span>
              <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                #zeal
              </span>
            </div>
            <div className="flex flex-row justify-between items-center pl-2 pr-2">
              <div className="flex pl-4 pb-2 ">
                <button
                  onClick={() => doLogOut()}
                  type="submit"
                  className="bg-white text-black px-5 py-2 rounded border-blue-500 hover:text-blue-500 focus:outline-black shadow transition-colors inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Edit Profile
                </button>
              </div>
              <div className="flex pr-4 pb-2">
                {" "}
                <button
                  onClick={() => doLogOut()}
                  type="submit"
                  className="bg-blue-500 text-white px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

function mapStateToProps({ auth, user }) {
  return {
    secretToken: auth.token,
    username: user.username,
    authorized: auth.authorized,
  };
}

export default connect(mapStateToProps)(Profile);
