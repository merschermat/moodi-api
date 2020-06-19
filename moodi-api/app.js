var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

app.use(cors({
    origin: "http://localhost:3000",
}))
app.options('*', cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Expose-Headers", "Access-Control-Allow-Origin")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true")
    next();
});
var users = require('./routes/users');
var files = require('./routes/convertFiles');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/users', users);
app.use('/files', files);

app.listen('4000')

module.exports = app;
