"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = getConnection;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mssql["default"];
  }
});

var _mssql = _interopRequireDefault(require("mssql"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dbSetings = {
  user: _config["default"].dbuser,
  password: _config["default"].dbpassword,
  server: _config["default"].dbserver,
  database: _config["default"].dbDataBase,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

function getConnection() {
  var pool;
  return regeneratorRuntime.async(function getConnection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_mssql["default"].connect(dbSetings));

        case 3:
          pool = _context.sent;
          return _context.abrupt("return", pool);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}
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
//# sourceMappingURL=connection.dev.js.map
