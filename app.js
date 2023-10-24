import express from 'express'
import config from './config.js'
import UsuariosRoutes from './routes/loguin.routes.js';



const app = express();

//Settings 
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use(UsuariosRoutes)


export default app 