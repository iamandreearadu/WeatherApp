"use strict";
const weatherItems = document.querySelectorAll(".item");
let weather = {
  apiKey: "e47fc019c0a1116fdad0d2f8dfb984d5",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = `Wheather in ${name}`;
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = `${temp} °C`;
    document.querySelector(
      ".feels-like-temp"
    ).innerText = `Feels like ${feels_like}`;
    document.querySelector(".min-temp").innerText = `Min ${temp_min} °C`;
    document.querySelector(".max-temp").innerText = `Max ${temp_max} °C`;
    document.querySelector(".humidity").innerText = `Humidity ${humidity} %`;
    document.querySelector(".wind").innerText = `Wind speed ${speed} km/h`;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search-button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });
