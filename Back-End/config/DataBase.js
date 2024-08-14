// const mysql = require("mysql") con este cliente usamos para el curso de react
const mysql = require("mysql2") //use este cliente y lo instale con npm por que es la solucion que encontre 
const dotenv = require("dotenv")

dotenv.config()

const configConnection = process.env.DATABASE_URL 
? { uri: process.env.DATABASE_URL } 
: {
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
}

//conexion a mysql
const connection = mysql.createConnection(configConnection.uri || configConnection
    // host     : process.env.HOST,
    // user     : process.env.USER,
    // password : process.env.PASSWORD,
    // database : process.env.DATABASE,
)

module.exports = {connection}
