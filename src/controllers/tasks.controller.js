import { Task } from "../models/Task.js";


export const getTasks = async (req, res) =>{
  try {
    const tasks = await Task.findAll()
    res.json(tasks)
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const getTask = async (req, res) =>{
  try {
    const { id } = req.params
    const task = await Task.findOne({
      where: { id },
      attributes: [' name '] // findOne tmb puede devolver solo los atributos que le pidamos, en forma de array.
    })
    if(!task) {
      return res.status(404).json({message: 'Task does not exist'} )
    }

    res.json(task)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const createTask = async (req, res) =>{
  try {
    const { name, done, projectId } = req.body
    const newTask = await Task.create({
      name,
      done, 
      projectId
    })
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const updateTask = async (req, res) =>{
  try {
    const { id } = req.params; // requiero el id por params.
    // const { name, done, projectId } = req.body // requiero por body para updatear

    // const task = await Task.findByPk(id)
    // task.name = name,
    // task.done = done,
    // task.projectId = projectId
    // await task.save();

// Tambien podemos hacerlo de esta manera, y nos ahorramos algunas lineas de codigo
    const task = await Task.findOne({ // utilizamos findOne y le especificamos donde lo buscamos
      where: { id },
    });
    task.set(req.body); // aca le decimos que vamos a setear o modificar datos, en este caso no hace falta pasar el request por que esta dentro de req.body, lo bueno es que solo podemos pasarle el parametro que queremos modificar y no todo el body
    await task.save() // aca guardamos

    res.json(task)
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const deleteTask = async (req, res) =>{
  try {
    const { id } = req.params
    await Task.destroy({
      where: {
        id,
      }
    })

    res.sendStatus(204) // todo ok, no muestra msg.
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};
