var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  const uri = 'https://swapi.dev/api/people';

  async function getPeople(pageNumber) {
    console.log(`Calling api for page ${pageNumber}`)
    const url = `${uri}/?page=${pageNumber}`;
    console.log(url);
    return await axios.get(url);
  }

  async function getAllPeople() {
    let records = [];
  
    let totalPages = 10;

    for(i = 1; i < totalPages; i++) {
      let response = await getPeople(i);
      console.log(response.data);
      records = records.concat(response.data);
    }

    res.send(records);
  }


  getAllPeople();

});

module.exports = router;

  //pulls the first page//
  
  // const getPeople = async () => {
  //   try {
  //     return await axios.get(uri);
  //   } catch(error)
  //       {
  //     console.error(error);
  //   }
  //     }
      
  //     getPeople().then((response) => {
  //       const data = response.data;
  //       res.send(data);
  //     })