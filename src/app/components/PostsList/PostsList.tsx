import React from "react";
import Post from "../Post/Post";
import "./PostsList.css";
import NewPost from "../NewPost/NewPost";

export default function PostsList() {
  return (
    <>
      <NewPost />
      <ul>
        <li>
          <Post author="Rafael César" body="Post do Rafa" />
        </li>
        <li>
          <Post author="Taynara Sampaio" body="Post da Tay" />
        </li>
        <li>
          <Post author="Caio Daniel" body="Post do Caio" />
        </li>
      </ul>
    </>
  );
}
