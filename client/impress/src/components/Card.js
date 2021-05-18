import React, { useEffect } from "react";
import { fetchPosts } from "../actions/";
import { connect, useDispatch } from "react-redux";

function Card({ posts, token }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(token));
    console.log(posts);
  }, []);
  const allPosts = posts.map((post) => (
    <div className="pb-5" key={post._id}>
      <div className="rounded bg-white shadow lg:max-w-2xl  max-w-wd mx-auto">
        <header className="p-4">
          <img
            className="w-10 h-10 m-1 mr-3 float-left rounded-full"
            src="http://lorempixel.com/64/64/nature/5/"
            alt="img"
          />
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="text-sm text-gray-600">{post.username}</p>
          <p className="text-sm text-gray-600 float-right">{post.datePosted}</p>
        </header>
        <section className="object-scale-down">
          <img src={post.picture} alt="img" />
          <p className="text-sm text-gray-600 p-4">{post.description}</p>
        </section>
        <footer className="p-4">
          <button className="uppercase font-bold text-sm text-blue-700 hover:underline mr-3">
            Book Online
          </button>
          <button className="uppercase font-bold text-sm text-blue-700 hover:underline">
            More Info
          </button>
          <button className="float-right">
            <img
              src="https://img.icons8.com/flat_round/24/000000/share--v1.png"
              alt="img"
            />
          </button>
          <button className="float-right mr-3">
            <img
              src="https://img.icons8.com/flat_round/24/000000/hearts.png"
              alt="img"
            />
          </button>
        </footer>
      </div>
    </div>
  ));

  return (
    <div>{allPosts}</div>
    // <div className="pb-5">
    //   <div className="rounded bg-white shadow lg:max-w-2xl  max-w-wd mx-auto">
    //     <header className="p-4">
    //       <img
    //         className="w-10 h-10 m-1 mr-3 float-left rounded-full"
    //         src="http://lorempixel.com/64/64/nature/5/"
    //         alt="img"
    //       />
    //       <h3 className="text-lg font-bold">Island Escape Holiday Package</h3>
    //       <p className="text-sm text-gray-600">
    //         5 nights (inc flights) from $1999
    //       </p>
    //     </header>
    //     <section className="object-scale-down">
    //       <img
    //         src="http://res.cloudinary.com/dnswq1qos/image/upload/v1621361255/impress/posts/2021-05-18T18:07:32.614Z.png"
    //         alt="img"
    //       />
    //       <p className="text-sm text-gray-600 p-4">
    //         Omnis consectetur voluptatem labore aut et vel itaque recusandae. Et
    //         molestiae iure qui et nihil minus nes ciunt.
    //       </p>
    //     </section>
    //     <footer className="p-4">
    //       <button className="uppercase font-bold text-sm text-blue-700 hover:underline mr-3">
    //         Book Online
    //       </button>
    //       <button className="uppercase font-bold text-sm text-blue-700 hover:underline">
    //         More Info
    //       </button>
    //       <button className="float-right">
    //         <img
    //           src="https://img.icons8.com/flat_round/24/000000/share--v1.png"
    //           alt="img"
    //         />
    //       </button>
    //       <button className="float-right mr-3">
    //         <img
    //           src="https://img.icons8.com/flat_round/24/000000/hearts.png"
    //           alt="img"
    //         />
    //       </button>
    //     </footer>
    //   </div>
    // </div>
  );
}

function mapStateToProps({ posts, auth }) {
  return { posts, token: auth.token };
}

export default connect(mapStateToProps, { fetchPosts })(Card);
