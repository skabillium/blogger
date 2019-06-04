import React, { Component } from "react";

import axios from "axios";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.location.pathname.split("/")[2],
      title: "",
      content: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .post("/posts", this.state)
      .then(res => this.props.history.push(`/dashboard/${this.state.user_id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={this.onChange} />
        <label htmlFor="content">Content</label>
        <input type="text" name="content" onChange={this.onChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreatePost;
