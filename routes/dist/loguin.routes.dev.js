"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _LoginController = require("../controllers/Login.controller.js");

var router = (0, _express.Router)();
router.get('/usuarios', _LoginController.getUsuarios);
router.post('/usuarios', _LoginController.crearUsuario);
router.get('/usuarios/count', _LoginController.GetCountUsserActive);
router.get('/usuarios/:id', _LoginController.getUsserBYID);
router["delete"]('/usuarios/:id', _LoginController.deleteUsserById);
router.put('/usuarios/:id', _LoginController.ActualizarPorId);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=loguin.routes.dev.js.map
