import React from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { userProfile } from "../actions";
import { userLogOut } from "../actions";
import _ from "lodash";
function Header({ auth }) {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(auth);
  console.log(_.isEmpty(auth));
  const handleClick = () => {
    // const { secretToken } = state;
    // dispatch(userProfile(secretToken.token));
    // history.push("/profile");
  };

  const logOut = () => {
    console.log("aaaaaasdf");
    dispatch(userLogOut());
  };

  switch (auth) {
    case undefined:
      return (
        <div className="flex flex-row justify-center sticky">
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
        <div className="flex flex-row justify-center sticky">
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
