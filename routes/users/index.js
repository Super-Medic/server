var express = require('express')
const mdbConn = require('../../db_connection/mariaDBConn')
var router = express.Router();
require("dotenv").config();


/* 회원가입시 데이터 유효성 검사, front에서도 검증 하지만 express-validator 모듈을 이용해 DB에 들어가기 전 한번 더 검사 */
router.post('/join', (req, res) => {
    console.log("여기");
    res.status(200).json({
    	"message" : "hello get api nodejs-api"
        });
  // 위에서 패스워드 검증이 끝났다면 DB에 회원 정보 등록
//   const info = {
//     "profile_nickname": req.body.profile_nickname,
//     "account_email": req.body.account_email,
//     "gender": req.body.gender,
//     "age_range": req.body.age_range,
//     "birthday ": req.body.birthday,
//   };
//   res.status(200).json({ 
//     token_type: 'Bearer', 
//     })

//   var sql = 'INSERT INTO Users(profile_nickname, account_email, gender, age_range, birthday) VALUES(?,?,?,?,?)';
//   var params = [info['profile_nickname'], info['account_email'], info['gender'], info['age_range'], info['birthday']];
  
//   mdbConn.dbInsert(sql, params)
//     .then((rows) => {
//       if (!rows) return res.send("false");
//       else res.send("true");
//     })
//     .catch((errMsg) => {
//       res.send("false");
//     });


});


module.exports = router;