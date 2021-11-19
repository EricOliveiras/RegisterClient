require('dotenv').config();

const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;

async function startServer() {

  const app = express();

  app.use(express.json());
  app.use(cors());

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

};


