// URL de la API de CoinGecko para obtener el precio de Bitcoin en USD y MXN
const API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,mxn";

// Obtener el contexto del canvas para dibujar el gráfico en USD
const ctxUSD = document.getElementById('bitcoinChartUSD').getContext('2d');

// Obtener el contexto del canvas para dibujar el gráfico en MXN
const ctxMXN = document.getElementById('bitcoinChartMXN').getContext('2d');

// Definir la estructura de datos para el gráfico de Bitcoin en USD
let bitcoinDataUSD = { 
    labels: [], // Etiquetas del eje X (tiempo)
    datasets: [{ 
        label: "Precio en USD", // Título del conjunto de datos
        borderColor: "blue", // Color de la línea del gráfico
        backgroundColor: "rgba(255,165,0,0.2)", // Color de fondo con transparencia
        data: [] // Datos del eje Y (precio de Bitcoin)
    }] 
};

// Definir la estructura de datos para el gráfico de Bitcoin en MXN
let bitcoinDataMXN = { 
    labels: [], // Etiquetas del eje X (tiempo)
    datasets: [{ 
        label: "Precio en MXN", // Título del conjunto de datos
        borderColor: "green", // Color de la línea del gráfico
        backgroundColor: "rgba(0,0,255,0.2)", // Color de fondo con transparencia
        data: [] // Datos del eje Y (precio de Bitcoin)
    }] 
};

// Crear el gráfico para Bitcoin en USD usando Chart.js
const bitcoinChartUSD = new Chart(ctxUSD, { 
    type: 'line', // Tipo de gráfico: línea
    data: bitcoinDataUSD, // Datos que se mostrarán en el gráfico
    options: { 
        responsive: true, // Hace que el gráfico sea adaptable al tamaño de la pantalla
        scales: { 
            x: { 
                title: { 
                    display: true, // Muestra el título del eje X
                    text: "Tiempo", // Texto del título del eje X
                    color: "white" // Color del texto en blanco
                },
                ticks: { 
                    color: "white" // Color de los valores en el eje X
                }
            }, 
            y: { 
                title: { 
                    display: true, // Muestra el título del eje Y
                    text: "Precio en USD", // Texto del título del eje Y
                    color: "white" // Color del texto en blanco
                },
                ticks: { 
                    color: "white" // Color de los valores en el eje Y
                }
            }
        },
        plugins: {
            legend: { 
                labels: { 
                    color: "white" // Color de la leyenda en blanco
                } 
            }
        }
    }
});

// Crear el gráfico para Bitcoin en MXN usando Chart.js
const bitcoinChartMXN = new Chart(ctxMXN, { 
    type: 'line', // Tipo de gráfico: línea
    data: bitcoinDataMXN, // Datos que se mostrarán en el gráfico
    options: { 
        responsive: true, // Hace que el gráfico sea adaptable al tamaño de la pantalla
        scales: { 
            x: { 
                title: { 
                    display: true, // Muestra el título del eje X
                    text: "Tiempo", // Texto del título del eje X
                    color: "white" // Color del texto en blanco
                },
                ticks: { 
                    color: "white" // Color de los valores en el eje X
                } 
            }, 
            y: { 
                title: { 
                    display: true, // Muestra el título del eje Y
                    text: "Precio en MXN", // Texto del título del eje Y
                    color: "white" // Color del texto en blanco
                },
                ticks: { 
                    color: "white" // Color de los valores en el eje Y
                } 
            } 
        },
        plugins: {
            legend: { 
                labels: { 
                    color: "white" // Color de la leyenda en blanco
                } 
            }
        }
    } 
});

// Función asíncrona para obtener el precio de Bitcoin en tiempo real
async function obtenerPrecioBitcoin() {
    try {
        // Realiza una solicitud a la API y espera la respuesta
        const respuesta = await fetch(API_URL);
        
        // Convierte la respuesta en formato JSON
        const datos = await respuesta.json();
        
        // Extrae los precios en USD y MXN
        const precioUSD = datos.bitcoin.usd;
        const precioMXN = datos.bitcoin.mxn;
        
        // Obtiene la hora actual en formato de texto
        const ahora = new Date().toLocaleTimeString();

        // Agregar la hora a las etiquetas del eje X
        bitcoinDataUSD.labels.push(ahora);
        bitcoinDataMXN.labels.push(ahora);
        
        // Agregar los precios al eje Y de los respectivos gráficos
        bitcoinDataUSD.datasets[0].data.push(precioUSD);
        bitcoinDataMXN.datasets[0].data.push(precioMXN);

        // Limitar los datos a 10 puntos para evitar sobrecarga en el gráfico
        if (bitcoinDataUSD.labels.length > 10) {
            bitcoinDataUSD.labels.shift(); // Elimina el primer elemento de las etiquetas
            bitcoinDataUSD.datasets[0].data.shift(); // Elimina el primer precio

            bitcoinDataMXN.labels.shift(); // Elimina el primer elemento de las etiquetas
            bitcoinDataMXN.datasets[0].data.shift(); // Elimina el primer precio
        }

        // Actualiza los gráficos con los nuevos datos
        bitcoinChartUSD.update();
        bitcoinChartMXN.update();

        // Muestra la última actualización en la página
        document.getElementById('lastUpdateUSD').innerText = `Última actualización: ${ahora}`;
        document.getElementById('lastUpdateMXN').innerText = `Última actualización: ${ahora}`;
    } catch (error) {
        // Muestra un error en la consola si la solicitud falla
        console.error("Error al obtener el precio de Bitcoin:", error);
    }
}

// Llama a la función para obtener el precio de Bitcoin inmediatamente
obtenerPrecioBitcoin();

// Configura un intervalo para actualizar los datos cada 5 segundos
setInterval(obtenerPrecioBitcoin, 5000);
