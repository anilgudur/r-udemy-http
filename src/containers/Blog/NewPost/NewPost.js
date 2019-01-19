import React, { Component } from "react";
import "./NewPost.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max",
    isPostSaved: false
  };

  savePostHandler() {
    const postData = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    axios.post("/posts", postData).then(response => {
      this.setState({ fullPostObj: response.data });
      this.props.history.replace("/posts");
      //console.log("[NewPost] - savePostHandler - post: ", response);
    });
  }

  render() {
    return (
      <div className='NewPost'>
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type='text'
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows='4'
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value='Max'>Max</option>
          <option value='Manu'>Manu</option>
        </select>
        <button onClick={this.savePostHandler.bind(this)}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
