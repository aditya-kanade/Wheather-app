document.getElementById('getWeather').addEventListener('click', getWeather);

async function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = '008785407b544e6da2745520250602';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert(data.error.message);
        } else {
            document.getElementById('location-name').innerText = `${data.location.name}, ${data.location.country}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById('condition').innerText = `Condition: ${data.current.condition.text}`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to get weather data. Please try again later.');
    }
}