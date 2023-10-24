import { Router } from "express";
import { crearUsuario, getUsuarios, getUsserBYID, deleteUsserById,GetCountUsserActive, ActualizarPorId } from "../controllers/Login.controller.js"

const router = Router()

router.get('/usuarios', getUsuarios);
router.post('/usuarios', crearUsuario);
router.get('/usuarios/count', GetCountUsserActive);

router.get('/usuarios/:id', getUsserBYID);
router.delete('/usuarios/:id', deleteUsserById);

router.put('/usuarios/:id', ActualizarPorId)

export default router