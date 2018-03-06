import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/weatherCharts";
import GoogleMap from "../components/googleMap";

class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData);

    const city = cityData.city.name;
    const temps = _.map(
      cityData.list.map(weather => weather.main.temp),
      temp => 1.8 * (temp - 273) + 32
    );
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={city}>
        {/* <td>{city}</td> */}
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="red" units=" F" />
        </td>
        <td>
          <Chart data={pressure} color="blue" units=" hPa" />
        </td>
        <td>
          <Chart data={humidity} color="orange" units=" %" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Tempurature (F)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === weather: weather
}

export default connect(mapStateToProps)(WeatherList);
