var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send("Hola Mundo!!! Usando Express")
});

module.exports = router;
