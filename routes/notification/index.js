const express = require('express');
const router = express.Router();
const admin = require('firebase-admin')
const fcm = require('fcm-notification')
var serviceAccount = require("./supermedic-56c64-firebase-adminsdk-u959y-6bf21d5500.json");

router.get('/', function (req, res, next) {
    console.log('notification')
    var certPath = admin.credential.cert(serviceAccount)
    var FCM = new fcm(certPath);
    let target_token = 'cVOwZAV2JUM9qrRl9BGE5M:APA91bGFjfMfoSQnGMb7WTfdVAefN4QvyQLXeeHIIQu2N22fRpeqmpN70xW4IHK1MZytOzvJaFt_4RbwMIcxC_pu4hEzgvfBJ1sqBmhc4kfq1skz1GdGANqtaiRHHu7o62A_25BRMQoE'
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
    FCM.send(message, function(err, res){
        if(err){
            return res.status(500).send({
                message : err
            })
        }
        else{
            return res.status(200).send({message : 'Notification Sent'})
        }
    });
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
            console.log(row['TOKEN']);
            if (row['TOKEN'] == info['token']){
                res.status(200).send("true");
            }
            var sql = 'UPDATE notificationtoken SET TOKEN = ?  WHERE email = ?'
        }
        mdbConn.dbInsert(sql, params)
        .then((rows) => {
            if (!rows) res.status(500).send("false");
            else res.status(200).send("true");
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
