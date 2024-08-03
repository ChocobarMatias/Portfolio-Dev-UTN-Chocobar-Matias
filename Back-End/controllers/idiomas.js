const {connection} = require("../config/DataBase")

const allLanguages =(req,res)=>{
    const query = "select * from Idiomas"
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const singleLanguage =(req,res)=>{
    const id = req.params.id
    const query = `select * from Idiomas where id_Idioma = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const createLanguages =(req,res)=>{
    const {IdiomaNuevo,Nivel} = req.body
    const query = `insert into Idiomas (IdiomaNuevo,Nivel) values("${IdiomaNuevo}","${Nivel}")`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

const editLanguages=(req,res)=>{
    const id = req.params.id
    const {IdiomaNuevo,Nivel} = req.body
    const query = `update Idiomas set IdiomaNuevo="${IdiomaNuevo}",Nivel="${Nivel}" where id_Idioma = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

const eraseLanguages=(req,res)=>{
    const id = req.params.id
    // const {IdiomaNuevo,Nivel} = req.body
    const query = `delete from Idiomas where id_Idioma = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

module.exports = {allLanguages, singleLanguage, createLanguages,editLanguages,eraseLanguages}