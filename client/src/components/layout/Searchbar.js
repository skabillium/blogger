import React, { Component } from "react";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      phrase: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.submitSearch(this.state.phrase);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          className="form-inline my-2 my-lg-0 search-bar"
        >
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            onChange={this.onChange}
            onClick={this.onClick}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
