import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SearchResult from "./SearchResult";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      results: []
    };
  }

  updateState() {
    const term = this.props.match.params.term;
    let results = [];
    axios
      .get(`/search/${term}`)
      .then(res => {
        for (let i in res.data) {
          results.push(res.data[i]);
        }
        if (this.state.term !== term) {
          this.setState({
            results,
            term
          });
        } else this.setState({ results });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.term !== this.props.match.params.term) {
      this.updateState();
    }

    const { results } = this.state;
    const display = results.map(r => {
      return (
        <Link to={`/dashboard/${r._id}`}>
          <SearchResult user={r} key={r._id} />
        </Link>
      );
    });

    return (
      <div>
        <h3>Search Results</h3>
        <br />
        <div className="list-group">{display}</div>
      </div>
    );
  }
}

export default SearchPage;
