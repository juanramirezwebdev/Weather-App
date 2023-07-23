// API key for OpenWeatherMap
const apiKey = '343bbac1fd58ac10f6a7806723c1ff57'; // Replace with your actual API key


// Select DOM elements
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');

// Function to fetch weather data from OpenWeatherMap API
function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      displayWeatherData(data);
    })
    .catch(error => {
      weatherInfo.textContent = 'Error: City not found';
    });
}

// Function to display weather data on the webpage
function displayWeatherData(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;

  const weatherContent = `${cityName}: ${temperature}°C, ${weatherDescription}`;
  weatherInfo.textContent = weatherContent;
}

// Event listener for "Get Weather" button click
getWeatherBtn.addEventListener('click', function () {
  const city = cityInput.value.trim();
  if (city !== '') {
    getWeatherData(city);
  } else {
    weatherInfo.textContent = 'Please enter a city name';
  }
});
