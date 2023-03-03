var createError = require('http-errors');
var express = require('express');
const helmet = require('helmet');
var app = express();
require('dotenv').config();
const routes = require('./routes');

app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    const to = `https://${req.hostname}${req.url}`;
    res.redirect(to);
  }
});

/**
 * 후에 HYPHEN API 호출 시 토큰 사용을 위한 글로벌 변수 -> 현재는 USERID 와 HKEYf를 이용해 사용 중
 */
// global.Token = TOKEN;
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error status
  res.status(err.status || 500);
});

module.exports = app;