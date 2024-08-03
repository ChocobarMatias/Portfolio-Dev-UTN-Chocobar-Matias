const { connection } = require("../config/DataBase");

const allExperiences = (req, res) => {
    const query = "SELECT * FROM Experiencias";
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const singleExperience = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM Experiencias WHERE id_Experiencia = ${id}`;
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const createExperiences = (req, res) => {
    const { Cargo, Empresa, AñoInicio, AñoFinal, EstadoActual, Desempeño } = req.body;
    const query = `INSERT INTO Experiencias (Cargo, Empresa, AñoInicio, AñoFinal, EstadoActual, Desempeño) VALUES ("${Cargo}", "${Empresa}", "${AñoInicio}", "${AñoFinal}", "${EstadoActual}", "${Desempeño}")`;
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

const editExperiences = (req, res) => {
    
    const id = req.params.id;
    const { Cargo, Empresa, AñoInicio, AñoFinal, EstadoActual, Desempeño } = req.body;
    const query = `UPDATE Experiencias SET Cargo="${Cargo}", Empresa="${Empresa}", AñoInicio="${AñoInicio}", AñoFinal="${AñoFinal}", EstadoActual="${EstadoActual}", Desempeño="${Desempeño}" WHERE id_Experiencia = ${id}`;
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

const eraseExperiences = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM Experiencias WHERE id_Experiencia = ${id}`;
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

module.exports = { allExperiences, singleExperience, createExperiences, editExperiences, eraseExperiences};
