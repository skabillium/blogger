import React from "react";
import { Link, withRouter } from "react-router-dom";

function SignedOutLinks() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/signin">
          <div className="nav-link">Log In</div>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signup">
          <div className="nav-link">Register</div>
        </Link>
      </li>
    </ul>
  );
}

export default withRouter(SignedOutLinks);
