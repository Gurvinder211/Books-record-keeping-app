const express    = require('express');
const session    = require('express-session');
const path       = require('path');
const connectDB  = require('./config/database.js');
const dotenv = require("dotenv");
const app = express()
const port = process.env.PORT;

dotenv.config();
connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
 



app.get('/', (req, res) => { 
  res.render('home.ejs')
})

 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
