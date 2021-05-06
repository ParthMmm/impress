import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-white dark:bg-gray-800">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
