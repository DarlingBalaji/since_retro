var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var logger = require('morgan');

require('dotenv').config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");


// My Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var siteRouter = require('./routes/site');

var app = express();

// Port
const port = process.env.PORT || 8002;


// Middlewares used
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());



// Welcome route
// app.get('/', (req, res) => {
//     return res.send("Welcome to Since_REtro project");
// });



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// My Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/site', siteRouter);


// Check port and node rnning
app.listen(port, () => {
    console.log("Server is connected and running " + port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// DB connection
mongoose.connect(process.env.DBCONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("DB CONNECTED");
}).catch(() => {
    console.log("DB NOT CONNECTED");
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
