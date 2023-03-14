const express = require('express');
const router = express.Router();
const mdbConn = require('../../db_connection/mariaDBConn')

router.post('/uploadToken', function (req, res, next) {
    const info = {
        "email": req.body['email'],
        "token": req.body['token']
    };
    var sql = 'SELECT TOKEN FROM notificationtoken WHERE email=?'
    var params = [info['email'], info['token']];

    mdbConn.dbSelect(sql, info['email'])
        .then((row) => {
            if (!row) {
                var sql = 'INSERT INTO notificationtoken(email, TOKEN) VALUES(?,?)';
            }
            else {
                if (row['TOKEN'] == info['token']) {
                    res.status(200).send("true");
                    return;
                }
                var sql = 'UPDATE notificationtoken SET TOKEN = ?  WHERE email = ?'
            }
            mdbConn.dbInsert(sql, params)
                .then((rows) => {
                    if (!rows) res.status(500).send("false");
                    else {
                        res.status(200).send("true")
                    };
                })
                .catch((errMsg) => {
                    console.log('notification/uploadToken1', errMsg);
                    res.status(500).send(errMsg);
                });
        })
        .catch((errMsg) => {
            console.log('notification/uploadToken2', errMsg);
            res.status(500).send(errMsg);
        });
})

module.exports = router;
