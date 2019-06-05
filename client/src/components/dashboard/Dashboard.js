import React, { Component } from "react";

import PostList from "../posts/PostList";

class Dashboard extends Component {
  render() {
    const user = this.props.location.pathname.split("/")[2];

    return (
      <div className="dashboard">
        <h3>Dashboard</h3>
        <br />
        <PostList user={user} />
      </div>
    );
  }
}

export default Dashboard;
