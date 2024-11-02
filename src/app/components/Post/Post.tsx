import React from "react";
import "./Post.css";

type TPost = {
  author: string;
  body: string;
};

export default function Post(props: TPost) {
  return (
    <div className="post">
      <p className="author">{props.author}</p>
      <p className="text">{props.body}</p>
    </div>
  );
}
