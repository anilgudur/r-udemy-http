import React, { Component } from "react";
import Post from "../../../components/Post/Post";
//import axios from "axios";
import axiosInstance from "../../../axios";
import "./Posts.css";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: []
    // selectedPostId: null,
    // error: false
  };

  componentDidMount() {
    console.log("[Posts] props: ", this.props);
    axiosInstance
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return { ...post, author: "Max" };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(err => {
        //console.log("err: ", err);
        //this.setState({ error: true });
      });
  }

  postClickHandler = id => {
    //console.log("id: ", id);
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = (
      <p style={{ textAlign: "center", color: "red" }}>Something went wrong!</p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={"/" + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              postClick={this.postClickHandler.bind(this, post.id)}
            />
          </Link>
        );
      });
    }

    return <section className='Posts'>{posts}</section>;
  }
}

export default Posts;
