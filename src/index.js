const express = require('express');
const path = require('path');
const morgan = require('morgan');
//const handlebars = require('express-handlebars');
const { engine } = require ('express-handlebars');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
//app.engine('handlebars', handlebars());
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});
app.listen(3000);
{
  "ext"; "js json scss"
}

//app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
//});