const express = require('express');
const router = express.Router();
const {postAPIfunction, makeBodyData} = require('../../../../controller/forAPI');

/**
 * 영유아 건강검진 결과
 */
router.post('/', (req, res, next) => {
    let url = 'https://api.hyphen.im/in0002000436'

    let bodyData = makeBodyData(req.body)

    postAPIfunction(url, bodyData).then((resAPI) => {
        res.send(JSON.parse(resAPI))
    }).catch((err) => {
        console.log('baby/init', err);
        res.status(500).end()
    });
});

/**
 * 영유아 건강검진 결과 TEST
 * app 배포시 삭제
 */
router.post('/test', (req, res, next) => {
    const data = req.body
    if(data.loginOrgCd == null || data.name == null || data.birthday == null || data.mobileNo == null)
        return res.status(404).end();
    res.send(babyScreeningData)
});

/**
 * 영유아 건강검진 결과 TEST DATA
 * app 배포시 삭제
 */
const babyScreeningData = {
    "common": {
        "user_tr_no": "",
        "hyphen_tr_no": "10202302140000000939",
        "errYn": "N",
        "errMsg": "영유아 검진결과가 없거나 서비스 신청 부모와 영유아가 현재 건강보험증에 함께 등록되지 않아 웹 서비스 이용을 할 수 없습니다."
    },
    "data": {
        "list": []
    }
}
module.exports = router;
