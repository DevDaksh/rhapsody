import React, { createContext, Component } from "react";
import DB from "../firebase/Fire";

export const PostContext = createContext();

export default class PostContextProvider extends Component {
  state = {
    post: [{}],
    renderPost: false,
  };

  render() {
    // DB.collection("Posts")
    //   .get()
    //   .then((post) => {
    //     console.log(post);
    //     const arr = [];
    //     post.docs.forEach((el) => {
    //       const data = el.data().post;
    //       arr.push(data);
    //     });
    //     this.setState({
    //       post: arr,
    //       renderPost: true,
    //     });
    //   });

    DB.collection("Posts")
      .orderBy("createdAt", "desc")
      .limit(20)
      .onSnapshot((snapshot) => {
        let changes = snapshot.docChanges();
        let arr = [];
        changes.forEach((change) => {
          arr.push({ post: change.doc.data().post, index: change.newIndex });
        });
        this.setState({ post: arr, renderPost: true });
      });

    return (
      <PostContext.Provider value={{ ...this.state, addPost: this.addPost }}>
        {this.props.children}
      </PostContext.Provider>
    );
  }
}
