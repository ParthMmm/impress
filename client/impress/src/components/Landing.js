import React, { Component } from "react";
import Card from "./Card";
import Create from "./Create";
import Profile from "./Profile";

export default class Landing extends Component {
  render() {
    return (
      <div className="flex flex-row justify-center ">
        <div className="h-screen flex ">
          <div className="hidden md:flex pt-5 pr-5 flex-col flex-auto sticky top-0 h-screen">
            <Create />
          </div>
          <div className="flex-auto flex ">
            <div className="flex-auto overflow-y-scroll">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="hidden pt-5 pl-5 flex-col flex-auto sticky top-0 h-screen md:flex">
            <Create />
          </div>
          <div className="hidden pt-5 pl-5 flex-col flex-auto sticky top-0 h-screen md:flex"></div>
        </div>
      </div>
      // <div className="flex flex-row justify-center">
      //   <div className="my-6 px-6 w-1/3 overflow-hidden bg-gray-400">1</div>
      //   <div className="my-6 px-6 w-1/3 overflow-hidden bg-gray-400">2</div>
      //   <div className="my-6 px-6 w-1/3 overflow-hidden bg-gray-400">3</div>
      // </div>
    );
  }
}
