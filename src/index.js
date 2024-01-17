function displayCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("h1");
  let newCity = document.querySelector("#input-box");
  cityName.innerHTML = newCity.value;
}
let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", displayCity);
