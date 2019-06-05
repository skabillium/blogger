import React, { Component, Fragment } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import DeletePostButton from "./DeletePostButton";
import UpdatePostButton from "./UpdatePostButton";

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.location.pathname.split("/")[2],
      title: "",
      content: "",
      posted: "",
      user_id: ""
    };

    this.onDeleted = this.onDeleted.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onDeleted() {
    const user = Cookies.get("user").split('"')[1];
    this.props.history.push(`/dashboard/${user}`);
  }

  onUpdate() {
    console.log(this.props);
    this.props.history.push(`/edit-post/${this.state._id}`);
  }

  componentDidMount() {
    axios
      .get(`/posts/${this.state._id}`)
      .then(res => {
        this.setState({
          title: res.data.post.title,
          content: res.data.post.content,
          posted: res.data.post.posted,
          user_id: res.data.post.user_id
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const user = Cookies.get("user").split('"')[1];
    let buttons;
    if (user === this.state.user_id) {
      buttons = DeletePostButton;
    }
    if (this.state.title) {
      return (
        <div className="center">
          <h3>{this.state.title}</h3>
          <br />
          <p>{this.state.content}</p>
          <br />
          <p>{this.state.posted}</p>
          {user === this.state.user_id ? (
            <Fragment>
              <DeletePostButton onDeleted={this.onDeleted} post={this.state} />
              <UpdatePostButton onUpdate={this.onUpdate} post={this.state} />
            </Fragment>
          ) : null}
        </div>
      );
    } else {
      return <p>Loading</p>;
    }
  }
}

export default PostDetails;
