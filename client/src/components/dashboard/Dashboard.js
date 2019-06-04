import React, { Component } from "react";
import Cookies from "js-cookie";

import PostList from "../posts/PostList";

class Dashboard extends Component {
  render() {
    const user = this.props.location.pathname.split("/")[2];

    return (
      <div>
        <PostList user={user} />
      </div>
    );
  }
}

export default Dashboard;
