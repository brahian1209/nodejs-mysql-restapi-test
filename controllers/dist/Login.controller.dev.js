"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActualizarPorId = exports.GetCountUsserActive = exports.deleteUsserById = exports.getUsserBYID = exports.crearUsuario = exports.getUsuarios = void 0;

var _index = require("../database/index.js");

var getUsuarios = function getUsuarios(req, res) {
  var pool, _result;

  return regeneratorRuntime.async(function getUsuarios$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _index.getConnection)());

        case 3:
          pool = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(pool.request().query(_index.querys.getAllUsuarios));

        case 6:
          _result = _context.sent;
          res.json(_result.recordset);
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getUsuarios = getUsuarios;

var crearUsuario = function crearUsuario(req, res) {
  var _req$body, NombreCompleto, CorreoElectronico, Usuario, Contrasena, pool;

  return regeneratorRuntime.async(function crearUsuario$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, NombreCompleto = _req$body.NombreCompleto, CorreoElectronico = _req$body.CorreoElectronico, Usuario = _req$body.Usuario, Contrasena = _req$body.Contrasena;

          if (!(NombreCompleto == null || CorreoElectronico == null || Usuario == null || Contrasena == null)) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Debe diligenciar todos los campos'
          }));

        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap((0, _index.getConnection)());

        case 6:
          pool = _context2.sent;
          _context2.next = 9;
          return regeneratorRuntime.awrap(pool.request().input('NombreCompleto', _index.sql.VarChar, NombreCompleto).input('CorreoElectronico', _index.sql.VarChar, CorreoElectronico).input('Usuario', _index.sql.VarChar, Usuario).input('Contrasena', _index.sql.VarChar, Contrasena).query(_index.querys.CreateNewUsser));

        case 9:
          console.log(result);
          res.json({
            NombreCompleto: NombreCompleto,
            CorreoElectronico: CorreoElectronico,
            Usuario: Usuario
          });
          _context2.next = 17;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](3);
          res.status(500);
          res.send(_context2.t0.message);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 13]]);
};

exports.crearUsuario = crearUsuario;

var getUsserBYID = function getUsserBYID(req, res) {
  var id, pool, result;
  return regeneratorRuntime.async(function getUsserBYID$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap((0, _index.getConnection)());

        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(pool.request().input('Id', id).query(_index.querys.getUsserById));

        case 6:
          result = _context3.sent;
          console.log(result);
          res.send(result.recordset[0]);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getUsserBYID = getUsserBYID;

var deleteUsserById = function deleteUsserById(req, res) {
  var id, pool, result;
  return regeneratorRuntime.async(function deleteUsserById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap((0, _index.getConnection)());

        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return regeneratorRuntime.awrap(pool.request().input('Id', id).query(_index.querys.deleteUsser));

        case 6:
          result = _context4.sent;
          console.log(result);
          res.sendStatus(204);

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.deleteUsserById = deleteUsserById;

var GetCountUsserActive = function GetCountUsserActive(req, res) {
  var pool, result;
  return regeneratorRuntime.async(function GetCountUsserActive$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _index.getConnection)());

        case 2:
          pool = _context5.sent;
          _context5.next = 5;
          return regeneratorRuntime.awrap(pool.request().query(_index.querys.GetCountUsserActive));

        case 5:
          result = _context5.sent;
          //console.log(result);
          res.json(result.recordset[0]['']);

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.GetCountUsserActive = GetCountUsserActive;

var ActualizarPorId = function ActualizarPorId(req, res) {
  var _req$body2, NombreCompleto, CorreoElectronico, Usuario, Contrasena, id, pool;

  return regeneratorRuntime.async(function ActualizarPorId$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, NombreCompleto = _req$body2.NombreCompleto, CorreoElectronico = _req$body2.CorreoElectronico, Usuario = _req$body2.Usuario, Contrasena = _req$body2.Contrasena;
          id = req.params.id;

          if (!(NombreCompleto == null || CorreoElectronico == null || Usuario == null || Contrasena == null)) {
            _context6.next = 4;
            break;
          }

          return _context6.abrupt("return", res.status(400).json({
            message: 'Debe diligenciar todos los campos'
          }));

        case 4:
          _context6.next = 6;
          return regeneratorRuntime.awrap((0, _index.getConnection)());

        case 6:
          pool = _context6.sent;
          _context6.next = 9;
          return regeneratorRuntime.awrap(pool.request().input('NombreCompleto', _index.sql.VarChar, NombreCompleto).input('CorreoElectronico', _index.sql.VarChar, CorreoElectronico).input('Usuario', _index.sql.VarChar, Usuario).input('Contrasena', _index.sql.VarChar, Contrasena).input('Id', _index.sql.Int, id).query(_index.querys.ActualizarPorId));

        case 9:
          res.json({
            NombreCompleto: NombreCompleto,
            CorreoElectronico: CorreoElectronico,
            Usuario: Usuario,
            Contrasena: Contrasena
          });

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.ActualizarPorId = ActualizarPorId;
//# sourceMappingURL=Login.controller.dev.js.map
