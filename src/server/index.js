const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

require('../database');

app.use(cors());
app.use(bodyParser.json());
app.use('/', require('../routes/index'));

//handle production
if(process.env.NODE_ENV +++ 'production') {
  //Static folder
  app.use(express.static(__dirname + '/public/'));

  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

  //Handle useNewUrlParserapp.get()
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
