import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearch(term);
  }

  handleSubmit(event) {
    console.log("hi");
  }

  render() {
    return (
      <div className="search-bar">
        <h1>YouTube Video Search Project</h1>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
