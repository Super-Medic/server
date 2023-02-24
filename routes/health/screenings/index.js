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

/**
 * 건강검진 결과
 */
router.post('/init', (req, res, next) => {
    let url = 'https://api.hyphen.im/in0002000432'
    let bodyData = makeBodyData(req.body)

    postAPIfunction(url, bodyData).then((resAPI) => {
        res.send(JSON.parse(resAPI)['data'].stepData);
    }).catch((err) => {
        console.log('error = ' + err);
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
        console.log('error = ' + err);
        res.status(500).end()
    });
});


router.post('/testinit', (req, res, next) => {
    const data = req.body
    if(data.loginOrgCd == null || data.name == null || data.birthday == null || data.mobileNo == null || data.step != 'init')
        return res.status(404).end();

    res.send('1234')
});
/**
 * 건강검진 결과 TEST
 * app 배포시 삭제
 */
router.post('/test', (req, res, next) => {
    const data = req.body
    if(data.loginOrgCd == null || data.name == null || data.birthday == null || data.mobileNo == null || data.step != 'sign' || data.step_data != '1234')
        return res.status(404).end();

    let parseData = new makeParsingClass(screeningsTestData['data']['list']);
    let sendRes = [];
    for(let i = 0; i < parseData.Count; i++){
        sendRes.push(Object.assign(
            parseData.getDataByKeyList(basicKey, i), 
            korToEng(parseData.getDataByKeyValueInList('chkResult','result', 'inspectItem' ,valueList, i),keyList))
        );
    }
    res.send({ screeningList : sendRes})
});
const keyList = [
    "screeningDate",
    "kidney",
    "weight",
    "waist",
    "BMI",
    "vision",
    "hearing",
    "bloodPressure",
    "proteinuria",
    "hemoglobin",
    "FBG",
    "cholesterol",
    "HDL",
    "triglycerides",
    "LDL",
    "serumCreatinine",
    "GFR",
    "SGOT",
    "SGPT",
    "y_GTP",
    "tuberculosis",
    "osteoporosis",]

/**
 * 건강검진 결과 TEST DATA
 * app 배포시 삭제
 */
const screeningsTestData = {
    "common": {
        "userTrNo": "",
        "hyphenTrNo": "10202302150000000159",
        "errYn": "N",
        "errMsg": ""
    },
    "data": {
        "list": [
            {
                "year": "2017",
                "result": "의심",
                "chkAgency": "제주대학교병원",
                "opinion": "저열량식이 및 꾸준한 유산소운동 권장. 정기적 혈압측정 권장. / (흉부방사선검사-비활동성): 과거결핵흔적- 과거의 흔적으로 현재로서는 의미없음. 정기검진권장.",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "08/24",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "신장",
                        "div": "",
                        "result": "160.6",
                        "unit": "Cm",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체중",
                        "div": "",
                        "result": "79.9",
                        "unit": "Kg",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "허리둘레",
                        "div": "",
                        "result": "90.0",
                        "unit": "Cm",
                        "normalA": "남 90미만 / 여 85미만",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체질량지수",
                        "div": "",
                        "result": "31.0",
                        "unit": "kg/m2",
                        "normalA": "18.5-24.9",
                        "normalB": "18.5미만/25~29.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "시각이상",
                        "inspectItem": "시력(좌/우)",
                        "div": "",
                        "result": "1.2/1.2",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "청각이상",
                        "inspectItem": "청각(좌/우)",
                        "div": "",
                        "result": "정상/정상",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "고혈압",
                        "inspectItem": "혈압(최고/최저)",
                        "div": "이상",
                        "result": "130/74",
                        "unit": "mmHg",
                        "normalA": "120미만 이며/80미만",
                        "normalB": "120-139 또는 /80-89",
                        "suspicionDis": ""
                    },
                    {
                        "type": "요검사",
                        "targetDis": "신장질환",
                        "inspectItem": "요단백",
                        "div": "",
                        "result": "음성",
                        "unit": "",
                        "normalA": "음성",
                        "normalB": "약양성±",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "빈혈",
                        "inspectItem": "혈색소",
                        "div": "",
                        "result": "15.0",
                        "unit": "g/dL",
                        "normalA": "남: 13-16.5 / 여: 12-15.5",
                        "normalB": "남: 12-12.9 / 여: 10-11.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "당뇨병",
                        "inspectItem": "공복혈당",
                        "div": "",
                        "result": "67",
                        "unit": "mg/dL",
                        "normalA": "100미만",
                        "normalB": "100-125",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "총콜레스테롤",
                        "div": "",
                        "result": "183",
                        "unit": "mg/dL",
                        "normalA": "200미만",
                        "normalB": "200-239",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "HDL콜레스테롤",
                        "div": "이상",
                        "result": "35",
                        "unit": "mg/dL",
                        "normalA": "60이상",
                        "normalB": "40-59",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "중성지방",
                        "div": "",
                        "result": "80",
                        "unit": "mg/dL",
                        "normalA": "150미만",
                        "normalB": "150-199",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "LDL콜레스테롤",
                        "div": "이상",
                        "result": "132",
                        "unit": "mg/dL",
                        "normalA": "130미만",
                        "normalB": "130-139",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "혈청크레아티닌",
                        "div": "",
                        "result": "1.1",
                        "unit": "mg/dL",
                        "normalA": "1.6이하",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "신사구체여과율(GFR)",
                        "div": "",
                        "result": "74",
                        "unit": "mL/min",
                        "normalA": "60이상",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "AST (SGOT)",
                        "div": "",
                        "result": "35",
                        "unit": "U/L",
                        "normalA": "40이하",
                        "normalB": "41-50",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "ALT(SGPT)",
                        "div": "",
                        "result": "28",
                        "unit": "U/L",
                        "normalA": "35이하",
                        "normalB": "36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "감마지티피(y-GTP)",
                        "div": "이상",
                        "result": "98",
                        "unit": "U/L",
                        "normalA": "남:11-63 / 여:8-35",
                        "normalB": "남:64-77 / 여:36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "영상검사",
                        "targetDis": "폐결핵 흉부질환",
                        "inspectItem": "폐결핵 흉부질환",
                        "div": "",
                        "result": "비활동성",
                        "unit": "",
                        "normalA": "정상, 비활동성",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "골다공증",
                        "targetDis": "골다공증",
                        "inspectItem": "골다공증",
                        "div": "",
                        "result": "",
                        "unit": "",
                        "normalA": "T-score -1 이상",
                        "normalB": "-1~-2.5 초과",
                        "suspicionDis": ""
                    }
                ]
            },
            {
                "year": "2018",
                "result": "의심",
                "chkAgency": "상쾌한속내과의원",
                "opinion": "",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "06/12",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "신장",
                        "div": "",
                        "result": "160.6",
                        "unit": "Cm",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체중",
                        "div": "",
                        "result": "80.7",
                        "unit": "Kg",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "허리둘레",
                        "div": "",
                        "result": "90.0",
                        "unit": "Cm",
                        "normalA": "남 90미만 / 여 85미만",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체질량지수",
                        "div": "",
                        "result": "31.3",
                        "unit": "kg/m2",
                        "normalA": "18.5-24.9",
                        "normalB": "18.5미만/25~29.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "시각이상",
                        "inspectItem": "시력(좌/우)",
                        "div": "",
                        "result": "1.2/1.0",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "청각이상",
                        "inspectItem": "청각(좌/우)",
                        "div": "",
                        "result": "정상/정상",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "고혈압",
                        "inspectItem": "혈압(최고/최저)",
                        "div": "이상",
                        "result": "120/80",
                        "unit": "mmHg",
                        "normalA": "120미만 이며/80미만",
                        "normalB": "120-139 또는 /80-89",
                        "suspicionDis": ""
                    },
                    {
                        "type": "요검사",
                        "targetDis": "신장질환",
                        "inspectItem": "요단백",
                        "div": "",
                        "result": "음성",
                        "unit": "",
                        "normalA": "음성",
                        "normalB": "약양성±",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "빈혈",
                        "inspectItem": "혈색소",
                        "div": "",
                        "result": "15.2",
                        "unit": "g/dL",
                        "normalA": "남: 13-16.5 / 여: 12-15.5",
                        "normalB": "남: 12-12.9 / 여: 10-11.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "당뇨병",
                        "inspectItem": "공복혈당",
                        "div": "",
                        "result": "88",
                        "unit": "mg/dL",
                        "normalA": "100미만",
                        "normalB": "100-125",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "총콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "200미만",
                        "normalB": "200-239",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "HDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "60이상",
                        "normalB": "40-59",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "중성지방",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "150미만",
                        "normalB": "150-199",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "LDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "130미만",
                        "normalB": "130-139",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "혈청크레아티닌",
                        "div": "",
                        "result": "1.0",
                        "unit": "mg/dL",
                        "normalA": "1.6이하",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "신사구체여과율(GFR)",
                        "div": "",
                        "result": "83",
                        "unit": "mL/min",
                        "normalA": "60이상",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "AST (SGOT)",
                        "div": "",
                        "result": "19",
                        "unit": "U/L",
                        "normalA": "40이하",
                        "normalB": "41-50",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "ALT(SGPT)",
                        "div": "",
                        "result": "29",
                        "unit": "U/L",
                        "normalA": "35이하",
                        "normalB": "36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "감마지티피(y-GTP)",
                        "div": "",
                        "result": "49",
                        "unit": "U/L",
                        "normalA": "남:11-63 / 여:8-35",
                        "normalB": "남:64-77 / 여:36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "영상검사",
                        "targetDis": "폐결핵 흉부질환",
                        "inspectItem": "폐결핵 흉부질환",
                        "div": "",
                        "result": "정상",
                        "unit": "",
                        "normalA": "정상, 비활동성",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "골다공증",
                        "targetDis": "골다공증",
                        "inspectItem": "골다공증",
                        "div": "",
                        "result": "",
                        "unit": "",
                        "normalA": "T-score -1 이상",
                        "normalB": "-1~-2.5 초과",
                        "suspicionDis": ""
                    }
                ]
            },
            {
                "year": "2019",
                "result": "의심",
                "chkAgency": "한국건강관리협회건강증진의원",
                "opinion": "",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "05/13",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "신장",
                        "div": "",
                        "result": "159.8",
                        "unit": "Cm",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체중",
                        "div": "",
                        "result": "76.1",
                        "unit": "Kg",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "허리둘레",
                        "div": "",
                        "result": "95.0",
                        "unit": "Cm",
                        "normalA": "남 90미만 / 여 85미만",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체질량지수",
                        "div": "",
                        "result": "29.8",
                        "unit": "kg/m2",
                        "normalA": "18.5-24.9",
                        "normalB": "18.5미만/25~29.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "시각이상",
                        "inspectItem": "시력(좌/우)",
                        "div": "",
                        "result": "1.0/1.0",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "청각이상",
                        "inspectItem": "청각(좌/우)",
                        "div": "",
                        "result": "정상/정상",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "고혈압",
                        "inspectItem": "혈압(최고/최저)",
                        "div": "이상",
                        "result": "128/80",
                        "unit": "mmHg",
                        "normalA": "120미만 이며/80미만",
                        "normalB": "120-139 또는 /80-89",
                        "suspicionDis": ""
                    },
                    {
                        "type": "요검사",
                        "targetDis": "신장질환",
                        "inspectItem": "요단백",
                        "div": "",
                        "result": "음성",
                        "unit": "",
                        "normalA": "음성",
                        "normalB": "약양성±",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "빈혈",
                        "inspectItem": "혈색소",
                        "div": "",
                        "result": "14.7",
                        "unit": "g/dL",
                        "normalA": "남: 13-16.5 / 여: 12-15.5",
                        "normalB": "남: 12-12.9 / 여: 10-11.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "당뇨병",
                        "inspectItem": "공복혈당",
                        "div": "",
                        "result": "79",
                        "unit": "mg/dL",
                        "normalA": "100미만",
                        "normalB": "100-125",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "총콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "200미만",
                        "normalB": "200-239",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "HDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "60이상",
                        "normalB": "40-59",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "중성지방",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "150미만",
                        "normalB": "150-199",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "LDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "130미만",
                        "normalB": "130-139",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "혈청크레아티닌",
                        "div": "",
                        "result": "1.0",
                        "unit": "mg/dL",
                        "normalA": "1.6이하",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "신사구체여과율(GFR)",
                        "div": "",
                        "result": "83",
                        "unit": "mL/min",
                        "normalA": "60이상",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "AST (SGOT)",
                        "div": "",
                        "result": "34",
                        "unit": "U/L",
                        "normalA": "40이하",
                        "normalB": "41-50",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "ALT(SGPT)",
                        "div": "",
                        "result": "29",
                        "unit": "U/L",
                        "normalA": "35이하",
                        "normalB": "36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "감마지티피(y-GTP)",
                        "div": "",
                        "result": "37",
                        "unit": "U/L",
                        "normalA": "남:11-63 / 여:8-35",
                        "normalB": "남:64-77 / 여:36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "영상검사",
                        "targetDis": "폐결핵 흉부질환",
                        "inspectItem": "폐결핵 흉부질환",
                        "div": "이상",
                        "result": "13",
                        "unit": "",
                        "normalA": "정상, 비활동성",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "골다공증",
                        "targetDis": "골다공증",
                        "inspectItem": "골다공증",
                        "div": "",
                        "result": "",
                        "unit": "",
                        "normalA": "T-score -1 이상",
                        "normalB": "-1~-2.5 초과",
                        "suspicionDis": ""
                    }
                ]
            },
            {
                "year": "2021",
                "result": "의심",
                "chkAgency": "고순희내과의원",
                "opinion": "",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "07/28",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "신장",
                        "div": "",
                        "result": "160.1",
                        "unit": "Cm",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체중",
                        "div": "",
                        "result": "80.9",
                        "unit": "Kg",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "허리둘레",
                        "div": "",
                        "result": "96.0",
                        "unit": "Cm",
                        "normalA": "남 90미만 / 여 85미만",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체질량지수",
                        "div": "",
                        "result": "31.6",
                        "unit": "kg/m2",
                        "normalA": "18.5-24.9",
                        "normalB": "18.5미만/25~29.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "시각이상",
                        "inspectItem": "시력(좌/우)",
                        "div": "",
                        "result": "1.2/1.2",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "청각이상",
                        "inspectItem": "청각(좌/우)",
                        "div": "",
                        "result": "정상/정상",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "고혈압",
                        "inspectItem": "혈압(최고/최저)",
                        "div": "이상",
                        "result": "136/87",
                        "unit": "mmHg",
                        "normalA": "120미만 이며/80미만",
                        "normalB": "120-139 또는 /80-89",
                        "suspicionDis": ""
                    },
                    {
                        "type": "요검사",
                        "targetDis": "신장질환",
                        "inspectItem": "요단백",
                        "div": "",
                        "result": "음성",
                        "unit": "",
                        "normalA": "음성",
                        "normalB": "약양성±",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "빈혈",
                        "inspectItem": "혈색소",
                        "div": "",
                        "result": "14.4",
                        "unit": "g/dL",
                        "normalA": "남: 13-16.5 / 여: 12-15.5",
                        "normalB": "남: 12-12.9 / 여: 10-11.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "당뇨병",
                        "inspectItem": "공복혈당",
                        "div": "",
                        "result": "96",
                        "unit": "mg/dL",
                        "normalA": "100미만",
                        "normalB": "100-125",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "총콜레스테롤",
                        "div": "이상",
                        "result": "248",
                        "unit": "mg/dL",
                        "normalA": "200미만",
                        "normalB": "200-239",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "HDL콜레스테롤",
                        "div": "이상",
                        "result": "32",
                        "unit": "mg/dL",
                        "normalA": "60이상",
                        "normalB": "40-59",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "중성지방",
                        "div": "이상",
                        "result": "157",
                        "unit": "mg/dL",
                        "normalA": "150미만",
                        "normalB": "150-199",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "LDL콜레스테롤",
                        "div": "이상",
                        "result": "184",
                        "unit": "mg/dL",
                        "normalA": "130미만",
                        "normalB": "130-139",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "혈청크레아티닌",
                        "div": "",
                        "result": "1.0",
                        "unit": "mg/dL",
                        "normalA": "1.6이하",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "신사구체여과율(GFR)",
                        "div": "",
                        "result": "77",
                        "unit": "mL/min",
                        "normalA": "60이상",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "AST (SGOT)",
                        "div": "",
                        "result": "27",
                        "unit": "U/L",
                        "normalA": "40이하",
                        "normalB": "41-50",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "ALT(SGPT)",
                        "div": "이상",
                        "result": "39",
                        "unit": "U/L",
                        "normalA": "35이하",
                        "normalB": "36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "감마지티피(y-GTP)",
                        "div": "이상",
                        "result": "77",
                        "unit": "U/L",
                        "normalA": "남:11-63 / 여:8-35",
                        "normalB": "남:64-77 / 여:36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "영상검사",
                        "targetDis": "폐결핵 흉부질환",
                        "inspectItem": "폐결핵 흉부질환",
                        "div": "이상",
                        "result": "13",
                        "unit": "",
                        "normalA": "정상, 비활동성",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "골다공증",
                        "targetDis": "골다공증",
                        "inspectItem": "골다공증",
                        "div": "",
                        "result": "",
                        "unit": "",
                        "normalA": "T-score -1 이상",
                        "normalB": "-1~-2.5 초과",
                        "suspicionDis": ""
                    }
                ]
            },
            {
                "year": "2022",
                "result": "의심",
                "chkAgency": "한국건강관리협회건강증진의원",
                "opinion": "",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "07/09",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "신장",
                        "div": "",
                        "result": "160.1",
                        "unit": "Cm",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체중",
                        "div": "",
                        "result": "82.9",
                        "unit": "Kg",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "허리둘레",
                        "div": "",
                        "result": "99.5",
                        "unit": "Cm",
                        "normalA": "남 90미만 / 여 85미만",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체질량지수",
                        "div": "",
                        "result": "32.3",
                        "unit": "kg/m2",
                        "normalA": "18.5-24.9",
                        "normalB": "18.5미만/25~29.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "시각이상",
                        "inspectItem": "시력(좌/우)",
                        "div": "",
                        "result": "1.0/1.0",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "청각이상",
                        "inspectItem": "청각(좌/우)",
                        "div": "",
                        "result": "정상/정상",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "고혈압",
                        "inspectItem": "혈압(최고/최저)",
                        "div": "이상",
                        "result": "136/82",
                        "unit": "mmHg",
                        "normalA": "120미만 이며/80미만",
                        "normalB": "120-139 또는 /80-89",
                        "suspicionDis": ""
                    },
                    {
                        "type": "요검사",
                        "targetDis": "신장질환",
                        "inspectItem": "요단백",
                        "div": "",
                        "result": "음성",
                        "unit": "",
                        "normalA": "음성",
                        "normalB": "약양성±",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "빈혈",
                        "inspectItem": "혈색소",
                        "div": "",
                        "result": "14.6",
                        "unit": "g/dL",
                        "normalA": "남: 13-16.5 / 여: 12-15.5",
                        "normalB": "남: 12-12.9 / 여: 10-11.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "당뇨병",
                        "inspectItem": "공복혈당",
                        "div": "",
                        "result": "90",
                        "unit": "mg/dL",
                        "normalA": "100미만",
                        "normalB": "100-125",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "총콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "200미만",
                        "normalB": "200-239",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "HDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "60이상",
                        "normalB": "40-59",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "중성지방",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "150미만",
                        "normalB": "150-199",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "LDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "130미만",
                        "normalB": "130-139",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "혈청크레아티닌",
                        "div": "",
                        "result": "1.1",
                        "unit": "mg/dL",
                        "normalA": "1.6이하",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "신사구체여과율(GFR)",
                        "div": "",
                        "result": "73",
                        "unit": "mL/min",
                        "normalA": "60이상",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "AST (SGOT)",
                        "div": "",
                        "result": "28",
                        "unit": "U/L",
                        "normalA": "40이하",
                        "normalB": "41-50",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "ALT(SGPT)",
                        "div": "이상",
                        "result": "38",
                        "unit": "U/L",
                        "normalA": "35이하",
                        "normalB": "36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "감마지티피(y-GTP)",
                        "div": "",
                        "result": "51",
                        "unit": "U/L",
                        "normalA": "남:11-63 / 여:8-35",
                        "normalB": "남:64-77 / 여:36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "영상검사",
                        "targetDis": "폐결핵 흉부질환",
                        "inspectItem": "폐결핵 흉부질환",
                        "div": "",
                        "result": "정상",
                        "unit": "",
                        "normalA": "정상, 비활동성",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "골다공증",
                        "targetDis": "골다공증",
                        "inspectItem": "골다공증",
                        "div": "",
                        "result": "",
                        "unit": "",
                        "normalA": "T-score -1 이상",
                        "normalB": "-1~-2.5 초과",
                        "suspicionDis": ""
                    }
                ]
            }
        ]
    },
    "errYn": "N",
    "errMsg": "",
    "outC0006": {
        "list": [
            {
                "year": "2017",
                "result": "의심",
                "chkAgency": "제주대학교병원",
                "opinion": "저열량식이 및 꾸준한 유산소운동 권장. 정기적 혈압측정 권장. / (흉부방사선검사-비활동성): 과거결핵흔적- 과거의 흔적으로 현재로서는 의미없음. 정기검진권장.",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "08/24",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "신장",
                        "div": "",
                        "result": "160.6",
                        "unit": "Cm",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체중",
                        "div": "",
                        "result": "79.9",
                        "unit": "Kg",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "허리둘레",
                        "div": "",
                        "result": "90.0",
                        "unit": "Cm",
                        "normalA": "남 90미만 / 여 85미만",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체질량지수",
                        "div": "",
                        "result": "31.0",
                        "unit": "kg/m2",
                        "normalA": "18.5-24.9",
                        "normalB": "18.5미만/25~29.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "시각이상",
                        "inspectItem": "시력(좌/우)",
                        "div": "",
                        "result": "1.2/1.2",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "청각이상",
                        "inspectItem": "청각(좌/우)",
                        "div": "",
                        "result": "정상/정상",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "고혈압",
                        "inspectItem": "혈압(최고/최저)",
                        "div": "이상",
                        "result": "130/74",
                        "unit": "mmHg",
                        "normalA": "120미만 이며/80미만",
                        "normalB": "120-139 또는 /80-89",
                        "suspicionDis": ""
                    },
                    {
                        "type": "요검사",
                        "targetDis": "신장질환",
                        "inspectItem": "요단백",
                        "div": "",
                        "result": "음성",
                        "unit": "",
                        "normalA": "음성",
                        "normalB": "약양성±",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "빈혈",
                        "inspectItem": "혈색소",
                        "div": "",
                        "result": "15.0",
                        "unit": "g/dL",
                        "normalA": "남: 13-16.5 / 여: 12-15.5",
                        "normalB": "남: 12-12.9 / 여: 10-11.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "당뇨병",
                        "inspectItem": "공복혈당",
                        "div": "",
                        "result": "67",
                        "unit": "mg/dL",
                        "normalA": "100미만",
                        "normalB": "100-125",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "총콜레스테롤",
                        "div": "",
                        "result": "183",
                        "unit": "mg/dL",
                        "normalA": "200미만",
                        "normalB": "200-239",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "HDL콜레스테롤",
                        "div": "이상",
                        "result": "35",
                        "unit": "mg/dL",
                        "normalA": "60이상",
                        "normalB": "40-59",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "중성지방",
                        "div": "",
                        "result": "80",
                        "unit": "mg/dL",
                        "normalA": "150미만",
                        "normalB": "150-199",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "LDL콜레스테롤",
                        "div": "이상",
                        "result": "132",
                        "unit": "mg/dL",
                        "normalA": "130미만",
                        "normalB": "130-139",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "혈청크레아티닌",
                        "div": "",
                        "result": "1.1",
                        "unit": "mg/dL",
                        "normalA": "1.6이하",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "신사구체여과율(GFR)",
                        "div": "",
                        "result": "74",
                        "unit": "mL/min",
                        "normalA": "60이상",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "AST (SGOT)",
                        "div": "",
                        "result": "35",
                        "unit": "U/L",
                        "normalA": "40이하",
                        "normalB": "41-50",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "ALT(SGPT)",
                        "div": "",
                        "result": "28",
                        "unit": "U/L",
                        "normalA": "35이하",
                        "normalB": "36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "감마지티피(y-GTP)",
                        "div": "이상",
                        "result": "98",
                        "unit": "U/L",
                        "normalA": "남:11-63 / 여:8-35",
                        "normalB": "남:64-77 / 여:36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "영상검사",
                        "targetDis": "폐결핵 흉부질환",
                        "inspectItem": "폐결핵 흉부질환",
                        "div": "",
                        "result": "비활동성",
                        "unit": "",
                        "normalA": "정상, 비활동성",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "골다공증",
                        "targetDis": "골다공증",
                        "inspectItem": "골다공증",
                        "div": "",
                        "result": "",
                        "unit": "",
                        "normalA": "T-score -1 이상",
                        "normalB": "-1~-2.5 초과",
                        "suspicionDis": ""
                    }
                ]
            },
            {
                "year": "2018",
                "result": "의심",
                "chkAgency": "상쾌한속내과의원",
                "opinion": "",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "06/12",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "신장",
                        "div": "",
                        "result": "160.6",
                        "unit": "Cm",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체중",
                        "div": "",
                        "result": "80.7",
                        "unit": "Kg",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "허리둘레",
                        "div": "",
                        "result": "90.0",
                        "unit": "Cm",
                        "normalA": "남 90미만 / 여 85미만",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체질량지수",
                        "div": "",
                        "result": "31.3",
                        "unit": "kg/m2",
                        "normalA": "18.5-24.9",
                        "normalB": "18.5미만/25~29.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "시각이상",
                        "inspectItem": "시력(좌/우)",
                        "div": "",
                        "result": "1.2/1.0",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "청각이상",
                        "inspectItem": "청각(좌/우)",
                        "div": "",
                        "result": "정상/정상",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "고혈압",
                        "inspectItem": "혈압(최고/최저)",
                        "div": "이상",
                        "result": "120/80",
                        "unit": "mmHg",
                        "normalA": "120미만 이며/80미만",
                        "normalB": "120-139 또는 /80-89",
                        "suspicionDis": ""
                    },
                    {
                        "type": "요검사",
                        "targetDis": "신장질환",
                        "inspectItem": "요단백",
                        "div": "",
                        "result": "음성",
                        "unit": "",
                        "normalA": "음성",
                        "normalB": "약양성±",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "빈혈",
                        "inspectItem": "혈색소",
                        "div": "",
                        "result": "15.2",
                        "unit": "g/dL",
                        "normalA": "남: 13-16.5 / 여: 12-15.5",
                        "normalB": "남: 12-12.9 / 여: 10-11.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "당뇨병",
                        "inspectItem": "공복혈당",
                        "div": "",
                        "result": "88",
                        "unit": "mg/dL",
                        "normalA": "100미만",
                        "normalB": "100-125",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "총콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "200미만",
                        "normalB": "200-239",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "HDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "60이상",
                        "normalB": "40-59",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "중성지방",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "150미만",
                        "normalB": "150-199",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "LDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "130미만",
                        "normalB": "130-139",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "혈청크레아티닌",
                        "div": "",
                        "result": "1.0",
                        "unit": "mg/dL",
                        "normalA": "1.6이하",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "신사구체여과율(GFR)",
                        "div": "",
                        "result": "83",
                        "unit": "mL/min",
                        "normalA": "60이상",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "AST (SGOT)",
                        "div": "",
                        "result": "19",
                        "unit": "U/L",
                        "normalA": "40이하",
                        "normalB": "41-50",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "ALT(SGPT)",
                        "div": "",
                        "result": "29",
                        "unit": "U/L",
                        "normalA": "35이하",
                        "normalB": "36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "감마지티피(y-GTP)",
                        "div": "",
                        "result": "49",
                        "unit": "U/L",
                        "normalA": "남:11-63 / 여:8-35",
                        "normalB": "남:64-77 / 여:36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "영상검사",
                        "targetDis": "폐결핵 흉부질환",
                        "inspectItem": "폐결핵 흉부질환",
                        "div": "",
                        "result": "정상",
                        "unit": "",
                        "normalA": "정상, 비활동성",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "골다공증",
                        "targetDis": "골다공증",
                        "inspectItem": "골다공증",
                        "div": "",
                        "result": "",
                        "unit": "",
                        "normalA": "T-score -1 이상",
                        "normalB": "-1~-2.5 초과",
                        "suspicionDis": ""
                    }
                ]
            },
            {
                "year": "2019",
                "result": "의심",
                "chkAgency": "한국건강관리협회건강증진의원",
                "opinion": "",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "05/13",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "신장",
                        "div": "",
                        "result": "159.8",
                        "unit": "Cm",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체중",
                        "div": "",
                        "result": "76.1",
                        "unit": "Kg",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "허리둘레",
                        "div": "",
                        "result": "95.0",
                        "unit": "Cm",
                        "normalA": "남 90미만 / 여 85미만",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체질량지수",
                        "div": "",
                        "result": "29.8",
                        "unit": "kg/m2",
                        "normalA": "18.5-24.9",
                        "normalB": "18.5미만/25~29.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "시각이상",
                        "inspectItem": "시력(좌/우)",
                        "div": "",
                        "result": "1.0/1.0",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "청각이상",
                        "inspectItem": "청각(좌/우)",
                        "div": "",
                        "result": "정상/정상",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "고혈압",
                        "inspectItem": "혈압(최고/최저)",
                        "div": "이상",
                        "result": "128/80",
                        "unit": "mmHg",
                        "normalA": "120미만 이며/80미만",
                        "normalB": "120-139 또는 /80-89",
                        "suspicionDis": ""
                    },
                    {
                        "type": "요검사",
                        "targetDis": "신장질환",
                        "inspectItem": "요단백",
                        "div": "",
                        "result": "음성",
                        "unit": "",
                        "normalA": "음성",
                        "normalB": "약양성±",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "빈혈",
                        "inspectItem": "혈색소",
                        "div": "",
                        "result": "14.7",
                        "unit": "g/dL",
                        "normalA": "남: 13-16.5 / 여: 12-15.5",
                        "normalB": "남: 12-12.9 / 여: 10-11.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "당뇨병",
                        "inspectItem": "공복혈당",
                        "div": "",
                        "result": "79",
                        "unit": "mg/dL",
                        "normalA": "100미만",
                        "normalB": "100-125",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "총콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "200미만",
                        "normalB": "200-239",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "HDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "60이상",
                        "normalB": "40-59",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "중성지방",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "150미만",
                        "normalB": "150-199",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "LDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "130미만",
                        "normalB": "130-139",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "혈청크레아티닌",
                        "div": "",
                        "result": "1.0",
                        "unit": "mg/dL",
                        "normalA": "1.6이하",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "신사구체여과율(GFR)",
                        "div": "",
                        "result": "83",
                        "unit": "mL/min",
                        "normalA": "60이상",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "AST (SGOT)",
                        "div": "",
                        "result": "34",
                        "unit": "U/L",
                        "normalA": "40이하",
                        "normalB": "41-50",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "ALT(SGPT)",
                        "div": "",
                        "result": "29",
                        "unit": "U/L",
                        "normalA": "35이하",
                        "normalB": "36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "감마지티피(y-GTP)",
                        "div": "",
                        "result": "37",
                        "unit": "U/L",
                        "normalA": "남:11-63 / 여:8-35",
                        "normalB": "남:64-77 / 여:36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "영상검사",
                        "targetDis": "폐결핵 흉부질환",
                        "inspectItem": "폐결핵 흉부질환",
                        "div": "이상",
                        "result": "13",
                        "unit": "",
                        "normalA": "정상, 비활동성",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "골다공증",
                        "targetDis": "골다공증",
                        "inspectItem": "골다공증",
                        "div": "",
                        "result": "",
                        "unit": "",
                        "normalA": "T-score -1 이상",
                        "normalB": "-1~-2.5 초과",
                        "suspicionDis": ""
                    }
                ]
            },
            {
                "year": "2021",
                "result": "의심",
                "chkAgency": "고순희내과의원",
                "opinion": "",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "07/28",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "신장",
                        "div": "",
                        "result": "160.1",
                        "unit": "Cm",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체중",
                        "div": "",
                        "result": "80.9",
                        "unit": "Kg",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "허리둘레",
                        "div": "",
                        "result": "96.0",
                        "unit": "Cm",
                        "normalA": "남 90미만 / 여 85미만",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체질량지수",
                        "div": "",
                        "result": "31.6",
                        "unit": "kg/m2",
                        "normalA": "18.5-24.9",
                        "normalB": "18.5미만/25~29.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "시각이상",
                        "inspectItem": "시력(좌/우)",
                        "div": "",
                        "result": "1.2/1.2",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "청각이상",
                        "inspectItem": "청각(좌/우)",
                        "div": "",
                        "result": "정상/정상",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "고혈압",
                        "inspectItem": "혈압(최고/최저)",
                        "div": "이상",
                        "result": "136/87",
                        "unit": "mmHg",
                        "normalA": "120미만 이며/80미만",
                        "normalB": "120-139 또는 /80-89",
                        "suspicionDis": ""
                    },
                    {
                        "type": "요검사",
                        "targetDis": "신장질환",
                        "inspectItem": "요단백",
                        "div": "",
                        "result": "음성",
                        "unit": "",
                        "normalA": "음성",
                        "normalB": "약양성±",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "빈혈",
                        "inspectItem": "혈색소",
                        "div": "",
                        "result": "14.4",
                        "unit": "g/dL",
                        "normalA": "남: 13-16.5 / 여: 12-15.5",
                        "normalB": "남: 12-12.9 / 여: 10-11.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "당뇨병",
                        "inspectItem": "공복혈당",
                        "div": "",
                        "result": "96",
                        "unit": "mg/dL",
                        "normalA": "100미만",
                        "normalB": "100-125",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "총콜레스테롤",
                        "div": "이상",
                        "result": "248",
                        "unit": "mg/dL",
                        "normalA": "200미만",
                        "normalB": "200-239",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "HDL콜레스테롤",
                        "div": "이상",
                        "result": "32",
                        "unit": "mg/dL",
                        "normalA": "60이상",
                        "normalB": "40-59",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "중성지방",
                        "div": "이상",
                        "result": "157",
                        "unit": "mg/dL",
                        "normalA": "150미만",
                        "normalB": "150-199",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "LDL콜레스테롤",
                        "div": "이상",
                        "result": "184",
                        "unit": "mg/dL",
                        "normalA": "130미만",
                        "normalB": "130-139",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "혈청크레아티닌",
                        "div": "",
                        "result": "1.0",
                        "unit": "mg/dL",
                        "normalA": "1.6이하",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "신사구체여과율(GFR)",
                        "div": "",
                        "result": "77",
                        "unit": "mL/min",
                        "normalA": "60이상",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "AST (SGOT)",
                        "div": "",
                        "result": "27",
                        "unit": "U/L",
                        "normalA": "40이하",
                        "normalB": "41-50",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "ALT(SGPT)",
                        "div": "이상",
                        "result": "39",
                        "unit": "U/L",
                        "normalA": "35이하",
                        "normalB": "36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "감마지티피(y-GTP)",
                        "div": "이상",
                        "result": "77",
                        "unit": "U/L",
                        "normalA": "남:11-63 / 여:8-35",
                        "normalB": "남:64-77 / 여:36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "영상검사",
                        "targetDis": "폐결핵 흉부질환",
                        "inspectItem": "폐결핵 흉부질환",
                        "div": "이상",
                        "result": "13",
                        "unit": "",
                        "normalA": "정상, 비활동성",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "골다공증",
                        "targetDis": "골다공증",
                        "inspectItem": "골다공증",
                        "div": "",
                        "result": "",
                        "unit": "",
                        "normalA": "T-score -1 이상",
                        "normalB": "-1~-2.5 초과",
                        "suspicionDis": ""
                    }
                ]
            },
            {
                "year": "2022",
                "result": "의심",
                "chkAgency": "한국건강관리협회건강증진의원",
                "opinion": "",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "07/09",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "신장",
                        "div": "",
                        "result": "160.1",
                        "unit": "Cm",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체중",
                        "div": "",
                        "result": "82.9",
                        "unit": "Kg",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "허리둘레",
                        "div": "",
                        "result": "99.5",
                        "unit": "Cm",
                        "normalA": "남 90미만 / 여 85미만",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "비만",
                        "inspectItem": "체질량지수",
                        "div": "",
                        "result": "32.3",
                        "unit": "kg/m2",
                        "normalA": "18.5-24.9",
                        "normalB": "18.5미만/25~29.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "시각이상",
                        "inspectItem": "시력(좌/우)",
                        "div": "",
                        "result": "1.0/1.0",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "청각이상",
                        "inspectItem": "청각(좌/우)",
                        "div": "",
                        "result": "정상/정상",
                        "unit": "",
                        "normalA": "",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "계측검사",
                        "targetDis": "고혈압",
                        "inspectItem": "혈압(최고/최저)",
                        "div": "이상",
                        "result": "136/82",
                        "unit": "mmHg",
                        "normalA": "120미만 이며/80미만",
                        "normalB": "120-139 또는 /80-89",
                        "suspicionDis": ""
                    },
                    {
                        "type": "요검사",
                        "targetDis": "신장질환",
                        "inspectItem": "요단백",
                        "div": "",
                        "result": "음성",
                        "unit": "",
                        "normalA": "음성",
                        "normalB": "약양성±",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "빈혈",
                        "inspectItem": "혈색소",
                        "div": "",
                        "result": "14.6",
                        "unit": "g/dL",
                        "normalA": "남: 13-16.5 / 여: 12-15.5",
                        "normalB": "남: 12-12.9 / 여: 10-11.9",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "당뇨병",
                        "inspectItem": "공복혈당",
                        "div": "",
                        "result": "90",
                        "unit": "mg/dL",
                        "normalA": "100미만",
                        "normalB": "100-125",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "총콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "200미만",
                        "normalB": "200-239",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "HDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "60이상",
                        "normalB": "40-59",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "중성지방",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "150미만",
                        "normalB": "150-199",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "이상지질혈증",
                        "inspectItem": "LDL콜레스테롤",
                        "div": "",
                        "result": "",
                        "unit": "mg/dL",
                        "normalA": "130미만",
                        "normalB": "130-139",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "혈청크레아티닌",
                        "div": "",
                        "result": "1.1",
                        "unit": "mg/dL",
                        "normalA": "1.6이하",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "만성신장질환",
                        "inspectItem": "신사구체여과율(GFR)",
                        "div": "",
                        "result": "73",
                        "unit": "mL/min",
                        "normalA": "60이상",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "AST (SGOT)",
                        "div": "",
                        "result": "28",
                        "unit": "U/L",
                        "normalA": "40이하",
                        "normalB": "41-50",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "ALT(SGPT)",
                        "div": "이상",
                        "result": "38",
                        "unit": "U/L",
                        "normalA": "35이하",
                        "normalB": "36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "혈액검사",
                        "targetDis": "간장질환",
                        "inspectItem": "감마지티피(y-GTP)",
                        "div": "",
                        "result": "51",
                        "unit": "U/L",
                        "normalA": "남:11-63 / 여:8-35",
                        "normalB": "남:64-77 / 여:36-45",
                        "suspicionDis": ""
                    },
                    {
                        "type": "영상검사",
                        "targetDis": "폐결핵 흉부질환",
                        "inspectItem": "폐결핵 흉부질환",
                        "div": "",
                        "result": "정상",
                        "unit": "",
                        "normalA": "정상, 비활동성",
                        "normalB": "",
                        "suspicionDis": ""
                    },
                    {
                        "type": "골다공증",
                        "targetDis": "골다공증",
                        "inspectItem": "골다공증",
                        "div": "",
                        "result": "",
                        "unit": "",
                        "normalA": "T-score -1 이상",
                        "normalB": "-1~-2.5 초과",
                        "suspicionDis": ""
                    }
                ]
            }
        ],
        "errYn": "N",
        "errMsg": ""
    }
}
module.exports = router;
