import React from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { userProfile } from "../actions";
import { userLogOut } from "../actions";

function Header(state) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { auth } = state;
  console.log(auth);
  const handleClick = () => {
    // const { secretToken } = state;
    // dispatch(userProfile(secretToken.token));
    // history.push("/profile");
  };

  const logOut = () => {
    // dispatch(userLogOut());
  };

  // console.log(secretToken);

  // console.log(secretToken.token);

  return (
    <div className="flex flex-row justify-center sticky">
      <div className="px-2">
        {" "}
        <button
          onClick={handleClick()}
          type="submit"
          className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
        >
          Profile
        </button>
      </div>
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
          onClick={logOut()}
          type="submit"
          className="justify-center bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
