import {getConnection,sql, querys} from '../database/index.js';

export const getUsuarios = async (req, res) => {
    try{
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllUsuarios);
    res.json(result.recordset);
    }catch (error){
        res.status(500)
        res.send(error.message);
    }
};

export const crearUsuario =  async (req, res) => {
    const {NombreCompleto, CorreoElectronico, Usuario, Contrasena} = req.body;
    if(NombreCompleto == null || CorreoElectronico == null || Usuario == null || Contrasena == null){
        return res.status(400).json({message: 'Debe diligenciar todos los campos'});
    }
    try {
        const pool = await getConnection();
        await pool
        .request()
        .input('NombreCompleto',sql.VarChar, NombreCompleto)
        .input('CorreoElectronico',sql.VarChar, CorreoElectronico)
        .input('Usuario',sql.VarChar, Usuario)
        .input('Contrasena',sql.VarChar, Contrasena)
        .query(querys.CreateNewUsser)
    
        console.log(result)
    
        res.json({NombreCompleto,CorreoElectronico,Usuario});
    } catch (error){
        res.status(500)
        res.send(error.message);
    }

}

export const getUsserBYID = async (req,res) => {
    const {id} = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(querys.getUsserById);
    console.log(result);


    res.send(result.recordset[0]);



};


export const deleteUsserById = async (req,res) => {
    const {id} = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input('Id', id)
    .query(querys.deleteUsser);
    console.log(result);


    res.sendStatus(204);


    
};

export const GetCountUsserActive = async (req,res) => {
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(querys.GetCountUsserActive);
    //console.log(result);
    res.json(result.recordset[0]['']);   
}

export const ActualizarPorId = async (req,res) => {
    const {NombreCompleto, CorreoElectronico, Usuario, Contrasena} = req.body;

    const {id} = req.params;
    
    if(NombreCompleto == null || CorreoElectronico == null || Usuario == null || Contrasena == null){
        return res.status(400).json({message: 'Debe diligenciar todos los campos'});
    }

    const pool = await getConnection();
    await pool
    .request()
    .input('NombreCompleto', sql.VarChar, NombreCompleto)
    .input('CorreoElectronico', sql.VarChar, CorreoElectronico)
    .input('Usuario', sql.VarChar, Usuario)
    .input('Contrasena', sql.VarChar, Contrasena)
    .input('Id', sql.Int, id)
    
    .query(querys.ActualizarPorId);

    res.json({NombreCompleto, CorreoElectronico, Usuario, Contrasena})

}