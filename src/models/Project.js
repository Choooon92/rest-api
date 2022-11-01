// algo importante a tener en cuenta, para que sequelize pueda crear tablas debemos tener coneccion de la base de datos, entonces la importamos.
import { sequelize } from "../database/database.js"; // importamos la base de datos
import { DataTypes } from "sequelize"; // importamos los tipos de datos que acepta sequelize 

import { Task } from './Task.js';

// vamos a definir una tabla: va a recibir 2 propiedades, un name: con el nombre de la tabla y un constructor que seria un objeto donde definimos las columnas de la tabla
// para utilizar la tabla en un futuro vamos a tener que exportarla y para eso la declararemos dentro de una variable
export const Project = sequelize.define('projects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  priority: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  },
}, {
  timestamps: true, /* Sirve para eliminar las tablas extras que te crea sequelize por defecto. */
});


// relaciones
Project.hasMany(Task, {
  foreignKey: 'projectId', /* Nombre de la columna que va a enlazarse */
  sourceKey: 'id'  /* a donde lo va a enlazar */
})

Task.belongsTo(Project, {
  foreignKey: 'projectId',
  targetId: 'id' /* Aca va target porque se enlaza con la tabla padre */
})