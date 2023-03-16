const express = require('express');
const router = express.Router();
const fs = require('fs');
var multer  = require('multer')
const path = require('path');
const mdbConn = require('../../db_connection/mariaDBConn')
const parse = require("./parse");
router.use("/parse", parse);

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
    let times_parse = JSON.parse(req.body['times'])
    let times = []
    for(var i=0; i <times_parse.length; i++){
        times.push({time  :times_parse[i], check : false})
    }
    const info = {
        "email" : req.body['email'],
        "medicine": req.body['medicine'].replace(" ", "").split(',').join(', '),
        "day": req.body['day'],
        "times": JSON.stringify(times),
        "image": req.file != undefined ? req.file.filename : null,
    };

    var sql = 'INSERT INTO takingmedicine(email, medicine_name, days, times, image) VALUES(?,?,?,?,?)';
    var params = [info['email'], info['medicine'], info['day'], info['times'], info['image']];

    mdbConn.dbInsert(sql, params)
    .then((rows) => {
        if(!rows) res.status(500).send('false')
        else res.status(200).send('true')
    })
    .catch((errMsg) => {
        console.log('medicine/upload', errMsg);
        res.status(500).send(errMsg);
    });
})

router.post('/check', function(req, res) {
    const info = {
        "email" : req.body['email'],
        'id' :  Number(req.body['id']),
        'take' : req.body['take'] == 'false' ? false : true
    };
    var sql = 'SELECT times FROM takingmedicine WHERE email = ? AND id = ?'
    var params = [info['email'], info['id']];
    mdbConn.dbSelect(sql, params)
    .then((row) => {
        if (!row) res.status(500).send("false");
        else{
            let data = row['times']
            for(var i = 0; i < data.length; i++){
                if(data[i]['time'] == req.body['time']){
                    data[i]['check'] = info['take']
                }
            }
            var sql = 'UPDATE takingmedicine SET times = ?  WHERE email = ? AND id = ?'
            var params = [JSON.stringify(data), info['email'], info['id']];
            mdbConn.dbInsert(sql, params)
            .then((rows) => {
                if (!rows) res.status(500).send("false");
                else res.status(200).send("true");
            })
            .catch((errMsg) => {
                res.status(500).send(errMsg);
            });
        }
    })            
    .catch((errMsg) => {
        console.log('medicine/check', errMsg);
        res.status(500).send(errMsg);
    });
})

router.post('/delete', (req, res) => {
    const info = {
        "email" : req.body['email'],
        "id" : req.body['id'],
    };

    let sql = "DELETE FROM takingmedicine WHERE email = ? AND id = ?"
    let params = [info['email'], info['id']];
    mdbConn.dbSelect(sql, params)
    .then((row) => {
        res.status(200).send("true");
    })
    .catch((errMsg) => {
        console.log('medicine/delete', errMsg);
        res.status(500).send(errMsg);
    })
});

module.exports = router;
