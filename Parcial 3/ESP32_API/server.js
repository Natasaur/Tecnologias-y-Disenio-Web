const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const eventos = [];
let cont = 0;

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'));
});

//En este endpoint se recibirá el estado del boton del ESP32
app.post('/api/evento', (req, res) => {
   const estado = req.body.boton || 0; //Si no recibe una respuesta, define el estado del boton a 0

   const evento = {
      id: cont++,
      boton: estado,
      timestamp: new Date().toISOString()
   };
   eventos.push(evento);
   console.log("Evento recibido:", evento);
   res.sendStatus(200);
});

//En este endpoint se obtiene el último del boton
app.get('/api/lista-eventos', (req, res) => {
   res.json(eventos);
});

app.listen(port, () => {
   console.log(`Servidor escuchando en http://localhost:${port}`);
});
