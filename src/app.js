import express  from "express"; // importamos express
import projectsRoutes from './routes/projects.routes.js'; // importamos el archivo projects.routes 
import tasksRoutes from "./routes/task.routes.js";

const app = express(); // asignamos app a express

// middlewares
app.use(express.json()) // esta linea hace que cada vez que envien un dato en formato json el servidor va a poder interpretarlo y guardarlo dentro de un req.body y cada vez que yo llame al req.body yo voy a poder utilizar los datos que la aplicacion cree que me esta enviando.

app.use(projectsRoutes); // aca le decimos que vamos a utilizar el archivo
app.use(tasksRoutes);

export default app; // exportamos app