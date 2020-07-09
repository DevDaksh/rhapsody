import React, { Component } from "react";
import { PostContext } from "../contexts/PostContext";
import DB from "../firebase/Fire";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  static contextType = PostContext;
  render() {
    const submitHandler = (e) => {
      e.preventDefault();
      DB.collection("Posts").add({
        post: this.state.content,
      });
    };

    return (
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type a message"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="post"
              id="input"
              onChange={(e) => this.setState({ content: e.target.value })}
            />
          </div>
          <input
            type="submit"
            className="btn btn-outline-dark"
            value="Post"
          ></input>
        </form>
      </div>
    );
  }
}
