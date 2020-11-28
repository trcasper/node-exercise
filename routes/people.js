var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  request({
    uri: 'https://swapi.dev/api/people/'
  }).pipe(res)
  // res.send('peoplepage');
});

module.exports = router;
