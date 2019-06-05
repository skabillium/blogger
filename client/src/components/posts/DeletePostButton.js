import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";

class DeletePostButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post._id,
      user: Cookies.get("user").split('"')[1]
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    axios
      .delete(`/posts/${this.state.post}/${this.state.user}`)
      .then(res => {
        if (res.status === 200) {
          this.props.onDeleted();
        } else {
          throw new Error("something wrong");
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    return (
      <button className="btn btn-danger" onClick={this.onClick}>
        Delete
      </button>
    );
  }
}

export default DeletePostButton;
