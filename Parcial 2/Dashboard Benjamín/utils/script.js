const llave = 'f43f032fe531bd1b4e60472de83f42d1'; // API Key de OpenWeatherMap

let input = document.getElementById('input');
let button = document.getElementById('button');
let ciudad;
let lineChart;
let polarChart;

// Evento para capturar la ciudad ingresada
button.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página

    let texto = input.value.trim(); // Obtener el valor del input y eliminar espacios
    // Trim elimina todo lo que no sea texto

    if (texto === '') {
        console.log("Por favor, ingresa una ciudad.");
        alert("Por favor, ingresa una ciudad.");
        return;
    }

    ciudad = texto; // Guardar la ciudad en la variable
    console.log("Ciudad ingresada:", ciudad);

    // Llamar la API después de definir la ciudad
    fetchWeatherData();
});

// Función para obtener los datos del clima
async function fetchWeatherData() {
    if (!ciudad) {
        console.log("No se ha ingresado una ciudad aún.");
        return;
    }

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${llave}&units=metric&lang=es`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Ciudad no encontrada");
        }
        const data = await response.json();
        updateWeatherData(data);
        updateCharts(data);
    } catch (error) {
        console.error('Error, promesa no cumplida:', error);
    }
}

// Función para actualizar los datos en la interfaz
function updateWeatherData(data) {
    document.getElementById('city-name').textContent=`ciudad:${ciudad}`
    document.getElementById('temperature').textContent = `Temperatura: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humedad: ${data.main.humidity}%`;
    document.getElementById('weather-description').textContent = `Descripción: ${data.weather[0].description}`;
}

// Función para actualizar los gráficos
function updateCharts(data) {
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    const ctxPolar = document.getElementById('pieChart').getContext('2d');

    if (lineChart) {
        lineChart.destroy();
    }
    if (polarChart) {
        polarChart.destroy();
    }

    // Validar que los datos existen y son números
    const temp = data.main.temp || 0;
    const humidity = data.main.humidity || 0;
    const pressure = (data.main.pressure / 10) || 0;

    lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Temperatura (°C)', 'Humedad (%)', 'Presión (hPa ÷ 10)'],
            datasets: [{
                label: 'Datos del Clima',
                data: [data.main.temp, data.main.humidity, data.main.pressure],
                backgroundColor: '#D91656',
                borderColor: '#D91656',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    polarChart = new Chart(ctxPolar, {
        type: 'polarArea',
        data: {
            labels: ['Temperatura (°C)', 'Humedad (%)', 'Presión (hPa ÷ 10)'],
            datasets: [{
                label: 'Datos del Clima',
                data: [temp, humidity, pressure],
                backgroundColor: [
                    '#FFB200',
                    '#EB5B00',
                    '#D91656'
                ],
                borderColor: [
                    '#FFB200',
                    '#EB5B00',
                    '#D91656'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    pointLabels: {
                        display: true,
                        centerPointLabels: true,
                        font: {
                            size: 18
                        }
                    }
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfica Polar'
            }
        }
    });
}

// Actualización automática cada 5 segundos (solo si se ingresó una ciudad)
setInterval(fetchWeatherData, 5000);
