import Sequelize from 'sequelize'; // importamos Sequelize de sequelize, fijarse las mayusculas

// OPCIONES PARA CONECTARSE A LA DATA BASE
// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// esta opcion me gusta mas...
// const sequelize = new Sequelize('postgres://postgres:Promosion146@localhost:5432/projectsdb');


// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

// vamos a conectarnos de las 3 maneras para practicar.
export const sequelize = new Sequelize('projectsdb', 'postgres', 'Promosion146', { 
  host: 'localhost',
  dialect: 'postgres'
}); // exportamos sequelize y lo importamos en el archivo principal index.js


