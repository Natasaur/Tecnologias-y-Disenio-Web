const ctx = document.getElementById('grafica').getContext('2d');

const chart = new Chart(ctx, {
   type: 'line',
   data: {
      labels: [],
      datasets: [{
         label: 'Estado del Botón',
         data: [],
         borderColor: 'green',
         backgroundColor: 'rgba(0, 255, 0, 0.1)',
         tension: 0,
         pointRadius: 3,
         fill: true
      }]
   },
   options: {
      responsive: true,
      animation: false,
      scales: {
         x: {
            title: {
               display: true,
               text: 'Hora'
            }
         },
         y: {
            min: -0.1,
            max: 1.1,
            ticks: {
               stepSize: 1
            },
            title: {
               display: true,
               text: 'Estado del botón'
            }
         }
      }
   }
});

async function actualizarGrafica() {
   try {
      const res = await fetch('/api/lista-eventos');
      const eventos = await res.json();
      console.log("Eventos recibidos:", eventos); // 👈 para debug

      const etiquetas = eventos.map(e => new Date(e.timestamp).toLocaleTimeString());
      const valores = eventos.map(e => e.boton);

      chart.data.labels = etiquetas;
      chart.data.datasets[0].data = valores;
      chart.update();
   } catch (error) {
      console.error('Error al actualizar gráfica:', error);
   }
}

setInterval(actualizarGrafica, 1000);
