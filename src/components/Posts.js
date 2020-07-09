import React, { Component } from "react";
import { PostContext } from "../contexts/PostContext";
import spinner from "../assets/loader.gif";
import PostList from "./PostList";

export default class Posts extends Component {
  static contextType = PostContext;
  render() {
    const { post } = this.context;
    return (
      <div>
        {this.context.renderPost ? (
          <PostList post={post} key={post.index} />
        ) : (
          <img src={spinner} alt="spinner" className="spinner" />
        )}
      </div>
    );
  }
}
