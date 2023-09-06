const express = require('express');
const app = express();
const port = 3001;

const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[environment];
const knex = require('knex')(config);
const routes = require('./routes/index'); 
const cors = require('cors');

app.use(express.json()); 
app.use(cors());

app.use('/api', routes);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});