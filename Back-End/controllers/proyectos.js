const {connection} = require("../config/DataBase")

const allProjects=(req,res)=>{
    const query = "select * from Proyectos"
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const singleProject=(req,res)=>{
    const id = req.params.id
    const query = `select * from Proyectos where id_Proyecto = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const createProjects=(req,res)=>{
    const {NombreProyecto,ImagenProyecto,Descripcion,Repositorio} = req.body
    const query = `insert into Proyectos (NombreProyecto,ImagenProyecto,Descripcion,Repositorio) values("${NombreProyecto}","${ImagenProyecto}","${Descripcion}","${Repositorio}")`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

const editProjects=(req,res)=>{
    const id = req.params.id
    const {NombreProyecto,ImagenProyecto,Descripcion,Repositorio} = req.body
    const query = `update Proyectos set NombreProyecto="${NombreProyecto}",ImagenProyecto="${ImagenProyecto}",Descripcion="${Descripcion}",Repositorio="${Repositorio}" where id_Proyecto = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

const eraseProjects=(req,res)=>{
    const id = req.params.id
    const query = `delete from Proyectos where id_Proyecto = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

module.exports = {allProjects, singleProject, createProjects,editProjects,eraseProjects}