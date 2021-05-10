import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { authError } from "../actions";
function ErrorAlert({ msg }) {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  console.log("paaaps");

  useEffect(() => {
    setShow(false);
    // setTimeout(() => {
    //   dispatch(authError());
    // }, 10000);
  }, []);

  return (
    <div className="">
      <div
        className="bg-white flex-row text-red-700 pl-4 pr-8 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error! </strong>
        <span className="block sm:inline">{msg}</span>
        {/* <span className="absolute pin-t pin-b pin-r pr-2 ">
          <svg
            className="h-6 w-6 text-red"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span> */}
      </div>
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { error: auth.auth, msg: auth.msg };
}

export default connect(mapStateToProps)(ErrorAlert);
