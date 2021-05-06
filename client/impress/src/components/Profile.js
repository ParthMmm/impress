import React from "react";
import { connect } from "react-redux";

function Profile(state) {
  return (
    <div className="bg-white dark:bg-gray-800 font-sans min-h-screen antialiased pt-24 pb-5">
      <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8 bg-white">
        <img
          class="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2"></div>
          <p class="text-grey-darker text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            #photography
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            #travel
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
  // switch (auth) {
  //   case null:
  //     return (
  //       <div>
  //         <h1>log in</h1>
  //       </div>
  //     );
  //   case false:
  //     return (
  //       <div>
  //         <h1>error</h1>
  //       </div>
  //     );
  //   default:
  //     return (
  //       <div className="bg-white dark:bg-gray-800 font-sans min-h-screen antialiased pt-24 pb-5">
  //         <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8 bg-white">
  //           <img
  //             class="w-full"
  //             src="https://tailwindcss.com/img/card-top.jpg"
  //             alt="Sunset in the mountains"
  //           />
  //           <div class="px-6 py-4">
  //             <div class="font-bold text-xl mb-2">{auth.user._id}</div>
  //             <p class="text-grey-darker text-base">
  //               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  //               Voluptatibus quia, nulla! Maiores et perferendis eaque,
  //               exercitationem praesentium nihil.
  //             </p>
  //           </div>
  //           <div class="px-6 py-4">
  //             <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
  //               #photography
  //             </span>
  //             <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
  //               #travel
  //             </span>
  //             <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
  //               #winter
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     );
  // }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
