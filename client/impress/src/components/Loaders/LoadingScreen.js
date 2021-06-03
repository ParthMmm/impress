import React, { useEffect } from "react";
import history from "../../util/history";
import Loader from "./Loader";
import { connect, useDispatch } from "react-redux";
import {
  fetchPosts,
  fetchLikes,
  fetchDislikes,
  userProfile,
  fetchAccessories,
} from "../../actions";
import SkeletonLoader from "./SkeletonLoader";

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
  let msg, path;
  if (location) {
    msg = location.state.message;
    path = location.state.path;
  }
  if (message && pathname) {
    msg = message;
    path = pathname;
  }

  useEffect(() => {
    dispatch(fetchPosts());

    if (token) {
      dispatch(userProfile(token));
      dispatch(fetchLikes(token));
      dispatch(fetchDislikes(token));
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
      <SkeletonLoader></SkeletonLoader>
      {/* <Loader message={msg}></Loader> */}
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
