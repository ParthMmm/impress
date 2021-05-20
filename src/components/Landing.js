import React, { useEffect } from "react";
import Card from "./Card";

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden ">
      <div className="flex flex-row overflow-hidden sticky justify-center my-16 mt-15 pt-1 ">
        <div className=" overflow-hidden sticky h-screen flex flex-1 ">
          {/* <div className="hidden md:flex pt-5 pr-5 flex-col flex-auto sticky top-0 h-screen">
            <div className="bg-white  h-10 w-10">
              <h1>poggers</h1>
            </div>
          </div> */}
          <div className="flex-auto sticky flex ">
            <div className="flex-auto overflow-y-scroll ">
              <Card />
            </div>
          </div>
          {/* <div className="hidden pt-5 pl-5 flex-col flex-auto sticky top-0 h-screen md:flex"></div>
            <div className="hidden pt-5 pl-5 flex-col flex-auto sticky top-0 h-screen md:flex"></div> */}
        </div>
      </div>
    </div>
    // <div className="flex flex-row justify-center">
    //   <div className="my-6 px-6 w-1/3 overflow-hidden bg-gray-400">1</div>
    //   <div className="my-6 px-6 w-1/3 overflow-hidden bg-gray-400">2</div>
    //   <div className="my-6 px-6 w-1/3 overflow-hidden bg-gray-400">3</div>
    // </div>
  );
}

export default Landing;
