document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city-input').value;
    fetchWeatherData(city);
});

async function fetchWeatherData(city) {
    const apiKey = 'f022b963763546b4a9333253242703'; 
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data is unable to be found.');
        }
        const data = await response.json(); 
        updateDashboard(data); 
    } catch (error) { 
        console.error('Error:', error);
    }
}

function updateDashboard(data) {
    const { location, current, forecast } = data;
    const { name, country, localtime } = location;
    const { temp_f, condition, humidity } = current;

    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = `
        <h2>${name}, ${country}</h2>
        <p>Date and Time: ${localtime}</p>
        <p>Temperature: ${temp_f}°C</p>
        <p>Humidity: ${humidity}%</p>

        <p>Condition: <img src="${condition.icon}" alt="${condition.text}"></p>
        <p>----------------------------------</p>
        <div id="forecast">
            <h2>5-Day Outlook</h2>
            ${forecast.forecastday.map(day => `
                <div>
                    <p>${day.date}</p>
                    <p>Condition: <img src="${day.day.condition.icon}" alt="${day.day.condition.text}"></p>
                    <p>High: ${day.day.maxtemp_f}F</p>
                    <p>Low: ${day.day.mintemp_f}F</p>
                    <p>----------------------------------</p>
                </div>
            `).join('')}
        </div>
    `;
}



