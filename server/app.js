const express = require('express');

const app = express();

app.use('/factories',(req, res, next)=>{
  const factories = [
    {
      "name": "Glassblower",
      "id": "1"
    },
    {
      "name": "Kitchen",
      "id": "4"
    },
    {
      "id": "5",
      "name": "Jeweler"
    },
    {
      "name": "Hats",
      "id": "7"
    },
    {
      "name": "Candymaker",
      "id": "8"
    },
    {
      "name": "Salads",
      "id": "9"
    },
    {
      "name": "Juice bar",
      "id": "10"
    }
  ]
  res.json(factories)
});

module.exports = app;
