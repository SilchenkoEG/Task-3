import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { connect } from "react-redux";

class UsersList extends Component {
  render() {
    const { users, posts } = this.props.data;
    return (
      <ListGroup>
        {posts.length &&
          users.map(item => {
            return (
              <ListGroupItem bsStyle="success" key={item.id}>
                <Link to={`/user/${item.id}`}>
                  {item.name}
                  <Badge bsStyle="info">
                    {posts.filter(post => post.userId === item.id).length}
                  </Badge>
                </Link>
              </ListGroupItem>
            );
          })}
      </ListGroup>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data
  };
}
export default connect(mapStateToProps)(UsersList);
