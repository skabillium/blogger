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
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <div className="col-sm-10">
            <input type="text" name="title" onChange={this.onChange} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <div className="col-sm-10">
            <textarea
              name="content"
              className="form-control"
              rows="3"
              onChange={this.onChange}
            />
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    );
  }
}

export default CreatePost;
