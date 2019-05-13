import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      .post("/users/login")
      .then(res => console.log(res.status))
      .catch(err => console.log("error"));
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={this.onChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={this.onChange} />
          <input type="submit" value="Submit" />
        </form>
        <Link to={"/signup"}>Sign up</Link>
      </div>
    );
  }
}

export default SignIn;
