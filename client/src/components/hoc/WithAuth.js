import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const WithAuth = ComponentToProtect => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };
    }

    componentDidMount() {
      axios
        .get("/checkAuth")
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({ loading: false, redirect: true });
        });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default WithAuth;
