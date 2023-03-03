const express = require('express');
const router = express.Router();
const admin = require('firebase-admin')
const fcm = require('fcm-notification')
var serviceAccount = require("./supermedic-56c64-firebase-adminsdk-u959y-a7261b00e5.json");
const mdbConn = require('../../db_connection/mariaDBConn')
router.get('/', function (req, res, next) {
    console.log('notification')
    var certPath = admin.credential.cert(serviceAccount)
    var FCM = new fcm(certPath);
    let target_token = 'eMQ7WE2SRvCxb_e6wrvLb0:APA91bGkZHHDQP8bd9TA0_dH2ANts00EeARdD-wM9qLJS3gf95Dm06FuEz4TMXQAbQG4EBsws6lcpGK5e0-ZxYbAIhrC2FAL6g65y4RWI9LyNZFHi2lPxx7Y3hicFgYkNtediFQxY0JD'
      //target_token은 푸시 메시지를 받을 디바이스의 토큰값입니다
    let message = {
        notification : {
            title : ' hi123',
            body : ' by2e'
        },
        data : {
            route : 'splash'
        },
        token : target_token
    }
    FCM.send(message);
})

router.post('/uploadToken', function (req, res, next) {
    const info = {
        "email" : req.body['email'],
        "token" : req.body['token']
    };
    var sql = 'SELECT TOKEN FROM notificationtoken WHERE email=?'
    var params = [info['email'], info['token']];    

    mdbConn.dbSelect(sql, info['email'])
    .then((row) => {
        if (!row) {
            var sql = 'INSERT INTO notificationtoken(email, TOKEN) VALUES(?,?)';
        }
        else{
            if (row['TOKEN'] == info['token']){
                res.status(200).send("true");
                return;
            }
            var sql = 'UPDATE notificationtoken SET TOKEN = ?  WHERE email = ?'
        }
        mdbConn.dbInsert(sql, params)
        .then((rows) => {
            if (!rows) res.status(500).send("false");
            else {res.status(200).send("true")
        };
        })
        .catch((errMsg) => {
            res.status(500).send(errMsg);
        });  
    })            
    .catch((errMsg) => {
        res.status(500).send(errMsg);
    });        
})

module.exports = router;
