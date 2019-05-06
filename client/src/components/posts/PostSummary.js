import React from "react";

function PostSummary({ post }) {
  return (
    <div className="post">
      <div>Title: {post.title}</div>
      <div>Content: {post.content}</div>
    </div>
  );
}

export default PostSummary;
