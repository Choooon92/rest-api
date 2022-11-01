import app from './app.js'; // importamos la config de express, para poder importarlo devemos agregar un "type": "module" en el pk.json, encima de scripts, sino usamos esta sintaxis const { Sequelize } = require('sequelize');
import { sequelize } from './database/database.js';

// import './models/Project.js';  Podemos eliminarlo, ya no lo necesitamos 
// import './models/Task.js';

// app.listen(3000); // aca le decimos a express que escuche en el puerto 3000 y tenemos el servidor levantado
// // podemos consologear algo para saber si el servidor esta escuchando
// console.log('Server is listening on port', 3000); // ejecutamos el servidor con node src/index.js, o le podemos asignar un comando en el pk.json en la seccion scipts.

// ponemos la escucha del servidor dentro de una funcion asincrona
async function main() {
  try {
  //   await sequelize.authenticate();      Esto solo es para verificar que funciona el servidor
  //   console.log("Connection has been established successfully.");
    await sequelize.sync({ force: false })  /* VAmos a usar el metodo sync para sincronizar con la database las tablas */
    app.listen(3000)
    console.log("Server is listening on port", 3000);
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
}

main(); // no olvidar llamar a la funcion, sino no va a ejecutarse main.