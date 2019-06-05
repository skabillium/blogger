import React, { Component } from "react";

import axios from "axios";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.pathname.split("/")[2],
      user_id: "",
      title: "",
      content: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/posts/${this.state.id}`)
      .then(res =>
        this.setState({
          title: res.data.post.title,
          content: res.data.post.content,
          user_id: res.data.post.user_id
        })
      )
      .catch(err => console.log(err));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .patch(`/posts/${this.state.id}`, {
        title: this.state.title,
        content: this.state.content,
        user_id: this.state.user_id
      })
      .then(res => {
        if (res.status === 200) this.props.history.push(`/`);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              defaultValue={this.state.title}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <div className="col-sm-10">
            <textarea name="content" onChange={this.onChange} rows="3">
              {this.state.content}
            </textarea>
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    );
  }
}

export default EditPost;
