var createError = require('http-errors');
var express = require('express');
const helmet = require('helmet');
var app = express();
require('dotenv').config();
const routes = require('./routes');
const schedule = require('node-schedule');
const mdbConn = require('./db_connection/mariaDBConn');
const admin = require('firebase-admin');
var serviceAccount = require("./supermedic-56c64-firebase-adminsdk-u959y-c13e993edb.json");
var certPath = admin.credential.cert(serviceAccount)
admin.initializeApp({
  credential : certPath
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
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error status
  res.status(err.status || 500);
});

// 12시 복약 내역 저장
schedule.scheduleJob('0 0 * * *', function () {
  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth()
  let date = today.getDate() - 1;  // 날짜
  if(date == 0){
    if((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) ){
      date = 31
    }
    else if((month == 12)){
      year -= 1;
      date = 31
    }
    else if((month == 2)){
      date = new Date(year,2,0).getDate(); 
    }
    else{
      date = 30
    }
    month = ('0' + today.getMonth()).slice(-2);  
  }
  else{
    month = ('0' + (today.getMonth() + 1)).slice(-2);
  }
  let day = year + '-' + month + '-' + ('0' + date).slice(-2);
  let weekday = new Date(year, month-1, date);
  weekday = weekday.getDay()
  
  var sql = 'SELECT email FROM Users'
  mdbConn.dbSelectall(sql, [])
    .then((rows) => {
      for (var i = 0; i < rows.length; i++) {
        var sql = 'SELECT id, medicine_name, times, days FROM takingmedicine WHERE email = ?'
        let email = rows[i]['email']
        mdbConn.dbSelectall(sql, email)
          .then((rows) => {
            let jsonData = {}
            for (var j = 0; j < rows.length; j++) {
              if(rows[j]['days'].includes(weekday)){
                jsonData[rows[j]['medicine_name']] = rows[j]['times']
                for (var k = 0; k < rows[j]['times'].length; k++) {
                  rows[j]['times'][k]['check'] = false
                }
                var sql = 'UPDATE takingmedicine SET times = ?  WHERE id = ?'
                var params = [JSON.stringify(rows[j]['times']), rows[j]['id']]
              mdbConn.dbInsert(sql, params)
              }
            }
            var sql = 'INSERT INTO medicinetake(email, date, takeinfo) VALUES(?,?,?)';
            var params = [email, day, jsonData]
            mdbConn.dbInsert(sql, params)
          })
      }
      console.log(day, '투약정보 저장 완료')
    })

})

//알림 보내기
schedule.scheduleJob(' */1 * * * *', function () {


  var sql = 'SELECT email,TOKEN FROM notificationtoken'
  mdbConn.dbSelectall(sql, [])
    .then((notification) => {

      var take_when = 'SELECT days, times FROM takingmedicine WHERE email = ?'
      for (var i = 0; i < notification.length; i++) {
        let email = notification[i]['email'];
        let token = notification[i]['TOKEN'];

        mdbConn.dbSelectall(take_when, email).then((when) => 
          notificationHandler(when, token )
        ).catch((err) => {
          console.log(err);
        });
      }
    }).catch((err) => {
      console.log(err);
    });
})

function notificationHandler(when, token){
  var time_date = new Date();

  // 현재 시간 불러오기 HH:MM
  var nowHour = time_date.getHours();
  var nowMinute = String(time_date.getMinutes()).padStart(2, "0");
  if (nowHour == 0) nowHour += 12;
  var nowTime = String(nowHour) + ":" + nowMinute;
  
  for (var j = 0; j < when.length; j++) {
    if ((when[j]['days'].includes(time_date.getDay()))) {
      for (var k = 0; k < when[j]['times'].length; k++) {
        if (when[j]['times'][k]['check'] == false) {

          // 약 복용 시간 불러오기 HH:MM
          var takingTimeHour = when[j]['times'][k]['time'].split(" ")[0].split(":")[0];
          var takingTimeMinute = when[j]['times'][k]['time'].split(" ")[0].split(":")[1];
          if ((when[j]['times'][k]['time'].slice(-2, when[j]['times'][k]['time'].length) == "PM") && (when[j]['times'][k]['time'].slice(0, 2) != "12"))
            takingTimeHour = Number(takingTimeHour) + 12;
          var takingTime = String(takingTimeHour) + ":" + takingTimeMinute;
          if (nowTime == takingTime) {
            try {
              console.log("send")
              sendPushNotification(token, "슈퍼메딕", "약 복용 시간입니다");
              return
            }
            catch {
              continue
            }
          }
        }
      }
    }
  }
}


function sendPushNotification(target_token, title, body) {
  //target_token은 푸시 메시지를 받을 디바이스의 토큰값입니다
  let message = {
    notification: {
      title: title,
      body: body,
    },
    data: {
      route: 'splash'
    },
    android:{
      priority:"high",
      notification: {
        channelId:'1:585309393841:android:2940a96afa932465df6390'
    }
    },
    token: target_token,
    apns: {
      payload: {
          aps: {
            badge: 2.0,
            "apns-priority": 5,
              sound: 'default'
          },
      },
  },
  }
  admin.messaging().send(message)
  .then(()=> {
    console.log("success");
  })
}

module.exports = app;