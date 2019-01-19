import React, { Component } from "react";
import Post from "../../../components/Post/Post";
//import axios from "axios";
import axiosInstance from "../../../axios";
import "./Posts.css";
//import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

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
    //this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: "/posts/" + id });
    //this.props.history.push("/posts/" + id); // Alternative way
  };

  render() {
    let posts = (
      <p style={{ textAlign: "center", color: "red" }}>Something went wrong!</p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          //<Link to={"/posts/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            postClick={this.postClickHandler.bind(this, post.id)}
          />
          //</Link>
        );
      });
    }

    return (
      <div>
        <section className='Posts'>{posts}</section>
        <Route
          path={this.props.match.url + "/:postId"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
