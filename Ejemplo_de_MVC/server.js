const express = require('express');
const cors = require('cors');
const path = require('path');
const {obtenerMensaje} = require('./Controller/mensajeController');

const app = express();
const PORT = 3000;

//Habilitar CORS
app.use(cors());

//Servir el archivo HTML
app.get('/', (req,res) => {
   res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//Ruta para la API
app.get('/api/mensaje', obtenerMensaje);

app.listen(PORT, () => {
   console.log(`Servidor corriendo en http://localhost:${PORT}`);
})