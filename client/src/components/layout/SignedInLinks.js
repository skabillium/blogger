import React from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";

function SignedInLinks(props) {
  const user_id = Cookies.get("user").split('"')[1];

  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to={`/create-post/${user_id}`}>
          <div className="nav-link">Create Post</div>
        </Link>
      </li>
      <li className="nav-item">
        <div className="nav-link" onClick={() => props.onLogout()}>
          Log out
        </div>
      </li>
    </ul>
  );
}

export default withRouter(SignedInLinks);
