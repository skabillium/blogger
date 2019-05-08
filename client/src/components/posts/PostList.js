import React, { Component } from "react";
import { Link } from "react-router-dom";

import PostSummary from "./PostSummary";

class PostList extends Component {
  state = {
    posts: [
      { id: 1, title: "post 1", content: "content1" },
      { id: 2, title: "post 2", content: "content2" },
      { id: 3, title: "post 3", content: "content3" }
    ]
  };

  render() {
    return (
      <div className="post-list">
        <h1>PostList</h1>

        {this.state.posts &&
          this.state.posts.map(post => {
            return (
              <Link to={"/post/" + post.id}>
                <PostSummary post={post} key={post.id} />
              </Link>
            );
          })}
      </div>
    );
  }
}

export default PostList;
