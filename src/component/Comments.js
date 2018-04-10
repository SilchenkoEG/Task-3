import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import {request } from '../lib/request'

class ActionComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    request(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}/comments?`)
      .then(data => {
        this.setState({ data });
      });
  }
  render() {
    return (
      <ListGroup>
        {this.state.data.length &&
          this.state.data.map(item => {
            return <ListGroupItem bsStyle='info' key={item.id}>{item.name}</ListGroupItem>;
          })}
        <Button bsStyle='success' onClick={this.props.history.goBack}>Back</Button>
      </ListGroup>
    );
  }
}
export default withRouter(ActionComment);
