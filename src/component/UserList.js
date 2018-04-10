import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import { connect } from "react-redux";


class UsersList extends Component {

  render() {

    return (
      <ListGroup>
        {this.props.posts && this.props.users
          .map(item => {
            return (
              <ListGroupItem bsStyle="success" key={item.id}>
                <Link to={`/user/${item.id}`}>
                  {item.name}{" "}
                  <Badge bsStyle="info">
                    {
                      this.props.posts.filter(
                        post => post.userId === item.id
                      ).length
                    }
                  </Badge>
                </Link>
              </ListGroupItem>
            );
          })}
      </ListGroup>
    );
  }
}

export default connect(
  state => ({
    users : state.users.reduce((acc, val) => acc.concat(val), []),
    posts: state.posts.reduce((acc, val) => acc.concat(val), [])
  })
)(UsersList);
