const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000;

// Configurar el ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// Configurar archivos estáticos (css, js)
app.use(express.static('public'));
// Configurar Base de Datos
app.use(express.urlencoded({extended:true}))


// Ruta principal
app.get('/', (req, res) => {
    db.all(`SELECT * FROM Tareas ORDERBY fecha DESC`, (err, Tareas) => {
        if (err) return res.send('Error de carga');
        res.send('index', {title: "Inicio", Tareas})
    });
});

app.post('/crearTarea', (res, req) => {
    const {texto} = req.body;
    db.run('INSERT INTO Tareas (texto) VALUES (?)', [texto], (err) => {
        if (err) return res.send( "Error al guardar");
        res.redirect('/')
    });
});





// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor en: http://localhost:${PORT}/`);
});