const API_KEY = 'AC93AYm0ISR5tAe7QM2UvWm6vEQZPfWG9DsJENkQ'; // Reemplaza con tu clave de la NASA
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

async function obtenerClimaMarte() {
    try {
        const respuesta = await fetch(API_URL);
        const datos = await respuesta.json();
        
        // Extraer la información más reciente
        const sol_keys = datos.sol_keys;
        if (sol_keys.length === 0) {
            document.getElementById('info').innerText = 'No hay datos disponibles.';
            return;
        }

        const solReciente = sol_keys[sol_keys.length - 1];
        const temperatura = datos[solReciente].AT.av; // Temperatura promedio
        const velocidadViento = datos[solReciente].HWS.av; // Viento promedio
        const presion = datos[solReciente].PRE.av; // Presión atmosférica

        document.getElementById('temperatura').innerText = `🌡 Temperatura: ${temperatura} °C`;
        document.getElementById('viento').innerText = `💨 Viento: ${velocidadViento} m/s`;
        document.getElementById('presion').innerText = `📉 Presión: ${presion} Pa`;

    } catch (error) {
        console.error("Error obteniendo datos:", error);
        document.getElementById('info').innerText = 'Error al obtener datos.';
    }
}

// Llamar a la función al cargar la página y actualizar cada 30 segundos
obtenerClimaMarte();
setInterval(obtenerClimaMarte, 5000);
