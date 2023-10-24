import {config} from 'dotenv'
config();
console.log(process.env.PORT)

export default {
    port: process.env.PORT || 3001,
    dbuser: process.env.DB_USER || '',
    dbpassword: process.env.DB_PASSWORD || '',
    dbserver: process.env.DB_SERVER || '',
    dbDataBase: process.env.DB_DATABASE || '',

}