const express = require('express');
const router = express.Router();
const {postAPIfunction, makeBodyData} = require('../../../controller/forAPI');
const {makeParsingClass} = require('../../../controller/dataParse');
require('date-utils');
var newDate = new Date();

const keyList =['No', 'pharmNm','diagType', 'diagSdate'];

/**
 * 진료 내역
 */
router.post('/init', (req, res, next) => {
    const url = 'https://api.hyphen.im/in0002000427'
    let bodyData = makeBodyData(req.body)
    console.log(bodyData)

    bodyData['subjectType'] = req.body.subjectType
    bodyData['fromDate'] = req.body.birthday
    bodyData['toDate'] = newDate.toFormat('YYYYMMDD')

    postAPIfunction(url, bodyData).then((resAPI) => {
        res.send(JSON.parse(resAPI)['data'].stepData);
    }).catch((err) => {
        console.log('diagnosis/init', err);
        res.status(500).end()
    });
});

router.post('/sign',  (req, res, next) => {
    const url = 'https://api.hyphen.im/in0002000427'

    let bodyData = makeBodyData(req.body)
    bodyData['subjectType'] = req.body.subjectType
    bodyData['fromDate'] = req.body.birthday
    bodyData['toDate'] = newDate.toFormat('YYYYMMDD')
    console.log(bodyData)

    postAPIfunction(url, bodyData).then((resAPI) => {
        let parseData = new makeParsingClass(JSON.parse(resAPI)['data']['list'])
        let sendRes = []
        for(let i = 0; i < parseData.Count; i++) {
            let resp = []
            resp.push(parseData.getDataByKeyList(['examinee'],i));
            sendRes.push({diagnosisList : resp.concat(parseData.getDataByKeyListInList('sublist', keyList, i))});
        }
        res.send({diagnosisTotalList : sendRes})
        
    }).catch((err) => {
        console.log('diagnosis/sign', err);
        res.status(500)
    });
});
module.exports = router;
