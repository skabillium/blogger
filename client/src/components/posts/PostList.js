import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import PostSummary from "./PostSummary";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get(`/posts/${this.state.user}`)
      .then(res => {
        this.setState({
          posts: res.data
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="post-list">
        <h1>PostList</h1>

        {this.state.posts &&
          this.state.posts.map(post => {
            return (
              <Link to={"/post/" + post.id}>
                <PostSummary post={post} key={post._id} />
              </Link>
            );
          })}
      </div>
    );
  }
}

export default PostList;
