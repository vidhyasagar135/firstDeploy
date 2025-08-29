const apiKey = "cb6538f8a8fc4df1be492634250201";
const apiUrl = "http://api.weatherapi.com/v1/current.json";

document.getElementById("weather-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const location = document.getElementById("location").value;
  const weatherResult = document.getElementById("weather-result");

  weatherResult.textContent = "Loading...";

  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}&q=${location}&aqi=yes`);
    const data = await response.json();

    if (data.error) {
      weatherResult.textContent = "Location not found!";
    } else {
      const { temp_c, condition, humidity, wind_kph } = data.current;
      const { localtime } = data.location;

      weatherResult.innerHTML = `
        <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
        <p><strong>Time:</strong> ${localtime}</p>
        <p><strong>Temperature:</strong> ${temp_c}°C</p>
        <p><strong>Condition:</strong> ${condition.text}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${wind_kph} kph</p>
        <img src="${condition.icon}" alt="${condition.text}">
      `;
    }
  } catch (error) {
    weatherResult.textContent = "An error occurred. Please try again.";
  }
});

// const apiKey = "cb6538f8a8fc4df1be492634250201";
// const apiUrl = "http://api.weatherapi.com/v1/current.json";

// document.getElementById("weather-form").addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const location = document.getElementById("location").value;
//   const weatherResult = document.getElementById("weather-result");

//   weatherResult.textContent = "Loading...";

//   try {
//     const response = await fetch(`${apiUrl}?key=${apiKey}&q=${location}&aqi=yes`);
//     const data = await response.json();

//     if (data.error) {
//       weatherResult.textContent = "Location not found!";
//     } else {
//       const { temp_c, condition, humidity, wind_kph } = data.current;
//       weatherResult.innerHTML = `
//         <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
//         <p><strong>Temperature:</strong> ${temp_c}°C</p>
//         <p><strong>Condition:</strong> ${condition.text}</p>
//         <p><strong>Humidity:</strong> ${humidity}%</p>
//         <p><strong>Wind Speed:</strong> ${wind_kph} kph</p>
//       `;
//     }
//   } catch (error) {
//     weatherResult.textContent = "An error occurred. Please try again.";
//   }
// });
