import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
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
      .post("/users/signup", this.state)
      .then(res => {
        if (res.status === 201) {
          const data = {
            _id: res.data.user._id,
            username: res.data.user.username,
            token: res.data.token
          };

          localStorage.setItem("user", JSON.stringify(data));
          this.props.history.push(`/dashboard/${data._id}`);
        }
      })
      .catch(err => console.log("error"));
  }

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={this.onChange} />
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={this.onChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={this.onChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
