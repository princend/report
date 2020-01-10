import { router } from "./router/router";

const createError = require('http-errors');
var express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

var app = express();
var port = '3000';
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

for (const route of router) {
    app.use(route.getPrefix(), route.getRouter())
}

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({ message: err.message, error: err });
});

app.listen(port, () => {
    console.log(`app listent on port ${port}`);
})

module.exports = app;
