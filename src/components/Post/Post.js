import React from "react";
import "./Post.css";
import { withRouter } from "react-router-dom";

const post = props => {
  console.log("[Post.js] props", props);
  return (
    <article className='Post' onClick={props.postClick}>
      <h1>{props.title}</h1>
      <div className='Info'>
        <div className='Author'>{props.author}</div>
      </div>
    </article>
  );
};

export default withRouter(post);
