import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import  "./App.css";
import UsersList from "./component/UserList";
import Posts from "./component/Posts";
import Comments from "./component/Comments";
import { getUsers } from "./actions/users";
import { getPosts } from "./actions/posts";

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getPosts();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route path="/user/:id" component={Posts} />
        <Route path="/post/:postId/comments" component={Comments} />
      </Switch>
    );
  }
}

export default withRouter(
  connect(null, {
    getUsers,
    getPosts
  })(App)
);
