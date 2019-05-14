import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class CheckAuth extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get("/checkAuth")
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            loading: false,
            route: `/dashboard/${res.data._id}`
          });
        }
      })
      .catch(err => {
        this.setState({
          loading: false,
          route: "/signup"
        });
      });
  }

  render() {
    const { loading, route } = this.state;
    if (loading) {
      return null;
    } else {
      return <Redirect to={route} />;
    }
  }
}

export default CheckAuth;
