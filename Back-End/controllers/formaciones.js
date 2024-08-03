const {connection} = require("../config/DataBase")

const allFormations =(req,res)=>{
    const query = "select * from Formaciones"
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const singleFormation =(req,res)=>{
    const id = req.params.id
    const query = `select * from Formaciones where id_Formacion = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const createFormations =(req,res)=>{
    const {Titulo,InstitucionEducativa,AñoInicio,AñoFinEstimado,Estado,Logo} = req.body
    const query = `insert into Formaciones (Titulo,InstitucionEducativa,AñoInicio,AñoFinEstimado,Estado,Logo) values("${Titulo}","${InstitucionEducativa}","${AñoInicio}","${AñoFinEstimado}","${Estado}","${Logo}")`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

const editFormations =(req,res)=>{
    const id = req.params.id
    const {Titulo,InstitucionEducativa,AñoInicio,AñoFinEstimado,Estado,Logo} = req.body
    const query = `update Formaciones set Titulo="${Titulo}",InstitucionEducativa="${InstitucionEducativa}",AñoInicio="${AñoInicio}",AñoFinEstimado="${AñoFinEstimado}",Estado="${Estado}",Logo="${Logo}" where id_Formacion = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

const eraseFormations =(req,res)=>{
    const id = req.params.id
    const query = `delete from Formaciones where id_Formacion = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

module.exports = {allFormations, singleFormation, createFormations,editFormations,eraseFormations}