var express = require('express');
var router = express.Router();

console.log("junks");
/* GET users listing. */
router.post('/ajouter', function(req, res) {
  res.send('Got a POST request');
});

module.exports = router;