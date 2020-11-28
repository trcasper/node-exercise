var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  const uri = 'https://swapi.dev/api/planets/';

  const getPlanets = async () => {
    try {
      return await axios.get(uri);
    } catch(error)
    {
      console.error(error);
    }
  }

  getPlanets().then((response) => {
    const data = response.data;
    res.send(data);
  })
});

module.exports = router;
