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
    const info = {
        "medicine": JSON.stringify(req.body['medicine'].replace(" ", "").split(',')),
        "day": req.body['day'],
        "times": req.body['times'],
        "image": req.file != undefined ? req.file.filename : null,
    };
    var sql = 'SELECT id_idx FROM Users WHERE email=?'
    mdbConn.dbSelect(sql,req.body['email'])
    .then((row) => {
        info['id_idx'] = row['id_idx']
        var sql = 'INSERT INTO takingmedicine(id_idx, medicine_name, days, times, image) VALUES(?,?,?,?,?)';
        var params = [info['id_idx'], info['medicine'], info['day'], info['times'], info['image']];
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
router.get('/parse', function(req, res){
    let email = req.query.email
    var sql = 'SELECT id_idx FROM Users WHERE email=?'
    mdbConn.dbSelect(sql,email)
    .then((row) => {
        let user_idx = row['id_idx']
        let sql = 'SELECT medicine_name, days, times  FROM takingmedicine WHERE id_idx=?'
        mdbConn.dbSelectall(sql, user_idx)
        .then((rows) => {
            if(!rows) res.status(200).send('Empty')
            console.log("parse arrive");
            res.status(200).send(rows)
        }).catch((err) => {
            res.status(500).send(err);
        })
    }).catch((err) => {
        res.status(500).send(err);
    })

})


module.exports = router;
