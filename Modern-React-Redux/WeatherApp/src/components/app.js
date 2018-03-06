import React, { Component } from "react";
import SearchBar from "../containers/searchBar";
import WeatherList from "../containers/weatherList";

export default class App extends Component {
  render() {
    return (
      <div className="text-center">
        <br />
        <h4>Weather Forecast API App</h4>
        <br />
        <SearchBar />
        <br />
        <WeatherList />
      </div>
    );
  }
}
