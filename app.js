var createError = require('http-errors');
var express = require('express');
const helmet = require('helmet');
var app = express();
require('dotenv').config();
const routes = require('./routes');
const schedule = require('node-schedule');
const mdbConn = require('./db_connection/mariaDBConn');
const { check } = require('express-validator');
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


const job = schedule.scheduleJob('0 0 * * *', function () {
  let today = new Date();   

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate() -1;  // 날짜
  let day = year + '-' + month + '-' + date

  var sql = 'SELECT email FROM Users'
  mdbConn.dbSelectall(sql, [])
    .then((rows) => {
      for(var i = 0; i < rows.length; i++){
        var sql = 'SELECT id, medicine_name, times FROM takingmedicine WHERE email = ?'
        let email = rows[i]['email']
        mdbConn.dbSelectall(sql, email)
        .then((rows) => {
          let jsonData = {}
          for(var j =0; j < rows.length; j++) {
            jsonData[rows[j]['medicine_name']] = rows[j]['times']
            for(var k = 0; k < rows[j]['times'].length; k++) {
              rows[j]['times'][k]['check'] = false
            }
            // console.log(rows[j]['times'])
            var sql = 'UPDATE takingmedicine SET times = ?  WHERE id = ?'
            var params = [JSON.stringify(rows[j]['times']), rows[j]['id']]
            mdbConn.dbInsert(sql,params)
          }
          var sql = 'INSERT INTO medicinetake(email, date, takeinfo) VALUES(?,?,?)';
          var params = [email, day, jsonData]
          mdbConn.dbInsert(sql, params)
        })
      }
      console.log(day, '투약정보 저장 완료')
    })

})



module.exports = app;