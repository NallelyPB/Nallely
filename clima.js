const lat = -12.04;
const lon = -77.02;

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&`+`lon=${lon}&appid=44d9c5577a091de2f049b35374e6b854`);
        
        if (!response.ok) throw new Error("No se pudo obtener el clima");

        const data = await response.json();

        document.getElementById("temperature").textContent = data.main.temp-273;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("humidity").textContent = data.main.humidity;
    } catch (error) {
        console.error("Error al obtener los datos del clima:", error);
    }
}

fetchWeather();