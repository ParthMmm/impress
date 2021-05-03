import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Login from "./Login";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div class="bg-white dark:bg-gray-800">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
