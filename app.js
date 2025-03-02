const express = require('express');
const app = express()
const port = 3000;
const login = require('./routes/login');

app.use('/login', login);

app.get('/', (req, res) => {
  res.send('Welcome to the book record keeping web app!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
