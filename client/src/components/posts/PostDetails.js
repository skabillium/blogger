import React, { Component } from "react";

import axios from "axios";

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.location.pathname.split("/")[2],
      title: "",
      content: "",
      posted: ""
    };
  }

  componentDidMount() {
    axios
      .get(`/posts/${this.state._id}`)
      .then(res => {
        this.setState({
          title: res.data.post.title,
          content: res.data.post.content,
          posted: res.data.post.posted
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  compo;

  render() {
    if (this.state.title) {
      return (
        <div>
          <h1>{this.state.title}</h1>
          <p>{this.state.content}</p>
          <br />
          <p>{this.state.posted}</p>
        </div>
      );
    } else {
      return <p>Loading</p>;
    }
  }
}

export default PostDetails;
