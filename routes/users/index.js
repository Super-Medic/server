var express = require('express')
const mdbConn = require('../../db_connection/mariaDBConn')
var router = express.Router();
require("dotenv").config();


/**
 * 회원가입 입력
 */
router.post('/join', (req, res) => {
  const info = {
    "name": req.body.name,
    "email": req.body.account_email,
    "phone_number": req.body.phone,
    "telecom": req.body.telecom,
    "birthday": req.body.birthday,
    "gender": req.body.gender
  };

  var sql = 'INSERT INTO Users(name, email, phone_number, telecom, birthday, gender) VALUES(?,?,?,?,?,?)';
  var params = [info['name'], info['email'], info['phone_number'], info['telecom'], info['birthday'], info['gender']];

  mdbConn.dbInsert(sql, params)
    .then((rows) => {
      if (!rows) res.status(500).send("false");
      else res.status(200).send("true");
    })
    .catch((errMsg) => {
      res.status(500).send(errMsg);
    });
});

/**
 * 회원가입 검증
 */
router.post('/joinverify', (req, res) => {
  const info = {
    "email": req.body.account_email,
  };

  var sql = 'SELECT email FROM Users WHERE email=?'
  mdbConn.dbSelect(sql, info['email'])
    .then((rows) => {
      if (!rows) {
        res.status(200).send("false");
      }
      else res.status(200).send("true");
    })
    .catch((errMsg) => {
      res.status(500).send(errMsg);
    });
});

module.exports = router;