var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  const uri = 'https://swapi.dev/api/planets';

  async function getPlanets(pageNumber) {
    const url = `${uri}/?page=${pageNumber}`;
    return await axios.get(url);
  }

  async function getAllPlanets() {
    let records = [];

    let totalPages = 6;

    for(i = 1; i < totalPages; i++) {
      let response = await getPlanets(i);
      records = records.concat(response.data);
    }

    res.send(records);
  }

  getAllPlanets();

});

module.exports = router;

// const getPlanets = async () => {
//   try {
//     return await axios.get(uri);
//   } catch(error)
//   {
//     console.error(error);
//   }
// }
  // getPlanets().then((response) => {
  //   const data = response.data;
  //   res.send(data);
  // })