const path = require('path')

const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 8080

app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/resource/views'))

app.use(morgan('combined'))

app.get('/', (req, res) => {
  var a = 10;
  var b = 20;
  var c = a + b;
  console.log(c);
  //res.send('Hello World, Express!')
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
