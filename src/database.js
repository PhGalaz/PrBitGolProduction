const mongoose = require('mongoose')

require('dotenv').config({ path: './variables.env'});
console.log(process.env.DB_URL);

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err))
