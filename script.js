async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("result");

  if (city === "") {
    result.textContent = "Please enter a city name";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
    );

    if (!response.ok) {
      result.textContent = "City not found";
      return;
    }

    const data = await response.json();
    result.textContent =
      `Temperature: ${data.main.temp}°C, ${data.weather[0].description}`;
  } catch (error) {
    result.textContent = "Error fetching data";
  }
}
