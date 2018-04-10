import React, { Component } from "react";
import { Link} from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";


class UserComments extends Component {
  render() {  
    return (
        <ListGroup>
        {this.props.posts &&
          this.props.posts
            .filter(item => item.userId === +this.props.match.params.id)
            .map(item => {
              return (
                <ListGroupItem bsStyle='warning' key={item.id}>
                  <Link to={`/post/${item.id}/comments`}>{item.body}</Link>
                </ListGroupItem>
              );
            })}                   
      </ListGroup>
    );
  }
}
export default  connect(
  state => ({
    posts: state.posts.reduce((acc, val) => acc.concat(val), [])
  })
)(UserComments);
