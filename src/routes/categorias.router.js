const expresss=require("express"); 
const router = expresss.Router();
const categoriasController = require("../controllers/categorias.controller");   
router.get('/', categoriasController.index);
router.get('/:id', categoriasController.show);
module.exports = router;
