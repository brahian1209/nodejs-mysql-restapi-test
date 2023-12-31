"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
console.log(process.env.PORT);
var _default = {
  port: process.env.PORT || 3001,
  dbuser: process.env.DB_USER || '',
  dbpassword: process.env.DB_PASSWORD || '',
  dbserver: process.env.DB_SERVER || '',
  dbDataBase: process.env.DB_DATABASE || ''
};
exports["default"] = _default;
//# sourceMappingURL=config.dev.js.map
