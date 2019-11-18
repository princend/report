"use strict";
exports.__esModule = true;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router_1 = require("./router");
var app = express();
var port = '3000';
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
for (var _i = 0, router_2 = router_1.router; _i < router_2.length; _i++) {
    var route = router_2[_i];
    app.use(route.getPrefix(), route.getRouter());
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.listen(port, function () {
    console.log("app listent on port " + port);
});
module.exports = app;
