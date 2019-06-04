import React from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import Searchbar from "./Searchbar";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Navbar() {
  //   let links;
  //   if () {
  //     links = SignedInLinks;
  //   } else {
  //     links = SignedOutLinks;
  //   }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
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
        {Cookies.get("user") ? <SignedInLinks /> : <SignedOutLinks />}
        <Searchbar />
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
