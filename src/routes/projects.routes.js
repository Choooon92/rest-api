import { Router } from "express";
import { getProjects, createProject, updateProject, deleteProject, getProject, getProjectTask } from "../controllers/projects.controller.js"; //importamos los los controllers de las rutas y las agregamos a sus respectivas rutas.

const router = Router();

// creamos las rutas y las importamos a app.js
router.get('/projects', getProjects) /* Para obtener todos los proyectos */
router.post('/projects', createProject) /* Cuando sea post es para crear proyectos */
router.put('/projects/:id', updateProject) /* Cuando sea put quiero actualizar, va id porque solo quiero actualizar un proyecto */
router.delete('/projects/:id', deleteProject) /* Cuando hago delete, quiero eliminarlo, va id porque solo quiero eliminar un proyecto */

router.get('/projects/:id', getProject) /* Cuando lo pido por id quiero solo ibtener un proyecto y no todos */

// aca vamos a hacer la relacion:
router.get('/projects/:id/tasks', getProjectTask) // aca creamos el "filtro" de la relacion, le decimos que de el /:id tanto nos traiga las tasks relacionadas con ese id


export default router;