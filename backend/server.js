require('dotenv').config();

const express = require('express');
const cors = require('cors');

const db = require('./database/db');
const user = require('./models/user');

const port = process.env.PORT || 3000;

async function startServer() {

  await db.sync()
    .then(() => console.log('Database connected!'))
    .catch((error) => console.log(error));

  const app = express();

  app.use(express.json());
  app.use(cors());

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

};

startServer();
