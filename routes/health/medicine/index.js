const express = require('express');
const router = express.Router();
const {postAPIfunction, makeBodyData} = require('../../../controller/forAPI');
const {makeParsingClass, insertMedicineDetail} = require('../../../controller/dataParse');
const { parse } = require('path');

const keyList = ['No', 'pharmNm', 'medDate', 'medType']

/**
 * 투약 내역
 */
router.post('/init', (req, res, next) => {
    const url = 'https://api.hyphen.im/in0002000428'
    let bodyData = makeBodyData(req.body)
    bodyData['subjectType'] = req.body.subjectType
    bodyData['detailYn'] = 'Y'
    postAPIfunction(url, bodyData).then((resAPI) => {

        res.send(JSON.parse(resAPI)['data'].stepData);
    }).catch((err) => {
        console.log('medicine/init', err);
        res.status(500).end()
    });
});

router.post('/sign', (req, res, next) => {
    const url = 'https://api.hyphen.im/in0002000428'
    let bodyData = makeBodyData(req.body) 
    bodyData['subjectType'] = req.body.subjectType
    bodyData['detailYn'] = 'Y'
    postAPIfunction(url, bodyData).then((resAPI) => {

        let parseData = new makeParsingClass(JSON.parse(resAPI)['data']['list']);
        let data = parseData.getDataByKeyListInListInList('sublist','medList',keyList)
        for(let i = 0; i < data.length; i++) {
            for(let j = 0; j < data[i]['medList'].length; j++) { // 의약품 상세 정보 제거 및 불필요 정보 delete
                insertMedicineDetail(data[i]['medList'][j]['detailObj'])
                delete data[i]['medList'][j].No;
                delete data[i]['medList'][j].diagDate;
                delete data[i]['medList'][j].diagType;
                delete data[i]['medList'][j].presCnt;
                delete data[i]['medList'][j].detailObj;
            }
        }
        res.send({medicineList : data});

    }).catch((err) => {
        console.log('medicine/sign', err);
        res.status(500).end()
    });
});

module.exports = router;
