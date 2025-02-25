const mensaje = require('../Models/mensajeModels');

//Función que nos envía el mensaje como respuesta
const obtenerMensaje = (req,res) => {
   res.json({mensaje});
};

module.exports = { obtenerMensaje };