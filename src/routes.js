const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();
// Métodos HTTP: GET, POST, PUT, DELETE;

// Tiposde parâmetros:
// Query params     : req.query(Filtros, ordenação, paginação, ...)
// Route params     : req.params (Identificar um recurso na alteração ou remoção);
// Body             : req.body (Dados para criação ou alteração de um registro)

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index);
module.exports = routes;