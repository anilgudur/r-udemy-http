import React, { Component } from "react";
import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
  state = {
    fullPostObj: null
  };

  componentDidMount() {
    console.log("[FullPost] this.props", this.props);
    if (this.props.match.params.postId) {
      if (
        !this.state.fullPostObj ||
        (this.state.fullPostObj &&
          this.state.fullPostObj.id !== this.props.match.params.postId)
      ) {
        axios.get("/posts/" + this.props.match.params.postId).then(response => {
          this.setState({ fullPostObj: response.data });
        });
      }
    }
  }

  deletePostHandler() {
    axios.delete("/posts/" + this.props.id).then(response => {
      //this.setState({ fullPostObj: response.data });
      console.log("delete: ", response);
    });
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.fullPostObj) {
      post = (
        <div className='FullPost'>
          <h1>{this.state.fullPostObj.title}</h1>
          <p>{this.state.fullPostObj.body}</p>
          <div className='Edit'>
            <button
              className='Delete'
              onClick={this.deletePostHandler.bind(this)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
