
const route = require('express').Router()

const path = require('path')

route.get('/', (req, res) => res.sendFile(path.join(__dirname, './../views/index.html')))
//route.post('/addDish', (req, res)=> res.sendFile(path.join(__dirname,'./../views/form-dish.html')))
route.post('/', async (req, res) => {
    const newDishData = req.body;
  
    try {
      // Asume que existe un modelo DishModel para interactuar con la base de datos
      const newDish = await DishModel.create(newDishData);
      res.status(201).json(newDish);
    } catch (error) {
      console.error('Error al agregar nuevo plato:', error);
      res.status(500).json({ error: 'Error al agregar nuevo plato' });
    }
  })

module.exports = route;