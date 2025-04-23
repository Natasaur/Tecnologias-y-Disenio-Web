const express = require('express');
const db = require('./db');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('layout', 'layout'); 

app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));


// Ruta principal
app.get('/', (req, res) => {
    db.all(`SELECT * FROM Tareas ORDER BY fecha DESC`, (err, Tareas) => {
        if (err) return res.send('Error de carga');
        res.render('index', {title: "Inicio", Tareas})
    });
});

app.post('/crearTarea', (req, res) => {
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