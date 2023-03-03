const express = require('express');
const router = express.Router();
const fs = require('fs');
var multer  = require('multer')
const path = require('path');
const mdbConn = require('../../db_connection/mariaDBConn')

var storage = multer.diskStorage({ 
    destination: function(request, file, cb) { // 저장위치설정 
        cb(null,'uploads')
    },
    filename: function(requset, file, cb) { // 파일 저장할때 제목설정 
        var extension = path.extname(file.originalname); // 이미지파일확장자명
        cb(null,file.fieldname + '-' + Date.now() + extension) // 저장되는 시점의 시각으로 이미지 저장
    }
})
var upload = multer({storage:storage})
router.post('/upload', upload.single("image"), function (req,res) {
    const medicineList = req.body['medicine'].replace(" ", "").split(',')
    for( var i = 0; i < medicineList.length; i++ ) {
        const info = {
            "email" : req.body['email'],
            "medicine": medicineList[i],
            "day": req.body['day'],
            "times": req.body['times'],
            "image": req.file != undefined ? req.file.filename : null,
        };
    
        var sql = 'INSERT INTO takingmedicine(email, medicine_name, days, times, image) VALUES(?,?,?,?,?)';
        var params = [info['email'], info['medicine'], info['day'], info['times'], info['image']];
    
        mdbConn.dbInsert(sql, params)
        // .then((rows) => {
        // })
        // .catch((errMsg) => {
        //     res.status(500).send(errMsg);
        // });
    }
    res.send('true')
    
})
router.get('/parse', function(req, res){
    let email = req.query.email
    console.log(email)
    let sql = 'SELECT id, medicine_name, days, times, take  FROM takingmedicine WHERE email=?'
    mdbConn.dbSelectall(sql, email)
    .then((rows) => {
        if(!rows) res.status(200).send('Empty')
        else res.send(rows)
    })
    .catch((err) => {
        res.status(500).send(err);
    })
})

router.post('/check', function(req, res) {
    const info = {
        "email" : req.body['email'],
        'id' :  Number(req.body['id']),
        'take' : Number(req.body['take'])
    };
    var sql = 'UPDATE takingmedicine SET take = ?  WHERE email = ? AND id = ?'
    var params = [info['take'], info['email'], info['id']];
    mdbConn.dbInsert(sql, params)
    .then((rows) => {
        if (!rows) res.status(500).send("false");
        else res.status(200).send("true");
    })
    .catch((errMsg) => {
        res.status(500).send(errMsg);
    });
})

router.post('/check', function(req, res) {
    const info = {
        "email" : req.body['email'],
        'id' :  req.body['id'],
        'take' : req.body['take']
    };
    var sql = 'UPDATE takingmedicine SET take = ?  WHERE email = ? AND id = ?'
    var params = [info['take'], info['email'], info['id']];
    mdbConn.dbInsert(sql, params)
    .then((rows) => {
        if (!rows) res.status(500).send("false");
        else res.status(200).send("true");
    })
    .catch((errMsg) => {
        res.status(500).send(errMsg);
    });
})


module.exports = router;
