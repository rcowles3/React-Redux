import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";

class PostShow extends Component {
  componentDidMount() {
    /**
     * this.props.match.params.id;
     * @param -this.props.match is provided by React Router
     * @param -.params contains all the wild cards within the url
     * @param -.id specific post id
     */
    const { id } = this.props.match.params; // Destructuring
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params; // Destructuring

    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    // posts[this.props.match.params.id]; // the post we want to show
    const { post } = this.props;

    if (!post) {
      return <div>Loading..</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
      </div>
    );
  }
}

function mapStateToProps(
  { posts /* application state */ },
  ownProps /* this.props === ownProps */
) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
