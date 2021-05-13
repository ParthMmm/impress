import React, { useState } from "react";

import { connect, useDispatch } from "react-redux";
import history from "../util/history";
import "alpinejs";
import { authError } from "../actions";

function Header({ auth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(auth);
  const dispatch = useDispatch();
  const menuItemClick = (location) => {
    history.push(location);
    setMenuOpen(!menuOpen);
  };
  const noAuthClick = (location) => {
    history.push(location);
    dispatch(authError());
  };

  switch (auth) {
    // case undefined:
    //   return (
    //     <nav class="bg-white dark:bg-gray-800 flex items-center justify-between flex-wrap bg-teal-500 p-6 sticky">
    //       <div class="flex items-center flex-shrink-0 text-white mr-6">
    //         <span
    //           class="text-blue-500 font-semibold text-xl tracking-tight cursor-pointer"
    //           onClick={() => history.push("/")}
    //         >
    //           Im
    //           <span
    //             class="text-black font-semibold text-xl tracking-tight hover:text-blue-500  dark:text-white cursor-pointer"
    //             onClick={() => history.push("/")}
    //           >
    //             press
    //           </span>
    //         </span>
    //       </div>
    //       <div class="flex lg:hidden">
    //         <button
    //           class="flex items-center px-3 py-2 rounded  hover:text-blue-500 dark:text-white"
    //           onClick={() => setMenuOpen(!menuOpen)}
    //         >
    //           <svg
    //             class="fill-current h-3 w-3"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <title>Menu</title>
    //             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //           </svg>
    //         </button>
    //         {menuOpen ? (
    //           <div class=" flex items-center justify-between  shadow-xl ">
    //             <div class="md:px-2 sm: px-4">
    //               <div class="text-md flex-row">
    //                 <a
    //                   href="#responsive-header"
    //                   class="flex text-teal-200 hover:text-blue-500 dark:text-white"
    //                   onClick={() => menuItemClick("/login")}
    //                 >
    //                   Log In
    //                 </a>
    //               </div>
    //             </div>
    //             <div class=" md:px-2">
    //               <div class="text-md flex-row">
    //                 <a
    //                   href="#responsive-header"
    //                   class="flex text-teal-200 hover:text-blue-500 dark:text-white"
    //                   onClick={() => menuItemClick("/register")}
    //                 >
    //                   Register
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         ) : (
    //           <div></div>
    //         )}
    //       </div>
    //       <div class="w-full hidden lg:flex lg:items-center lg:w-auto">
    //         <div className="pr-4">
    //           {" "}
    //           <button
    //             onClick={() => history.push("/login")}
    //             type="submit"
    //             class="flex text-teal-200 hover:text-blue-500 dark:text-white"
    //           >
    //             Log In
    //           </button>
    //         </div>
    //         <div className="px-2">
    //           {" "}
    //           <button
    //             onClick={() => history.push("/register")}
    //             type="submit"
    //             className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
    //           >
    //             Get Started
    //           </button>
    //         </div>
    //       </div>
    //     </nav>
    //   );
    case true:
      return (
        <div>
          <nav class=" dark:bg-gray-800 items-center pl-6 pr-6 pt-4 pb-4 fixed w-full z-10 top-0">
            <div className="flex flex-row justify-between items-center">
              <span
                class="text-blue-500 font-semibold  text-2xl tracking-tight cursor-pointer antialiased"
                onClick={() => history.push("/")}
              >
                Im
                <span
                  class="text-black font-semibold  text-2xl tracking-tight hover:text-blue-500  dark:text-white cursor-pointer antialiased"
                  onClick={() => history.push("/")}
                >
                  press
                </span>
              </span>
              <div class="w-full hidden lg:flex lg:flex-row-reverse  items-center lg:w-auto antialiased h-0">
                <div className="pr-4">
                  {" "}
                  <button
                    onClick={() => history.push("/create")}
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-2xl focus:outline-none hover:bg-blue-700 transition-colors"
                  >
                    Create Post
                  </button>
                </div>
                <div className="pr-4">
                  {" "}
                  <button
                    onClick={() => history.push("/profile")}
                    type="submit"
                    class="text-black hover:text-blue-500 dark:text-white focus:outline-none"
                  >
                    Profile
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        // <nav class="dark:bg-gray-800 bg-teal-500 flex fixed items-center justify-between pl-6 pr-6 pt-6 pb-4 z-10  w-full  top-0 ">
        //   <div class="flex items-center flex-shrink-0 text-white mr-6">
        //     <span
        //       class="text-blue-500 font-semibold  text-2xl tracking-tight cursor-pointer antialiased"
        //       onClick={() => history.push("/")}
        //     >
        //       Im
        //       <span
        //         class="text-black font-semibold  text-2xl tracking-tight hover:text-blue-500  dark:text-white cursor-pointer antialiased"
        //         onClick={() => history.push("/")}
        //       >
        //         press
        //       </span>
        //     </span>
        //   </div>

        //   <div class="w-full hidden lg:flex lg:items-center lg:w-auto antialiased">
        //     <div className="pr-4">
        //       {" "}
        //       <button
        //         onClick={() => history.push("/profile")}
        //         type="submit"
        //         class="flex text-teal-200 hover:text-blue-500 dark:text-white focus:outline-none"
        //       >
        //         Profile
        //       </button>
        //     </div>
        //     <div className="pr-4">
        //       {" "}
        //       <button
        //         onClick={() => history.push("/create")}
        //         type="submit"
        //         className="bg-blue-500 text-white px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
        //       >
        //         Create Post
        //       </button>
        //     </div>
        //   </div>
        // </nav>
      );
    default:
      return (
        <div>
          <nav class=" dark:bg-gray-800 items-center pl-6 pr-6 pt-4 pb-4 fixed w-full z-10 top-0">
            <div className="flex flex-row justify-between items-center">
              <span
                class="text-blue-500 font-semibold  text-2xl tracking-tight cursor-pointer antialiased"
                onClick={() => noAuthClick("/")}
              >
                Im
                <span
                  class="text-black font-semibold  text-2xl tracking-tight hover:text-blue-500  dark:text-white cursor-pointer antialiased"
                  onClick={() => noAuthClick("/")}
                >
                  press
                </span>
              </span>
              <div class="w-full hidden lg:flex lg:flex-row-reverse  items-center lg:w-auto antialiased h-0">
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
                    class="text-black hover:text-blue-500 dark:text-white focus:outline-none"
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
