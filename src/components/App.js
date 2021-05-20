import React from "react";
import { Route, Router } from "react-router-dom";
import history from "../util/history";
import BottomNav from "./BottomNav";
import Create from "./Create";
import Header from "./Header";
import Landing from "./Landing";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";

function App() {
  return (
    <div>
      <Router history={history}>
        <div className="">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/create" component={Create} />
          <BottomNav />
        </div>
      </Router>
    </div>
  );
}

export default App;
