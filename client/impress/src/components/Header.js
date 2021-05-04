import React from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { userProfile } from "../actions";

function Header(state) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(secretToken.token);
    dispatch(userProfile(secretToken.token));
    history.push("/profile");
  };

  const { secretToken } = state;
  // console.log(secretToken);

  console.log(secretToken.token);

  return (
    <div>
      <button
        onClick={handleClick}
        type="submit"
        className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
      >
        Profile
      </button>
    </div>
  );
}

function mapStateToProps({ secretToken }) {
  return { secretToken };
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
