import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';

export const getProjects = async (req, res) => {
  try { // tendriamos que ponerlo dentro de un try catch por si ocurre un error, para que enviarselo al cliente
    const projects = await Project.findAll()
    res.json(projects)  // aca se lo enviamos al cliente
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}

export const getProject = async (req, res) => {
  try {
    const { id } = req.params // extraemos el id que requerimos por params.
    const project = await Project.findOne({ 
      where: { 
        id
      }
    })

    if(!project) {   // cuando el proyecto no existe
      return res.status(404).json({message: "Project does not exist"})
    }

    res.json(project)
  } catch (error) {
    return res.status(500).json({message: error.message});  
  }
}
// se las añadimos a sus respectivas rutas
export const createProject = async (req, res) => {
  const { name, priority, description } = req.body // como reques body ya trae los datos, voy a usarlo directamente desde ahi, y los extraemos con los datos que nos interesan
  
  try {
      // Esto es asincrono ya que es una consulta a la base de datos.
      // Esto representa al objeto que estoy creando en la tabla asi que tenemos que decir que es un proyecto nuevo.
      const newProject = await Project.create({    // Aca le decimos que desde el modelo de Project vamos a crear un nuevo dato.
        // name: name,
        // priority: priority,  
        // description: description
        // como tienen los mismos nombres de datos recibidos con los datos del elemento a crear al usar js podemos solo ponerlo de la sgte manera
        name,
        priority,
        description
      }) 
      res.json(newProject) // asi se lo enviamos al cliente.

  } catch (error) {
    return res.status(500).json({message: error.message});    
  }
  
}

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params // extraemos el id que requerimos por params para saber que dato buscamos
    const { name, priority, description } = req.body // tenemos que extraer por body, ya que necesitamos los nuevos datos de la actualizacion.

    const project = await Project.findByPk(id) // findbypk lo que hace es buscar el dato mediante el id
  // empezamos a modificar los datos, como querramos que queden.
    project.name = name 
    project.priority = priority
    project.description = description
    await project.save() // este metodo me permite guardar los cambios de la database.

    res.json(project)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params; // extrae el id que se paso por params
    await Project.destroy({ // busca y destruye el dato enviado por el id
      where: { // le decimos en que queremos que se base para buscar el dato, en este caso el id
        id,
      },
    });

    res.sendStatus(204) // el 204 dice que fue todo ok pero que no devuelve ningun mensaje.
  } catch (error) {
  return res.status(500).json({message: error.message})  
  }
}

export const getProjectTask = async (req, res) => {
  try {
    const { id } = req.params // requiero el id por params
    const tasks = await Task.findAll({ // en task busco a todas las tares que concuerden con el projectId igual al id que le paso por params
      where: { projectId: id } // donde projectId sea igual al id de params.
    })

    res.json(tasks)

  } catch (error) {
    return res.status(500).json({message: error.message});
  }
}