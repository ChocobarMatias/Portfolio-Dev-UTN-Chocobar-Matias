const { connection } = require("../config/DataBase");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Asegúrate de tener esto para cargar las variables de entorno


const singleUser = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM Usuarios WHERE id_Usuario = ${id}`;
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const createUsers = (req, res) => {
    const { Nombre, Apellido, Email, Contraseña, Activo } = req.body;
    const query = `INSERT INTO Usuarios (Nombre, Apellido, Email, Contraseña, Activo) VALUES ("${Nombre}", "${Apellido}", "${Email}", "${Contraseña}", ${Activo})`;
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

const editUsers = (req, res) => {
    const id = req.params.id;
    const { Nombre, Apellido, Email, Contraseña, Activo } = req.body;
    const query = `UPDATE Usuarios SET Nombre="${Nombre}", Apellido="${Apellido}", Email="${Email}", Contraseña="${Contraseña}", Activo=${Activo} WHERE id_Usuario = ${id}`;
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

const eraseUsers = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM Usuarios WHERE id_Usuario = ${id}`;
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

module.exports = { singleUser, createUsers, editUsers, eraseUsers };
