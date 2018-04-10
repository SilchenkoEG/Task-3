import React, { Component } from "react";
import { Route, Switch,withRouter } from "react-router-dom";
import { connect } from "react-redux";

import css  from '../App.css'
import UsersList from "../component/UserList";
import Posts from "../component/Posts";
import Comments from "../component/Comments";
import {getData } from '../actions/users';
import {getPosts } from '../actions/posts';


class App extends Component {
  componentDidMount () {
    this.props.getData();
    this.props.getPosts();
  }
  // componentDidMount () {
    
  // }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={UsersList}/>
        <Route path="/user/:id" component = {Posts}/>
        <Route path="/post/:postId/comments" component={Comments} />
      </Switch>
    );
  }
}

export default withRouter(connect(
  null,
  {
    getData,
    getPosts
  }
)(App));
