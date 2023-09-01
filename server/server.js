const express = require('express');
const app = express();
const port = 3000;

const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[environment];
const knex = require('knex')(config);


app.get('/sections', async (req, res) => {
  try {
    const sections = await knex('sections').select();
    res.json(sections);
  } catch (error) {
    res.status(500).send('Error retrieving sections.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});