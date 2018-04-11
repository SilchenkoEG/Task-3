import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { request } from "../lib/request";

class ActionComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  componentDidMount = async () => {
    const comments = await request(
      `https://jsonplaceholder.typicode.com/posts/${
        this.props.match.params.postId
      }/comments?`
    );
    this.setState({ comments: comments.data });
  };
  render() {
    return (
      <ListGroup>
        {this.state.comments.length &&
          this.state.comments.map(item => {
            return (
              <ListGroupItem bsStyle="info" key={item.id}>
                {item.name}
              </ListGroupItem>
            );
          })}
        <Button bsStyle="success" onClick={this.props.history.goBack}>
          Back
        </Button>
      </ListGroup>
    );
  }
}
export default withRouter(ActionComment);
