import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./css/bootstrap.min.css";

import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreatePost from "./components/posts/CreatePost";
import EditPost from "./components/posts/EditPost";

import CheckAuth from "./components/auth/CheckAuth";
import WithAuth from "./components/hoc/WithAuth";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={CheckAuth} />
            <Route path="/dashboard" component={WithAuth(Dashboard)} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/post/:id" component={PostDetails} />
            <Route
              path="/create-post/:user_id"
              component={WithAuth(CreatePost)}
            />
            <Route path="/edit-post/:post_id" component={WithAuth(EditPost)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
