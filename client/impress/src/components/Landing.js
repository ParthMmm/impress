import React, { Component } from "react";
import Card from "./Card";
import Create from "./Create";
import Profile from "./Profile";

export default class Landing extends Component {
  render() {
    return (
      <div class="flex flex-row justify-center ">
        <div class="h-screen flex ">
          <div class="hidden md:flex pt-5 pr-5 flex-col flex-auto sticky top-0 h-screen">
            <Create />
          </div>
          <div class="flex-auto flex ">
            <div class="flex-auto overflow-y-scroll">
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
          <div class="hidden pt-5 pl-5 flex-col flex-auto sticky top-0 h-screen md:flex">
            <Create />
          </div>
        </div>
      </div>
      // <div class="flex flex-row justify-center">
      //   <div class="my-6 px-6 w-1/3 overflow-hidden bg-gray-400">1</div>
      //   <div class="my-6 px-6 w-1/3 overflow-hidden bg-gray-400">2</div>
      //   <div class="my-6 px-6 w-1/3 overflow-hidden bg-gray-400">3</div>
      // </div>
    );
  }
}
