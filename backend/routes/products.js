var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
    response.send([
        {
          "id": 782330,
          "title": "Doom: Eternal",
          "publisher": "Bethesda",
          "studio": "id Software",
          "genre": "FPS",
          "price": 39.99
        },
        {
          "id": 546560,
          "title": "Half-Life: Alyx",
          "publisher": "Valve",
          "studio": "Valve",
          "genre": "VR",
          "price": 59.99
        },
        {
          "id": 1145360,
          "title": "Hades",
          "publisher": "Supergiant",
          "studio": "Supergiant",
          "genre": "Rogue-like",
          "price": 24.99
        },
        {
          "id": 2050650,
          "title": "Resident Evil 4",
          "publisher": "Capcom",
          "studio": "Capcom",
          "genre": "Horror",
          "price": 59.99
        },
        {
          "id": 2208920,
          "gameTitle": "Assassins Creed: Valhalla",
          "publisherName": "Ubisoft",
          "gameStudio": "Ubisoft Montreal",
          "genre": "Third Person",
          "MSRP": 59.99
        }
      ])
})

module.exports = router