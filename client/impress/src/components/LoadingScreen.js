import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import history from "../util/history";
import { connect, useDispatch } from "react-redux";
import {
  fetchPosts,
  fetchLikes,
  fetchDislikes,
  userProfile,
  fetchAccessories,
} from ".././actions";

function LoadingScreen({
  location,
  message,
  pathname,
  posts,
  token,
  profile,
  likedPosts,
  dislikedPosts,
  fetchData,
}) {
  const dispatch = useDispatch();
  //   const [msg, setMessage] = useState("");
  //   const [path, setPath] = useState("");
  let msg, path;
  if (location) {
    // setPath(location.state.path);
    console.log(location.state);
    msg = location.state.message;
    path = location.state.path;
    // setMessage(location.state.message);
  }
  if (message && pathname) {
    // setMessage(message);
    msg = message;
    path = pathname;
  }

  useEffect(() => {
    if (token) {
      dispatch(userProfile(token));
      dispatch(fetchLikes(token));
      dispatch(fetchDislikes(token));
      dispatch(fetchPosts(token));
      dispatch(fetchAccessories());

      if ((posts && profile) || likedPosts || dislikedPosts || fetchData) {
        history.push(path);
      }
    } else {
      history.push(path);
    }
  });

  return (
    <div>
      <Loader message={msg}></Loader>
    </div>
  );
}

function mapStateToProps({
  posts,
  auth,
  profile,
  likedPosts,
  dislikedPosts,
  fetchData,
}) {
  return {
    posts,
    token: auth.token,
    profile,
    likedPosts,
    dislikedPosts,
    fetchData,
  };
}

export default connect(mapStateToProps)(LoadingScreen);
