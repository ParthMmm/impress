import React, { useEffect, useState } from "react";
import { fetchPosts, fetchLikes, dislikePost, likePost } from "../actions/";
import { connect, useDispatch } from "react-redux";

function Card({ posts, token }) {
  const dispatch = useDispatch();
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts(token));

    fetchPostsAndLikes(token);
  }, []);
  const fetchPostsAndLikes = (token) => {
    dispatch(fetchPosts(token));
    dispatch(fetchLikes(token));
  };

  const dislike = (id) => {
    console.log("front end dislike");
    dispatch(dislikePost(token, id));
  };
  const like = (id) => {
    console.log("front end like");

    dispatch(likePost(token, id));
  };

  const allPosts = posts.reverse().map((post) => (
    <div className="pb-5" key={post._id}>
      <div className="rounded-xl bg-white shadow-xl lg:max-w-2xl  max-w-wd mx-auto object-fill border border-gray-300 items-center">
        <header className="p-4 ">
          <img
            className="w-10 h-10 m-1 mr-3 float-left rounded-full "
            src="https://img.icons8.com/material-rounded/96/000000/user-male-circle.png"
            alt="img"
          />
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="text-sm text-gray-600">{post.username}</p>
          <p className="text-sm text-gray-400 float-right">{post.datePosted}</p>
        </header>
        <div className="	">
          <section className="">
            {" "}
            <img className="mx-auto " src={post.picture} alt="img" />
          </section>
        </div>
        <section>
          {/* <img className="object-fill" src={post.picture} alt="img" /> */}
          <section className="flex flex-row">
            <p className="text-sm text-gray-500 p-4">{post.switchType}</p>
            <p className="text-sm text-gray-500 p-4">Lube: {post.lube}</p>
            <p className="text-sm text-gray-500 p-4">Film: {post.film}</p>
          </section>
          <p className="text-sm text-gray-600 p-4">{post.description}</p>
        </section>

        <footer className="p-4">
          <button className="uppercase font-bold text-sm text-blue-700 hover:underline mr-3">
            Share
          </button>

          <button
            onClick={() => dislike(`${post._id}`)}
            className="float-right"
            id="dislike"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              />
            </svg>
          </button>

          <button
            onClick={() => like(`${post._id}`)}
            className="float-right"
            id="like"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </button>
        </footer>
      </div>
    </div>
  ));

  return <div>{allPosts}</div>;
}

function mapStateToProps({ posts, auth }) {
  return { posts, token: auth.token };
}

export default connect(mapStateToProps, { fetchPosts })(Card);
