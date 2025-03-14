// const mysql = require("mysql") con este cliente usamos para el curso de react
const mysql = require("mysql2") //use este cliente y lo instale con npm por que es la solucion que encontre 
const dotenv = require("dotenv")

dotenv.config()

// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     pass: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     waitForConnections: true,
//     connectionLimit: 4,
//    queueLimit: 0
// })

const connection = mysql.createConnection({
    host: process.env.HOST_2,
    user: process.env.USER_2,
    pass: process.env.PASSWORD_2,
    database: process.env.DATABASE_2,
    waitForConnections: true,
    connectionLimit: 4,
   queueLimit: 0
})
// const configConnection = process.env.DATABASE_URL 

// : {
//     host     : process.env.HOST,
//     user     : process.env.USER,
//     password : process.env.PASSWORD,
//     database : process.env.DATABASE,
// }

//conexion a mysql
// const connection = mysql.createConnection(configConnection.uri || configConnection
    // host     : process.env.HOST,
    // user     : process.env.USER,
    // password : process.env.PASSWORD,
    // database : process.env.DATABASE,


module.exports = {connection}
