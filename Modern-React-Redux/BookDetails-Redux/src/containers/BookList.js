import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";

// makes sure the actions flow through all of our reducers in our app
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// VERY IMPORTANT, glue between React and Redux (Views, and app
// State)
// ****
// - Whenever our applications state changes, our Container
// Component will re-render
// ****
function mapStateToProps(state) {
  // Returns, inside of BookList as props to our Component
  return { books: state.books };
}

// Anything returned from this function, will end up as props on
// the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, result should be passed to
  // all reduceres.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList form a components to a container - it needs to
// know about this new dispatch method, selectBook. make it
// availiabe as a prop
// using connect, we are assigning the return, props, from the
// mapStateToProps() to our BookList class so that they may be used
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
