const {connection} = require("../config/DataBase")
const {transporter} = require("../config/Envio-Email")

const allContacts =(req,res)=>{
    const query = "select * from Contactame"
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

const singleContact =(req,res)=>{
    const id = req.params.id
    const query = `select * from Contactame where id_Contactame = ${id}`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.json(results)
    })
}

//esta funcion crear/inserta en la base de datos y envia el mail con el contenido
const createContacts =(req,res)=>{
    const {Nombre,Email,Motivo,Comentario} = req.body
    const query = `insert into Contactame (Nombre,Email,Motivo,Comentario) values("${Nombre}","${Email}","${Motivo}","${Comentario}")`
    connection.query(query,(err,results)=>{
        if(err) throw err
        res.send(results)
   
    // Configura el contenido del correo
    let mailOptions = {
        from: process.env.FROM,
        to: process.env.TO,
        subject: `Mi Porfolio - Nuevo mensaje de ${Nombre}`,
        text: `
            Nombre: ${Nombre}
            Email: ${Email}
            Motivo: ${Motivo}
            Comentario: ${Comentario}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error);
            console.log(error);
            return;
        }
        res.status(200).send('Mensaje Enviado correctamente');
    }); 
        
});
}

module.exports = {allContacts, singleContact, createContacts}