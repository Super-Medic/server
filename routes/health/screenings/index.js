const express = require('express');
const router = express.Router();
const {postAPIfunction, makeBodyData} = require('../../../controller/forAPI');
const baby = require('./baby');

router.use("/baby", baby);

router.post('/', async function(req, res, next) {
    let url = 'https://api.hyphen.im/in0002000432'

    let bodyData = makeBodyData(req.body)

    await postAPIfunction(url, bodyData).then((resAPI) => {
        res.send(JSON.parse(resAPI))
    }).catch((err) => {
        console.log('error = ' + err);
        res.status(500).end()
    });
});

router.post('/test', function(req, res, next) {
    const data = req.body
    if(data.loginOrgCd == null || data.name == null || data.birthday == null || data.mobileNo == null)
        return res.status(404).end();
    res.send(screeningsTestData)
});

const screeningsTestData = {
    "common": {
        "userTrNo": "",
        "hyphenTrNo": "10202302140000000763",
        "errYn": "N",
        "errMsg": ""
    },
    "data": {
        "list": [
            {
                "year": "2022",
                "result": "의심",
                "chkAgency": "구로성심병원",
                "opinion": "",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "11/29",
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
                        "result": "167.9",
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
                        "result": "78.4",
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
                        "result": "82.5",
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
                        "result": "27.8",
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
                        "result": "0.9/1.0",
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
                        "result": "130/67",
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
                        "div": "이상",
                        "result": "16.6",
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
                        "result": "89",
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
                        "result": "197",
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
                        "result": "30",
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
                        "result": "129",
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
                        "result": "141",
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
                        "result": "88",
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
                        "result": "29",
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
                        "result": "42",
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
                        "result": "25",
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
                "year": "2022",
                "result": "의심",
                "chkAgency": "구로성심병원",
                "opinion": "",
                "chkResult": [
                    {
                        "type": "검진일자",
                        "targetDis": "검진일자",
                        "inspectItem": "검진일자",
                        "div": "",
                        "result": "11/29",
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
                        "result": "167.9",
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
                        "result": "78.4",
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
                        "result": "82.5",
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
                        "result": "27.8",
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
                        "result": "0.9/1.0",
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
                        "result": "130/67",
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
                        "div": "이상",
                        "result": "16.6",
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
                        "result": "89",
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
                        "result": "197",
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
                        "result": "30",
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
                        "result": "129",
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
                        "result": "141",
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
                        "result": "88",
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
                        "result": "29",
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
                        "result": "42",
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
                        "result": "25",
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
