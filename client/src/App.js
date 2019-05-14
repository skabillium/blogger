import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import WithAuth from "./components/hoc/WithAuth";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={WithAuth(Dashboard)} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/post/:id" component={PostDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
