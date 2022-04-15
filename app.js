const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const app = express()

// Express Sass setup
app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    outputStyle: process.env.NODE_ENV === 'development' ? 'nested' : 'compressed',
    force: process.env.NODE_ENV === 'development',
    sourceMap: true
  })
);

// middleware & view engine
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));

// default value for title local
app.locals.title = 'NE-AUTH';

// routes

app.get('/', (req, res, next) => res.render('home'))
app.get('/smoothies', (req, res, next) => res.render('smoothies'))

app.get('*', (req, res, next) => {
  next(new Error('NOT_FOUND'));
});

app.use((error, req, res, next) => {
  console.log('There was an error handling a request', error);
  const message = error.message;
  res.status(message === 'NOT_FOUND' ? 404 : 500);
  res.render('error', { message });
});

module.exports = app;













