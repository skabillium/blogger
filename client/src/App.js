import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreatePost from "./components/posts/CreatePost";
import EditPost from "./components/posts/EditPost";
import Navbar from "./components/layout/Navbar";
import SearchPage from "./components/search/SearchPage";

import CheckAuth from "./components/auth/CheckAuth";
import WithAuth from "./components/hoc/WithAuth";

import "./css/bootstrap.min.css";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <br />
          <br />
          <Switch>
            <Route exact path="/" component={CheckAuth} />
            <Route path="/dashboard" component={WithAuth(Dashboard)} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/post/:id" component={WithAuth(PostDetails)} />
            <Route
              path="/create-post/:user_id"
              component={WithAuth(CreatePost)}
            />
            <Route path="/edit-post/:post_id" component={WithAuth(EditPost)} />
            <Route path="/search/:term" component={SearchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
