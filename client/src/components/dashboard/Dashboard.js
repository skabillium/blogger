import React, { Component } from "react";

import PostList from "../posts/PostList";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <PostList />
      </div>
    );
  }
}

export default Dashboard;
