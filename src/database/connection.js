import sql from 'mssql'
import config from '../config'

const dbSetings ={
    user: config.dbuser,
    password:config.dbpassword ,
    server:config.dbserver,
    database: config.dbDataBase,
    options:{
        encrypt: true,
        trustServerCertificate: true,
    },

}

export async function getConnection(){
    try{
    const pool = await sql.connect(dbSetings);
    return pool;
    }catch(error){
        console.error(error)
    }
}


export {sql};


 

/* 

apis que nos dan velocidad 
Token para apis hasta ciertos usos o meses  
no dejar para siempre prototipos
Azure Repos

rapi prototipe

arquiteto y diseñador 

cristhian alvarez cifuentes nos van a dar los lineamientos 
gabriel jaime velez machado
victor daniel martinez olier
Juan David Sanchez Muñoz
Dominio a lo que nos vamos a conectar suramericana.com.co

*/ 




