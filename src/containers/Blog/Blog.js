import React, { Component, Suspense } from "react";

// import FullPost from "../../components/FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
// import asyncComponent from "../../hoc/asyncComponent";
// const AsyncNewPost = asyncComponent(() => {
//   return import("./NewPost/NewPost");
// });
const AsyncNewPost = React.lazy(() => import("./NewPost/NewPost"));

//import FullPost from "./FullPost/FullPost";

//import axiosInstance from "../../axios";

class Blog extends Component {
  state = {
    auth: true
  };

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
                  activeStyle={{
                    color: "fa923f",
                    textDecoration: "underline"
                  }}
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
          {/*this.state.auth ? (
            <Route path='/new-post' component={NewPost} />
          ) : null*/}
          {this.state.auth ? (
            //<Route path='/new-post' component={AsyncNewPost} />
            <Route
              path='/new-post'
              render={() => (
                <Suspense fallback={<div>Loading...</div>}>
                  <AsyncNewPost />
                </Suspense>
              )}
            />
          ) : null}
          <Route path='/posts' component={Posts} />
          {/* <Redirect from='/' to='/posts' /> */}
          <Route render={() => <h1>Not found</h1>} />
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
