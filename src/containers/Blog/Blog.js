import React, { Component } from "react";

// import FullPost from "../../components/FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

//import axiosInstance from "../../axios";

class Blog extends Component {
  render() {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to='/posts/'
                  exact
                  activeClassName='active'
                  activeStyle={{ color: "fa923f", textDecoration: "underline" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#2",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        <Switch>
          <Route path='/new-post' component={NewPost} />
          <Route path='/posts' component={Posts} />
          {/* <Route path='/:postId' exact component={FullPost} /> */}
        </Switch>
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
