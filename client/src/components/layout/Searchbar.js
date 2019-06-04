import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
