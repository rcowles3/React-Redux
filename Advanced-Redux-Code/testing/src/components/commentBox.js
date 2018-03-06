import React, { Component } from "react";

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: "" };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault(); // Keeps form from auto submital
    // console.log("submited");
    this.setState({ comment: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="CommentBox">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}
