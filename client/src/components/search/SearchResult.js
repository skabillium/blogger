import React from "react";

function SearchResult({ user }) {
  return (
    <div className="list-group-item list-group item-action col-4">
      <div>{user.username}</div>
    </div>
  );
}

export default SearchResult;
