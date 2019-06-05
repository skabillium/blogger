import React, { Component } from "react";

class UpdatePostButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post._id
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onUpdate();
  }

  render() {
    return (
      <button className="btn btn-success" onClick={this.onClick}>
        Update
      </button>
    );
  }
}

export default UpdatePostButton;
