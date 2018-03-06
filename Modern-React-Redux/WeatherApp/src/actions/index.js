/**
 * Action Creator to perform AJAX request to weather API.
 * @type {String}
 */

import axios from "axios";

const API_KEY = "7c5f0606a2433a458644313293055771";
const QUERY = `http://api.openweathermap.org/data/2.5/forecast?appid=${
  API_KEY
}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${QUERY}&q=${city},us`;
  const request = axios.get(url);

  // console.log("Reqest: ", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
