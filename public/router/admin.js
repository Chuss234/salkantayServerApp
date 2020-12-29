const router = require('express').Router();
// const jwt = require('jwt-simple');
// const moment = require('moment');
// const { fraseAcceso } = require('./createToken');
// const { Orden, Mesa } = require('../../dbconfig');

router.get('/index', (req, res)=>{

    res.render('index');
    
} );

router.get('/ventas', (req, res)=>{

    res.render('ventas');
    
} );

router.get('/config', (req, res)=>{

    res.render('config');
    
} );

router.get('/productos', (req, res)=>{

    res.render('productos');
    
} );

router.get('/reportes', (req, res)=>{

    res.render('reportes');
    
} );

router.get('/clientes', (req, res)=>{

    res.render('clientes');
    
} );



module.exports = router; 