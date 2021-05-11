import React, { useState } from "react";

import { connect } from "react-redux";
import history from "../util/history";
function Header({ auth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(auth);

  const menuItemClick = (location) => {
    history.push(location);
    setMenuOpen(!menuOpen);
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
        <nav class="bg-white dark:bg-gray-800 flex items-center justify-between flex-wrap bg-teal-500 p-6 sticky">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span
              class="text-blue-500 font-semibold text-xl tracking-tight cursor-pointer"
              onClick={() => history.push("/")}
            >
              Im
              <span
                class="text-black font-semibold text-xl tracking-tight hover:text-blue-500  dark:text-white cursor-pointer"
                onClick={() => history.push("/")}
              >
                press
              </span>
            </span>
          </div>
          <div class="flex lg:hidden">
            <button
              class="flex items-center px-3 py-2 rounded focus:outline-none  hover:text-blue-500 dark:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
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
            {menuOpen ? (
              <div class=" flex items-center justify-between shadow-xl ">
                <div class="md:px-2 sm: px-4">
                  <div class="text-md flex-row">
                    <button
                      class="flex text-teal-200 hover:text-blue-700 dark:text-white focus:outline-none"
                      onClick={() => menuItemClick("/profile")}
                    >
                      Profile
                    </button>
                  </div>
                </div>
                <div class=" md:px-2">
                  <div class="text-md flex-row">
                    <button
                      className="bg-blue-500 text-white px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                      onClick={() => menuItemClick("/create")}
                    >
                      Create Post
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div class="w-full hidden lg:flex lg:items-center lg:w-auto">
            <div className="pr-4">
              {" "}
              <button
                onClick={() => history.push("/profile")}
                type="submit"
                class="flex text-teal-200 hover:text-blue-500 dark:text-white focus:outline-none"
              >
                Profile
              </button>
            </div>
            <div className="pr-4">
              {" "}
              <button
                onClick={() => history.push("/create")}
                type="submit"
                className="bg-blue-500 text-white px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
              >
                Create Post
              </button>
            </div>
          </div>
        </nav>
      );
    default:
      return (
        <nav class="bg-white dark:bg-gray-800 flex items-center justify-between flex-wrap bg-teal-500 p-6 sticky">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span
              class="text-blue-500 font-semibold text-xl tracking-tight cursor-pointer"
              onClick={() => history.push("/")}
            >
              Im
              <span
                class="text-black font-semibold text-xl tracking-tight hover:text-blue-500  dark:text-white cursor-pointer"
                onClick={() => history.push("/")}
              >
                press
              </span>
            </span>
          </div>
          <div class="flex lg:hidden">
            <button
              class="flex items-center px-3 py-2 rounded focus:outline-none  hover:text-blue-500 dark:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
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
            {menuOpen ? (
              <div class=" flex items-center justify-between  shadow-xl ">
                <div class="md:px-2 sm: px-4">
                  <div class="text-md flex-row">
                    <button
                      class="flex text-teal-200 hover:text-blue-500 dark:text-white"
                      onClick={() => menuItemClick("/login")}
                    >
                      Log In
                    </button>
                  </div>
                </div>
                <div class=" md:px-2">
                  <div class="text-md flex-row">
                    <a
                      href="#responsive-header"
                      class="flex text-teal-200 hover:text-blue-500 dark:text-white"
                      onClick={() => menuItemClick("/register")}
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div class="w-full hidden lg:flex lg:items-center lg:w-auto">
            <div className="pr-4">
              {" "}
              <button
                onClick={() => history.push("/login")}
                type="submit"
                class="flex text-teal-200 hover:text-blue-500 dark:text-white focus:outline-none"
              >
                Log In
              </button>
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
  }

  // console.log(secretToken);

  // console.log(secretToken.token);
}

function mapStateToProps({ auth }) {
  return { auth: auth.authorized };
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
