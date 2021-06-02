import React, { useEffect } from "react";
import Card from "./Card";
import { connect, useDispatch } from "react-redux";
import { fetchPosts, fetchLikes, fetchDislikes } from "../../actions";
import Loader from "../Loaders/Loader";

function CardList({ posts, token, likesUpdated }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());

    if (token) {
      dispatch(fetchLikes(token));
      dispatch(fetchDislikes(token));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (posts) {
    return posts.map((post) => <Card key={post._id} post={post}></Card>);
  } else {
    return <Loader message="Fetching Posts..."></Loader>;
  }
}

function mapStateToProps({ posts, auth, likesUpdated }) {
  return { posts, token: auth.token, likesUpdated };
}

export default connect(mapStateToProps)(CardList);
