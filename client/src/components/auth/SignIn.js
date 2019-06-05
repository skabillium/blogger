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
      .post("/users/login", this.state)
      .then(res => {
        if (res.status === 200) {
          this.props.history.push(`/dashboard/${res.data._id}`);
        }
      })
      .catch(err => console.log("error"));
  }

  render() {
    return (
      <div>
        <h3>Sign In</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="col-sm-10">
              <input type="text" name="username" onChange={this.onChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="col-sm-10">
              <input type="password" name="password" onChange={this.onChange} />
            </div>
          </div>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
        <Link to={"/"}>Sign up</Link>
      </div>
    );
  }
}

export default SignIn;
