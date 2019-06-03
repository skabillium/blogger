import React, { Component } from "react";

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
