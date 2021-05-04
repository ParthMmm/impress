import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className="rounded bg-white shadow max-w-wd mx-auto">
        <header className="p-4">
          <img
            className="w-10 h-10 m-1 mr-3 float-left rounded-full"
            src="http://lorempixel.com/64/64/nature/5/"
          />
          <h3 className="text-lg font-bold">Island Escape Holiday Package</h3>
          <p className="text-sm text-gray-600">
            5 nights (inc flights) from $1999
          </p>
        </header>
        <section>
          <img src="http://lorempixel.com/700/450/nature/5/" />
          <p className="text-sm text-gray-600 p-4">
            Omnis consectetur voluptatem labore aut et vel itaque recusandae. Et
            molestiae iure qui et nihil minus nes ciunt.
          </p>
        </section>
        <footer className="p-4">
          <a
            href="#"
            className="uppercase font-bold text-sm text-blue-700 hover:underline mr-3"
          >
            Book Online
          </a>
          <a
            href="#"
            className="uppercase font-bold text-sm text-blue-700 hover:underline"
          >
            More Info
          </a>
          <a href="#" className="float-right">
            <img src="https://img.icons8.com/flat_round/24/000000/share--v1.png" />
          </a>
          <a href="#" className="float-right mr-3">
            <img src="https://img.icons8.com/flat_round/24/000000/hearts.png" />
          </a>
        </footer>
      </div>
    );
  }
}

export default Card;
