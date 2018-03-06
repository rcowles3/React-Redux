import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YouTube from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = "AIzaSyD43GKIsNqPA8Qc-NI8j1Z22FfGMRQj_O0";

// Main app component to generate our HTML and child components
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Rebelution");
  }

  // callback function that will search youtube-api-search
  videoSearch(term) {
    YouTube({ key: API_KEY, term: term }, videos => {
      // this.setState({ videos: videos });
      // Refactoring
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="container">
        <SearchBar onSearch={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector(".container"));
