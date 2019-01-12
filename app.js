const express = require('express');
const path = require('path');
const logger = require('morgan');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();
const celebritiesRoutes = require('./routes/celebrities.routes');
const moviesRoutes = require('./routes/movies.routes');



require('./config/db.config');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/celebrities', celebritiesRoutes);
// app.use('/movies', moviesRoutes);


app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => console.info(`App listen at ${PORT} port`));
