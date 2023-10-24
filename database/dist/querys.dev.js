"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querys = void 0;
var querys = {
  getAllUsuarios: 'SELECT * FROM Usuarios',
  CreateNewUsser: 'INSERT INTO Usuarios (NombreCompleto,CorreoElectronico,Usuario,Contrasena) values (@NombreCompleto,@CorreoElectronico,@Usuario,@Contrasena)',
  getUsserById: 'SELECT *FROM Usuarios WHERE IdCliente = @Id',
  deleteUsser: 'DELETE FROM Usuarios WHERE IdCliente = @Id',
  GetCountUsserActive: 'SELECT COUNT(*) FROM Usuarios',
  ActualizarPorId: 'UPDATE Usuarios SET NombreCompleto = @NombreCompleto, CorreoElectronico = @CorreoElectronico,Usuario = @Usuario, Contrasena = @Contrasena  WHERE IdCliente = @Id '
};
exports.querys = querys;
//# sourceMappingURL=querys.dev.js.map
