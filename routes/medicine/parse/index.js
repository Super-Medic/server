const express = require('express');
const router = express.Router();
const mdbConn = require('../../../db_connection/mariaDBConn')

router.get('/current', function(req, res){
    let email = req.query.email
    let sql = 'SELECT id, medicine_name, days, times  FROM takingmedicine WHERE email=?'
    mdbConn.dbSelectall(sql, email)
    .then((rows) => {
        if(!rows) res.status(500).send('Empty')
        else res.send(rows)
    })
    .catch((err) => {
        console.log('medicine/parse/current', errMsg);
        res.status(500).send(err);
    })
})
router.get('/past', function(req, res){
    let email = req.query.email
    let sql = 'SELECT takeinfo FROM takingmedicine WHERE email=?'
    mdbConn.dbSelectall(sql, email)
    .then((rows) => {
        if(!rows) res.status(500).send('Empty')
        else res.send(rows)
    })
    .catch((err) => {
        console.log('medicine/parse/past', errMsg);
        res.status(500).send(err);
    })
})