const router = require('express').Router();
const { Mesa, Orden } = require('../../dbconfig')

//Se crean las rutas para una API REST con los diferente metodos


router.get('/', async (req, res) => {
  let mesas = await Mesa.findAll(
    {
      order: [
        ['mesaId', 'DESC']
    ]
    });
  res.json(mesas);
});

router.get('/:id', async (req, res) => {
  // Llama todas las mesas disponibles osea con estado 0
  let mesas = await Mesa.findAll({
    where: {
      estado: req.params.id
    }
  });
  res.json(mesas);
});

router.put('/:mesaId', async (req, res) => { //estas rutas reciben parametros
  await Mesa.update(req.body, { // funcion para actualizar 
    where: { mesaId: req.params.mesaId }
  });
  res.json({ success: 'Se ha actualizado un registro.' });

});

router.post('/', async (req, res) => {
  
  await Mesa.create(req.body);
  
  res.json({ success: 'Se ha actualizado un registro.' });
});

router.get('/findOne/:mesaId', async (req, res) => {

  let mesa = await Mesa.findOne({
    where: {
      mesaId: req.params.mesaId
    }
  });
  res.json(mesa);

});

router.delete('/:mesaId', async (req, res) => { //estas rutas reciben parametros
  await Mesa.destroy({ // funcion para borrar
    where: { mesaId: req.params.mesaId }
  });
  res.json({ success: 'Se ha borrado un registro.' });

});

module.exports = router; // se exporta el router hacia api.js
