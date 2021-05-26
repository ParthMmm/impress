import React, { useEffect } from "react";
import { fetchPosts, fetchLikes, dislikePost, likePost } from "../actions/";
import { connect, useDispatch } from "react-redux";
import { LIKE_POST } from "../actions/types";

function Card({ posts, token, likedPosts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPosts(token));

    fetchPostsAndLikes(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const allPosts = posts?.reverse().map((post) => (
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
          <section className="flex flex-row justify-between items-center">
            <div className="text-sm font-semibold text-gray-400">
              {" "}
              <p className="pl-4 pt-2">{post.switchType}</p>
              {post.lube === "None" ? (
                <p className=" pl-4"></p>
              ) : (
                <p className=" pl-4">{post.lube}</p>
              )}
              {post.film === "None" ? (
                <p className=" pl-4"></p>
              ) : (
                <p className=" pl-4">{post.film}</p>
              )}
            </div>

            <div className="flex flex-row-reverse mr-2 mt-4">
              <div className="justify-center pl-4">
                <button
                  onClick={() => dislike(`${post._id}`)}
                  className="inline-flex items-center bg-blue-500 text-white px-4 py-2 font-semibold	 rounded-md shadow-2xl focus:outline-none hover:bg-blue-700 transition-colors"
                  id="dislike"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block h-5 w-5"
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
                  <span className="pr-3"></span>
                  {post.dislikes}
                </button>
              </div>

              <button
                onClick={() => like(`${post._id}`)}
                className="inline-flex items-center bg-blue-500 text-white px-4 py-2 font-semibold rounded-md shadow-2xl focus:outline-none hover:bg-blue-700 transition-colors"
                id="like"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-5 w-5 "
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
                <span className="pr-3"></span>
                {post.likes}
              </button>
            </div>
            {/* <div className=" items-end">
              {" "}
              <div className=" max-w-sm">
                {" "}
                <span className="mr-5 text-green-500">{post.likes}</span>
                <span className="mr-1 text-red-500">{post.dislikes}</span>
              </div>
            </div> */}
          </section>
          <p className="text-sm text-gray-600 p-4">{post.description}</p>
        </section>

        <footer className="p-4">
          <button className="uppercase font-bold text-sm text-blue-700 hover:underline mr-3">
            Share
          </button>
        </footer>
      </div>
    </div>
  ));

  return <div>{allPosts}</div>;
}

function mapStateToProps({ posts, auth, updatedPost, likedPosts }) {
  return { posts, token: auth.token, updatedPost, likedPosts };
}

function mapDispatchToProps(dispatch) {
  return {
    update: () => {
      dispatch(LIKE_POST);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
