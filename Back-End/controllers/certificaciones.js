const {connection} = require("../config/DataBase")

const allCertificates = (req,res) =>{
    const query = "select * from Certificaciones"
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const singleCertificate = (req,res)=>{
   
    const id = req.params.id
    const query = `select * from Certificaciones where id_Certificacion = ${id}`

    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const createCertificates = (req,res)=>{
    const {Titulo,InstitucionEducativa,AñoInicio,HorasAcademica,Codigo,Url,FotoCertificado} = req.body
    const query = `insert into Certificaciones (Titulo,InstitucionEducativa,AñoInicio,HorasAcademica,Codigo,Url,FotoCertificado) values("${Titulo}","${InstitucionEducativa}","${AñoInicio}","${HorasAcademica}","${Codigo}","${Url}","${FotoCertificado}")`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

const editCertificates = (req,res)=>{
  
    const id = req.params.id
    const {Titulo,InstitucionEducativa,AñoInicio,HorasAcademica,Codigo,Url,FotoCertificado} = req.body
    
    const query = `update Certificaciones set Titulo ="${Titulo}",InstitucionEducativa="${InstitucionEducativa}",AñoInicio="${AñoInicio}",HorasAcademica="${HorasAcademica}",Codigo="${Codigo}",Url="${Url}",FotoCertificado="${FotoCertificado}" where id_Certificacion = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        
        res.send(results)
    })
}

const eraseCertificates = (req,res) =>{
    const id = req.params.id
    // const {Titulo,InstitucionEducativa,AñoInicio,HorasAcademica,Codigo,Url,FotoCertificado} = req.body
    const query = `delete from Certificaciones where id_Certificacion = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}


module.exports = {allCertificates, singleCertificate, createCertificates,editCertificates,eraseCertificates}