var express = require('express')
const mdbConn = require('../../db_connection/mariaDBConn')
var router = express.Router();
require("dotenv").config();


/**
 * 회원가입
 */
router.post('/join', (req, res) => {
  const info = {
    "profile_nickname": req.body.profile_nickname,
    "account_email": req.body.account_email,
    "gender": req.body.gender,
    "age_range": req.body.age_range,
    "birthday": req.body.birthday
  };

  var sql = 'SELECT account_email FROM Users WHERE account_email=?'
  mdbConn.dbSelect(sql, info['account_email'])
  .then((rows) => {
    if (!rows){
      var sql = 'INSERT INTO Users(profile_nickname, account_email, gender, age_range, birthday) VALUES(?,?,?,?,?)';
      var params = [info['profile_nickname'], info['account_email'], info['gender'], info['age_range'], info['birthday']];
      
      mdbConn.dbInsert(sql, params)
      .then((rows) => {
        if (!rows) res.status(500).send("false");
        else res.status(200).send("true");
      })
      .catch((errMsg) => {
        res.status(500).send(errMsg);
      });
    }
    else res.status(200).send("true");
  })
  .catch((errMsg) => {
    res.status(500).send(errMsg);
  });
});
    
  

module.exports = router;