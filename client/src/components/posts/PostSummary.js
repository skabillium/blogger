import React from "react";

function PostSummary({ post }) {
  return (
    <div className="card text-white bg-primary mb-3" style={style}>
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  );
}

const style = {
  maxWidth: "20rem"
};

export default PostSummary;
