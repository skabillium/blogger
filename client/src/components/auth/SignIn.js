import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <Link to={"/signup"}>Sign up</Link>
      </div>
    );
  }
}

export default SignIn;
