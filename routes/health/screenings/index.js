const express = require('express');
const router = express.Router();
const {postAPIfunction, makeBodyData} = require('../../../controller/forAPI');
const {makeParsingClass, korToEng} = require('../../../controller/dataParse');
const baby = require('./baby');

/**
 * 영유아 건강검진
 */
router.use("/baby", baby);

const basicKey = ['year', 'result', 'chkAgency', 'opinion'];
const valueList = ['검진일자', '신장', '체중', '허리둘레', '체질량지수', '시력(좌/우)', '청각(좌/우)', 
                    '혈압(최고/최저)','요단백', '혈색소', '공복혈당', '총콜레스테롤', 'HDL콜레스테롤', '중성지방', 'LDL콜레스테롤', 
                    '혈청크레아티닌', '신사구체여과율(GFR)', 'AST (SGOT)', 'ALT(SGPT)','감마지티피(y-GTP)','폐결핵 흉부질환', '골다공증']
const keyList = ["screeningDate", "kidney", "weight", "waist", "BMI", "vision", "hearing", "bloodPressure", "proteinuria", 
                    "hemoglobin", "FBG", "cholesterol", "HDL", "triglycerides", "LDL", "serumCreatinine", "GFR", "SGOT",
                    "SGPT", "y_GTP", "tuberculosis", "osteoporosis"]
/**
 * 건강검진 결과
 */
router.post('/init', (req, res, next) => {
    let url = 'https://api.hyphen.im/in0002000432'
    let bodyData = makeBodyData(req.body)

    postAPIfunction(url, bodyData).then((resAPI) => {
        res.send(JSON.parse(resAPI)['data'].stepData);
    }).catch((err) => {
        console.log('screening/init', err);
        res.status(500).end()
    });
});
router.post('/sign', (req, res, next) => {
    let url = 'https://api.hyphen.im/in0002000432'
    let bodyData = makeBodyData(req.body)

    postAPIfunction(url, bodyData).then((resAPI) => {
        let parseData = new makeParsingClass(JSON.parse(resAPI)['data']['list']);
    let sendRes = []
        for(let i = 0; i < parseData.Count; i++){
            sendRes.push(Object.assign(
                parseData.getDataByKeyList(basicKey, i), 
                korToEng(parseData.getDataByKeyValueInList('chkResult','result', 'inspectItem' ,valueList, i),keyList))
            );
        }
        res.send({ screeningList : sendRes})

    }).catch((err) => {
        console.log('screening/sign', err);
        res.status(500).end()
    });
});


module.exports = router;
