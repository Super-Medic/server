const express = require('express');
const router = express.Router();
const admin = require('firebase-admin')

var serviceAccount = require("./supermedic-56c64-firebase-adminsdk-u959y-6bf21d5500.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

router.get('/', function (req, res, next) {
    console.log('notification')
    let target_token = 'cVOwZAV2JUM9qrRl9BGE5M:APA91bGFjfMfoSQnGMb7WTfdVAefN4QvyQLXeeHIIQu2N22fRpeqmpN70xW4IHK1MZytOzvJaFt_4RbwMIcxC_pu4hEzgvfBJ1sqBmhc4kfq1skz1GdGANqtaiRHHu7o62A_25BRMQoE'
      //target_token은 푸시 메시지를 받을 디바이스의 토큰값입니다

    let message = {
        data: {
        title: '테스트 데이터 발송2',
        body: '데이터가 잘 가나요?2',
        style: '굳굳2',
        },
        token: target_token,
    }

    admin
        .messaging()
        .send(message)
        .then(function (response) {
            res.send(response);
            console.log('Successfully sent message: : ', response)
        }).catch(function (err) {
            console.log('Error Sending message!!! : ', err)
        })
})

module.exports = router;
