import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class PostIndex extends Component {
  // function called one time as soon as the component loads.
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/post/new">
            Add Post
          </Link>
        </div>
        <h3>
          Index of all post available.
          <ul className="list-group">{this.renderPost()}</ul>
        </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// shorcut to wire up action creator to component. Rather than creating
// a second function to mapDispatchToProps, we can directly pass in
// our fetchPost to our connect components
export default connect(mapStateToProps, { fetchPosts })(PostIndex);
