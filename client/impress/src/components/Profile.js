import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { userProfile } from "../actions";
import history from "../util/history";
import { userLogOut } from "../actions";

function Profile({ secretToken, username, authorized }) {
  console.log(secretToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfile(secretToken));
  });
  const logOut = () => {
    console.log("aaaaaasdf");
    dispatch(userLogOut());
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
        <div className="bg-white dark:bg-gray-800 font-sans min-h-screen  pt-24 pb-5">
          <div className="flex flex-col justify-center  rounded-2xl sm:w-96 sm:m-auto mx-5 mb-5 space-y-8 bg-white">
            <img
              className="w-full rounded-t-2xl shadow-md "
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
                #photography
              </span>
              <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                #travel
              </span>
              <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
                #winter
              </span>
            </div>
            <div className="flex flex-row-reverse pr-4 pb-2">
              {" "}
              <button
                onClick={() => logOut()}
                type="submit"
                className="bg-blue-500 text-white px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
              >
                Logout
              </button>
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
