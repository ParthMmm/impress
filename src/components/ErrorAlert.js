import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
function ErrorAlert({ msg }) {
  const [showError, setShowError] = useState(true);
  useEffect(() => {
    // Update the document title using the browser API
    setShowError(true);
  }, []);
  console.log(showError);
  return (
    // <div className="">
    //   <div
    //     className="bg-white flex-row text-red-700 pl-4 pr-8 py-3 rounded relative"
    //     role="alert"
    //   >
    //     <strong className="font-bold">Error! </strong>
    //     <span className="block sm:inline">{msg}</span>
    //     {/* <span className="absolute pin-t pin-b pin-r pr-2 ">
    //       <svg
    //         className="h-6 w-6 text-red"
    //         role="button"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 20 20"
    //       >
    //         <title>Close</title>
    //         <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
    //       </svg>
    //     </span> */}
    //   </div>
    // </div>
    <div>
      {showError ? (
        <div class="bg-red-50 p-4 rounded flex items-start text-red-600 my-4 shadow-lg mx-auto max-w-2xl">
          <div class="text-lg">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current w-5 pt-1"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
              </svg>
            </span>
          </div>
          <div class=" px-3">
            <h3 class="text-red-800 font-semibold tracking-wider">Error</h3>
            <ul class="list-disc list-inside">
              <li>
                <span className="block sm:inline">{msg}</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

function mapStateToProps({ auth }) {
  return { error: auth.auth, msg: auth.msg };
}

export default connect(mapStateToProps)(ErrorAlert);
