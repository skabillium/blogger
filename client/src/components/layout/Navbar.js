import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import Searchbar from "./Searchbar";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

class Navbar extends Component {
  constructor(props) {
    super(props);
    if (Cookies.get("user")) {
      this.state = {
        user_id: Cookies.get("user").split('"')[1]
      };
    } else {
      this.state = {
        user_id: false
      };
    }

    this.onLogout = this.onLogout.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  onLogout() {
    Cookies.remove("token");
    Cookies.remove("user");
    this.props.history.push("/");
  }

  submitSearch(phrase) {
    this.props.history.push(`/search/${phrase}`);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        {this.state.user_id ? (
          <Link to={`/dashboard/${this.state.user_id}`}>
            <div className="navbar-brand">Blogger</div>
          </Link>
        ) : (
          <Link to={`/signin`}>
            <div className="navbar-brand">Blogger</div>
          </Link>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          {Cookies.get("user") ? (
            <SignedInLinks onLogout={this.onLogout} />
          ) : (
            <SignedOutLinks />
          )}
          <Searchbar submitSearch={this.submitSearch} />
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
