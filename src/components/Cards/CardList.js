import React, { useEffect } from "react";
import Loader from "../Loader";
import Card from "./Card";
import { connect, useDispatch } from "react-redux";
import { fetchPosts, fetchLikes, fetchDislikes } from "../../actions";

function CardList({ posts, token, likedPosts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());

    if (token) {
      dispatch(fetchLikes(token));
      dispatch(fetchDislikes(token));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  switch (posts) {
    case null:
      console.log("empty");
      return <Loader message="Fetching Posts..."></Loader>;
    case "":
      return <Loader message="Fetching Posts..."></Loader>;
    default:
      return posts.map((post) => <Card key={post._id} post={post}></Card>);
  }
}

function mapStateToProps({ posts, auth, updatedPost, likedPosts }) {
  return { posts, token: auth.token, updatedPost, likedPosts };
}

export default connect(mapStateToProps)(CardList);
