const baseDatos = require('sqlite3').verbose();
const db = new baseDatos.Database('.database.db');
//const mysql = require('mysql2');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Tareas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            texto TEXT NOT NULL,
            fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
    )`)
});


// Configuración de la conexión a la base de datos
/*const connection = mysql.createConnection({
    host: 'localhost', // Cambia esto si tu base de datos está en otro host
    user: 'root',      // Usuario de la base de datos
    password: '',      // Contraseña del usuario
    database: 'nombre_de_tu_base_de_datos' // Nombre de la base de datos
});*/

// Conectar a la base de datos
/*connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');
});*/

//module.exports = connection;
module.exports = db;