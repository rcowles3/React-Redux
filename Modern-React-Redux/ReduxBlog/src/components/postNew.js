import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostNew extends Component {
  // Rather than creating duplicates of this function for each field, drying up code to make
  // more versitile and legible.
  // renderTitleField(field) {
  //   return (
  //     <div className="form-group">
  //       <label>Title</label>
  //       <input type="text" className="form-control" {...field.input} />
  //     </div>
  //   );
  // }

  //Generalized RenderField function
  renderField(field) {
    // Destructuring of this const to dry up code
    // const className = `form-group ${
    //   field.meta.touched && field.meta.error ? "has-danger" : ""
    // }`;
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input} // input property already in place with Redux Form
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);

    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title" // what peice of state field is going to produce
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories" // what peice of state field is going to produce
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content" // what peice of state field is going to produce
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  // 'values' contains an obj that contains all the values entered in form

  const errors = {};

  // validate inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  // if errors empty, form is fine to submit
  // if errors has *any* properties, reduxForm assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, // validate: validate
  // connects component to our redux form reducer
  // must make sure this string is unique. assigns to this components specific form
  form: "PostsNewForm"
})(connect(null, { createPost })(PostNew));
