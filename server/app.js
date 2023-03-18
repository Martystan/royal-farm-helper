const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./createRouter');
const cors = require('cors');

const app = express();
app.use(cors())

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('farmData');

    const boostersCollection = db.collection('boosters');
    const boostersRouter = createRouter(boostersCollection);
    app.use('/boosters', boostersRouter);

    const factoriesCollection = db.collection('factories');
    const factoriesRouter = createRouter(factoriesCollection);
    app.use('/factories', factoriesRouter);

  })
  .catch(console.error);



// app.use('/factories',(req, res, next)=>{
//   const factories = [
//     {
//       "name": "Glassblower",
//       "id": "1"
//     },
//     {
//       "name": "Kitchen",
//       "id": "4"
//     },
//     {
//       "id": "5",
//       "name": "Jeweler"
//     },
//     {
//       "name": "Hats",
//       "id": "7"
//     },
//     {
//       "name": "Candymaker",
//       "id": "8"
//     },
//     {
//       "name": "Salads",
//       "id": "9"
//     },
//     {
//       "name": "Juice bar",
//       "id": "10"
//     }
//   ]
//   res.json(factories)
// });

module.exports = app;
