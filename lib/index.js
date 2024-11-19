// TODO: Call the Weather API when the form is submitted

const apiKey = 'your api key here';

// TODO: Create a function to get the weather info
const fetchWeather = (cityName) => {
  // TODO: Replace the following line with the correct url
  // TODO: prevent default behavior of the form
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      // TODO: Insert the weather info in the DOM (description, date, temperature...)
      document.querySelector('.card').classList.remove('hide');
      document.querySelector('#city').innerHTML = cityName;
      document.querySelector('#icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      document.querySelector('#temperature').innerHTML = `${data.main.temp} °C`;
    });
};

// TODO: Add an event listener to the form
// TODO: On submit, in the callback, call the getWeatherInfo function
const submit = document.querySelector('.submit');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const input = document.querySelector('#input').value;
  // console.log(input);
  fetchWeather(input);
});

const fetchWeatherLatLng = ([lat, lon]) => {
  // TODO: Replace the following line with the correct url
  // TODO: prevent default behavior of the form
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      // TODO: Insert the weather info in the DOM (description, date, temperature...)
      document.querySelector('#city').innerHTML = data.name;
      document.querySelector('#icon').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      document.querySelector('#temperature').innerHTML = `${data.main.temp} °C`;
    });
};

const position = document.querySelector('.position')
position.addEventListener('click', (event) => {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition((data) => {
    fetchWeatherLatLng([data.coords.latitude, data.coords.longitude]);
  })
});
