const {connection} = require("../config/DataBase")

const allSkills=(req,res)=>{
    const query = "select * from Skills"
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const singlerSkill=(req,res)=>{
    const id = req.params.id
    const query = `select * from Skills where id_Skill = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const createSkills=(req,res)=>{
    const {NombreSkill,LogoSkill} = req.body
    const query = `insert into Skills (NombreSkill,LogoSkill) values("${NombreSkill}","${LogoSkill}")`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

const editSkills=(req,res)=>{
    const id = req.params.id
    const {NombreSkill,LogoSkill} = req.body
    const query = `update Skills set NombreSkill="${NombreSkill}",LogoSkill="${LogoSkill}" where id_Skill = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}

const eraseSkills=(req,res)=>{
    const id = req.params.id
    const {NombreSkill,id_Adminitrador} = req.body
    const query = `delete from Skills where id_Skill = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
    })
}


module.exports = {allSkills, singlerSkill, createSkills,editSkills,eraseSkills}