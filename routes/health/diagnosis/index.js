const express = require('express');
const router = express.Router();
const {postAPIfunction, makeBodyData} = require('../../../controller/forAPI');
require('date-utils');
var newDate = new Date();

/**
 * 진료 내역
 */
router.post('/',  (req, res, next) => {
    const url = 'https://api.hyphen.im/in0002000427'

    let bodyData = makeBodyData(req.body)
    bodyData['subjectType'] = req.body.subjectType
    bodyData['fromDate'] = req.body.birthday
    bodyData['toDate'] = newDate.toFormat('YYYYMMDD')
    postAPIfunction(url, bodyData).then((resAPI) => {
        res.send(JSON.parse(resAPI))
    }).catch((err) => {
        console.log('error = ' + err);
        res.status(500).end()
    });
});

/**
 * 진료 내역 TEST
 * app 배포시 삭제
 */
router.post('/test', (req, res, next) => {
    const data = req.body
    if(data.loginOrgCd == null || data.name == null || data.birthday == null || data.mobileNo == null || data.subjectType == null)
        return res.status(404).end();
    res.send(diagnosisTestData)
});

/**
 * 진료 내역 TEST DATA
 * app 배포시 삭제
 */
const diagnosisTestData = {
    "common": {
        "userTrNo": "",
        "hyphenTrNo": "10202302140000000771",
        "errYn": "N",
        "errMsg": ""
    },
    "data": {
        "list": [
            {
                "subject": "01",
                "examinee": "현석훈",
                "sublist": [
                    {
                        "No": "1",
                        "pharmNm": "권내과의원[구로구 경인로40길]",
                        "diagType": "일반외래",
                        "diagSdate": "20221202",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "5000",
                        "gvChargeAmt": "11970"
                    },
                    {
                        "No": "2",
                        "pharmNm": "좋은약국[구로구 경인로40길]",
                        "diagType": "처방조제",
                        "diagSdate": "20221202",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "5",
                        "pChargeAmt": "7100",
                        "gvChargeAmt": "16570"
                    },
                    {
                        "No": "3",
                        "pharmNm": "가산디지털내과의원[금천구 가산디지털1로]",
                        "diagType": "일반외래",
                        "diagSdate": "20221114",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "5000",
                        "gvChargeAmt": "28570"
                    },
                    {
                        "No": "4",
                        "pharmNm": "한사랑치과의원[동작구 만양로]",
                        "diagType": "치과외래",
                        "diagSdate": "20221011",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "13800",
                        "gvChargeAmt": "32530"
                    },
                    {
                        "No": "5",
                        "pharmNm": "아름다운미소치과의원[동작구 양녕로]",
                        "diagType": "치과외래",
                        "diagSdate": "20220425",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "20400",
                        "gvChargeAmt": "47650"
                    },
                    {
                        "No": "6",
                        "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20210921",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "2",
                        "pChargeAmt": "19200",
                        "gvChargeAmt": "19410"
                    },
                    {
                        "No": "7",
                        "pharmNm": "리뉴피부과의원[동작구 상도로]",
                        "diagType": "일반외래",
                        "diagSdate": "20210913",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "3500",
                        "gvChargeAmt": "8280"
                    },
                    {
                        "No": "8",
                        "pharmNm": "송약국[동작구 상도로]",
                        "diagType": "처방조제",
                        "diagSdate": "20210913",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "2",
                        "pChargeAmt": "8700",
                        "gvChargeAmt": "20357"
                    },
                    {
                        "No": "9",
                        "pharmNm": "리뉴피부과의원[동작구 상도로]",
                        "diagType": "일반외래",
                        "diagSdate": "20210908",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "4900",
                        "gvChargeAmt": "11580"
                    },
                    {
                        "No": "10",
                        "pharmNm": "송약국[동작구 상도로]",
                        "diagType": "처방조제",
                        "diagSdate": "20210908",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "5",
                        "pChargeAmt": "21300",
                        "gvChargeAmt": "49703"
                    },
                    {
                        "No": "11",
                        "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                        "diagType": "일반외래",
                        "diagSdate": "20210423",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "60300",
                        "gvChargeAmt": "140820"
                    },
                    {
                        "No": "12",
                        "pharmNm": "건강한약국[제주시 서사로]",
                        "diagType": "처방조제",
                        "diagSdate": "20210423",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "7",
                        "pChargeAmt": "4600",
                        "gvChargeAmt": "10850"
                    },
                    {
                        "No": "13",
                        "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                        "diagType": "일반외래",
                        "diagSdate": "20200728",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "5100",
                        "gvChargeAmt": "12200"
                    },
                    {
                        "No": "14",
                        "pharmNm": "건강한약국[제주시 서사로]",
                        "diagType": "처방조제",
                        "diagSdate": "20200728",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "7",
                        "pChargeAmt": "4500",
                        "gvChargeAmt": "10720"
                    },
                    {
                        "No": "15",
                        "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                        "diagType": "일반외래",
                        "diagSdate": "20200724",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "5100",
                        "gvChargeAmt": "12200"
                    },
                    {
                        "No": "16",
                        "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                        "diagType": "일반외래",
                        "diagSdate": "20200723",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "5100",
                        "gvChargeAmt": "12200"
                    },
                    {
                        "No": "17",
                        "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                        "diagType": "일반외래",
                        "diagSdate": "20200721",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "54200",
                        "gvChargeAmt": "126520"
                    },
                    {
                        "No": "18",
                        "pharmNm": "건강한약국[제주시 서사로]",
                        "diagType": "처방조제",
                        "diagSdate": "20200721",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "7",
                        "pChargeAmt": "4500",
                        "gvChargeAmt": "10720"
                    },
                    {
                        "No": "19",
                        "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                        "diagType": "일반외래",
                        "diagSdate": "20200603",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "10000",
                        "gvChargeAmt": "23640"
                    },
                    {
                        "No": "20",
                        "pharmNm": "건강한약국[제주시 서사로]",
                        "diagType": "처방조제",
                        "diagSdate": "20200603",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "7",
                        "pChargeAmt": "4100",
                        "gvChargeAmt": "9850"
                    },
                    {
                        "No": "21",
                        "pharmNm": "채움치과의원[제주시 중앙로]",
                        "diagType": "치과외래",
                        "diagSdate": "20200421",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "21000",
                        "gvChargeAmt": "49330"
                    },
                    {
                        "No": "22",
                        "pharmNm": "채움치과의원[제주시 중앙로]",
                        "diagType": "치과외래",
                        "diagSdate": "20200420",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "21800",
                        "gvChargeAmt": "51180"
                    },
                    {
                        "No": "23",
                        "pharmNm": "채움치과의원[제주시 중앙로]",
                        "diagType": "치과외래",
                        "diagSdate": "20200417",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "27300",
                        "gvChargeAmt": "63860"
                    },
                    {
                        "No": "24",
                        "pharmNm": "에버그린의원[제주시 중앙로]",
                        "diagType": "일반외래",
                        "diagSdate": "20200122",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "20600",
                        "gvChargeAmt": "48380"
                    },
                    {
                        "No": "25",
                        "pharmNm": "채움치과의원[제주시 중앙로]",
                        "diagType": "치과외래",
                        "diagSdate": "20200120",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "19600",
                        "gvChargeAmt": "45970"
                    },
                    {
                        "No": "26",
                        "pharmNm": "제주대학교병원[제주시 아란13길]",
                        "diagType": "일반외래",
                        "diagSdate": "20191107",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "8400",
                        "gvChargeAmt": "8440"
                    },
                    {
                        "No": "27",
                        "pharmNm": "상쾌한이비인후과의원[제주시 동광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20191020",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "45800",
                        "gvChargeAmt": "107050"
                    },
                    {
                        "No": "28",
                        "pharmNm": "수약국[제주시 동광로]",
                        "diagType": "처방조제",
                        "diagSdate": "20191020",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "7",
                        "pChargeAmt": "17100",
                        "gvChargeAmt": "39836"
                    },
                    {
                        "No": "29",
                        "pharmNm": "911매일의원[제주시 중앙로]",
                        "diagType": "일반외래",
                        "diagSdate": "20191016",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "5600",
                        "gvChargeAmt": "13150"
                    },
                    {
                        "No": "30",
                        "pharmNm": "사랑약국[제주시 중앙로]",
                        "diagType": "처방조제",
                        "diagSdate": "20191016",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "3",
                        "pChargeAmt": "2300",
                        "gvChargeAmt": "5670"
                    },
                    {
                        "No": "31",
                        "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20191016",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "19300",
                        "gvChargeAmt": "19470"
                    },
                    {
                        "No": "32",
                        "pharmNm": "제주대학교병원[제주시 아란13길]",
                        "diagType": "일반외래",
                        "diagSdate": "20191010",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "19410",
                        "gvChargeAmt": "17610"
                    },
                    {
                        "No": "33",
                        "pharmNm": "제주대학교병원[제주시 아란13길]",
                        "diagType": "일반입원",
                        "diagSdate": "20190926",
                        "admDay": "10",
                        "presCnt": "0",
                        "dosageDay": "16",
                        "pChargeAmt": "546810",
                        "gvChargeAmt": "1965000"
                    },
                    {
                        "No": "34",
                        "pharmNm": "제주대학교병원[제주시 아란13길]",
                        "diagType": "일반외래",
                        "diagSdate": "20190829",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "78000",
                        "gvChargeAmt": "78190"
                    },
                    {
                        "No": "35",
                        "pharmNm": "제주대학교병원[제주시 아란13길]",
                        "diagType": "일반외래",
                        "diagSdate": "20190730",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "9900",
                        "gvChargeAmt": "10050"
                    },
                    {
                        "No": "36",
                        "pharmNm": "제주우리병원[제주시 중앙로]",
                        "diagType": "일반외래",
                        "diagSdate": "20190718",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "17900",
                        "gvChargeAmt": "27080"
                    },
                    {
                        "No": "37",
                        "pharmNm": "윤진호정형외과의원[제주시 동광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20190509",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "10900",
                        "gvChargeAmt": "25630"
                    },
                    {
                        "No": "38",
                        "pharmNm": "윤진호정형외과의원[제주시 동광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20190507",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "14000",
                        "gvChargeAmt": "32830"
                    },
                    {
                        "No": "39",
                        "pharmNm": "세브란스약국[제주시 동광로]",
                        "diagType": "처방조제",
                        "diagSdate": "20190507",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "3",
                        "pChargeAmt": "2300",
                        "gvChargeAmt": "5500"
                    },
                    {
                        "No": "40",
                        "pharmNm": "한마음병원[제주시 연신로]",
                        "diagType": "일반외래",
                        "diagSdate": "20190506",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "2",
                        "pChargeAmt": "90070",
                        "gvChargeAmt": "85800"
                    },
                    {
                        "No": "41",
                        "pharmNm": "911매일의원[제주시 중앙로]",
                        "diagType": "일반외래",
                        "diagSdate": "20190311",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "6400",
                        "gvChargeAmt": "15170"
                    },
                    {
                        "No": "42",
                        "pharmNm": "사랑약국[제주시 중앙로]",
                        "diagType": "처방조제",
                        "diagSdate": "20190311",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "3",
                        "pChargeAmt": "3300",
                        "gvChargeAmt": "8020"
                    },
                    {
                        "No": "43",
                        "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20181214",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "6600",
                        "gvChargeAmt": "6790"
                    },
                    {
                        "No": "44",
                        "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20181213",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "6600",
                        "gvChargeAmt": "6790"
                    },
                    {
                        "No": "45",
                        "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20181213",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "15700",
                        "gvChargeAmt": "15720"
                    },
                    {
                        "No": "46",
                        "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20181212",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "30600",
                        "gvChargeAmt": "30700"
                    },
                    {
                        "No": "47",
                        "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20181023",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "6600",
                        "gvChargeAmt": "6790"
                    },
                    {
                        "No": "48",
                        "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20181012",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "9000",
                        "gvChargeAmt": "9090"
                    },
                    {
                        "No": "49",
                        "pharmNm": "우리약국[제주시 서광로]",
                        "diagType": "처방조제",
                        "diagSdate": "20181012",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "7",
                        "pChargeAmt": "5200",
                        "gvChargeAmt": "12250"
                    },
                    {
                        "No": "50",
                        "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                        "diagType": "일반외래",
                        "diagSdate": "20181011",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "41000",
                        "gvChargeAmt": "41060"
                    },
                    {
                        "No": "51",
                        "pharmNm": "더고운의원[제주시 중앙로]",
                        "diagType": "일반외래",
                        "diagSdate": "20180712",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "pChargeAmt": "23800",
                        "gvChargeAmt": "55700"
                    },
                    {
                        "No": "52",
                        "pharmNm": "윤정형외과의원[동작구 흑석로]",
                        "diagType": "일반외래",
                        "diagSdate": "20180613",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "10500",
                        "gvChargeAmt": "24660"
                    },
                    {
                        "No": "53",
                        "pharmNm": "천사온누리약국[동작구 서달로]",
                        "diagType": "처방조제",
                        "diagSdate": "20180517",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "5",
                        "pChargeAmt": "3000",
                        "gvChargeAmt": "7200"
                    },
                    {
                        "No": "54",
                        "pharmNm": "정인설정형외과의원[동작구 서달로]",
                        "diagType": "일반외래",
                        "diagSdate": "20180517",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "pChargeAmt": "26600",
                        "gvChargeAmt": "62310"
                    },
                    {
                        "No": "55",
                        "pharmNm": "중앙대학교병원[동작구 흑석로]",
                        "diagType": "일반외래",
                        "diagSdate": "20180515",
                        "admDay": "1",
                        "presCnt": "0",
                        "dosageDay": "3",
                        "pChargeAmt": "114700",
                        "gvChargeAmt": "61650"
                    },
                    {
                        "No": "56",
                        "pharmNm": "건강과행복이열리는중앙메디칼약국[동작구 흑석로]",
                        "diagType": "처방조제",
                        "diagSdate": "20180411",
                        "admDay": "1",
                        "presCnt": "1",
                        "dosageDay": "7",
                        "pChargeAmt": "8300",
                        "gvChargeAmt": "8450"
                    }
                ]
            }
        ]
    },
    "resCd": "0000",
    "resMsg": "정상",
    "out": {
        "outE3030": {
            "list": []
        },
        "outE2020": {
            "list": []
        },
        "outE1010": {
            "list": []
        },
        "errMsg": "",
        "resMsg": "",
        "errYn": "N",
        "outE2050": {
            "ht": [],
            "yg": [],
            "gy": [],
            "sj": []
        },
        "bizNo": "",
        "outC0001": {
            "list": [
                {
                    "subject": "01",
                    "examinee": "현석훈",
                    "sublist": [
                        {
                            "No": "1",
                            "pharmNm": "권내과의원[구로구 경인로40길]",
                            "diagType": "일반외래",
                            "diagSdate": "20221202",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "5000",
                            "gvChargeAmt": "11970"
                        },
                        {
                            "No": "2",
                            "pharmNm": "좋은약국[구로구 경인로40길]",
                            "diagType": "처방조제",
                            "diagSdate": "20221202",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "5",
                            "pChargeAmt": "7100",
                            "gvChargeAmt": "16570"
                        },
                        {
                            "No": "3",
                            "pharmNm": "가산디지털내과의원[금천구 가산디지털1로]",
                            "diagType": "일반외래",
                            "diagSdate": "20221114",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "5000",
                            "gvChargeAmt": "28570"
                        },
                        {
                            "No": "4",
                            "pharmNm": "한사랑치과의원[동작구 만양로]",
                            "diagType": "치과외래",
                            "diagSdate": "20221011",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "13800",
                            "gvChargeAmt": "32530"
                        },
                        {
                            "No": "5",
                            "pharmNm": "아름다운미소치과의원[동작구 양녕로]",
                            "diagType": "치과외래",
                            "diagSdate": "20220425",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "20400",
                            "gvChargeAmt": "47650"
                        },
                        {
                            "No": "6",
                            "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20210921",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "2",
                            "pChargeAmt": "19200",
                            "gvChargeAmt": "19410"
                        },
                        {
                            "No": "7",
                            "pharmNm": "리뉴피부과의원[동작구 상도로]",
                            "diagType": "일반외래",
                            "diagSdate": "20210913",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "3500",
                            "gvChargeAmt": "8280"
                        },
                        {
                            "No": "8",
                            "pharmNm": "송약국[동작구 상도로]",
                            "diagType": "처방조제",
                            "diagSdate": "20210913",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "2",
                            "pChargeAmt": "8700",
                            "gvChargeAmt": "20357"
                        },
                        {
                            "No": "9",
                            "pharmNm": "리뉴피부과의원[동작구 상도로]",
                            "diagType": "일반외래",
                            "diagSdate": "20210908",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "4900",
                            "gvChargeAmt": "11580"
                        },
                        {
                            "No": "10",
                            "pharmNm": "송약국[동작구 상도로]",
                            "diagType": "처방조제",
                            "diagSdate": "20210908",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "5",
                            "pChargeAmt": "21300",
                            "gvChargeAmt": "49703"
                        },
                        {
                            "No": "11",
                            "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                            "diagType": "일반외래",
                            "diagSdate": "20210423",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "60300",
                            "gvChargeAmt": "140820"
                        },
                        {
                            "No": "12",
                            "pharmNm": "건강한약국[제주시 서사로]",
                            "diagType": "처방조제",
                            "diagSdate": "20210423",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "7",
                            "pChargeAmt": "4600",
                            "gvChargeAmt": "10850"
                        },
                        {
                            "No": "13",
                            "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                            "diagType": "일반외래",
                            "diagSdate": "20200728",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "5100",
                            "gvChargeAmt": "12200"
                        },
                        {
                            "No": "14",
                            "pharmNm": "건강한약국[제주시 서사로]",
                            "diagType": "처방조제",
                            "diagSdate": "20200728",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "7",
                            "pChargeAmt": "4500",
                            "gvChargeAmt": "10720"
                        },
                        {
                            "No": "15",
                            "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                            "diagType": "일반외래",
                            "diagSdate": "20200724",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "5100",
                            "gvChargeAmt": "12200"
                        },
                        {
                            "No": "16",
                            "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                            "diagType": "일반외래",
                            "diagSdate": "20200723",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "5100",
                            "gvChargeAmt": "12200"
                        },
                        {
                            "No": "17",
                            "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                            "diagType": "일반외래",
                            "diagSdate": "20200721",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "54200",
                            "gvChargeAmt": "126520"
                        },
                        {
                            "No": "18",
                            "pharmNm": "건강한약국[제주시 서사로]",
                            "diagType": "처방조제",
                            "diagSdate": "20200721",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "7",
                            "pChargeAmt": "4500",
                            "gvChargeAmt": "10720"
                        },
                        {
                            "No": "19",
                            "pharmNm": "정성학 마취통증의학과의원[제주시 서사로]",
                            "diagType": "일반외래",
                            "diagSdate": "20200603",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "10000",
                            "gvChargeAmt": "23640"
                        },
                        {
                            "No": "20",
                            "pharmNm": "건강한약국[제주시 서사로]",
                            "diagType": "처방조제",
                            "diagSdate": "20200603",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "7",
                            "pChargeAmt": "4100",
                            "gvChargeAmt": "9850"
                        },
                        {
                            "No": "21",
                            "pharmNm": "채움치과의원[제주시 중앙로]",
                            "diagType": "치과외래",
                            "diagSdate": "20200421",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "21000",
                            "gvChargeAmt": "49330"
                        },
                        {
                            "No": "22",
                            "pharmNm": "채움치과의원[제주시 중앙로]",
                            "diagType": "치과외래",
                            "diagSdate": "20200420",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "21800",
                            "gvChargeAmt": "51180"
                        },
                        {
                            "No": "23",
                            "pharmNm": "채움치과의원[제주시 중앙로]",
                            "diagType": "치과외래",
                            "diagSdate": "20200417",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "27300",
                            "gvChargeAmt": "63860"
                        },
                        {
                            "No": "24",
                            "pharmNm": "에버그린의원[제주시 중앙로]",
                            "diagType": "일반외래",
                            "diagSdate": "20200122",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "20600",
                            "gvChargeAmt": "48380"
                        },
                        {
                            "No": "25",
                            "pharmNm": "채움치과의원[제주시 중앙로]",
                            "diagType": "치과외래",
                            "diagSdate": "20200120",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "19600",
                            "gvChargeAmt": "45970"
                        },
                        {
                            "No": "26",
                            "pharmNm": "제주대학교병원[제주시 아란13길]",
                            "diagType": "일반외래",
                            "diagSdate": "20191107",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "8400",
                            "gvChargeAmt": "8440"
                        },
                        {
                            "No": "27",
                            "pharmNm": "상쾌한이비인후과의원[제주시 동광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20191020",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "45800",
                            "gvChargeAmt": "107050"
                        },
                        {
                            "No": "28",
                            "pharmNm": "수약국[제주시 동광로]",
                            "diagType": "처방조제",
                            "diagSdate": "20191020",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "7",
                            "pChargeAmt": "17100",
                            "gvChargeAmt": "39836"
                        },
                        {
                            "No": "29",
                            "pharmNm": "911매일의원[제주시 중앙로]",
                            "diagType": "일반외래",
                            "diagSdate": "20191016",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "5600",
                            "gvChargeAmt": "13150"
                        },
                        {
                            "No": "30",
                            "pharmNm": "사랑약국[제주시 중앙로]",
                            "diagType": "처방조제",
                            "diagSdate": "20191016",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "3",
                            "pChargeAmt": "2300",
                            "gvChargeAmt": "5670"
                        },
                        {
                            "No": "31",
                            "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20191016",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "19300",
                            "gvChargeAmt": "19470"
                        },
                        {
                            "No": "32",
                            "pharmNm": "제주대학교병원[제주시 아란13길]",
                            "diagType": "일반외래",
                            "diagSdate": "20191010",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "19410",
                            "gvChargeAmt": "17610"
                        },
                        {
                            "No": "33",
                            "pharmNm": "제주대학교병원[제주시 아란13길]",
                            "diagType": "일반입원",
                            "diagSdate": "20190926",
                            "admDay": "10",
                            "presCnt": "0",
                            "dosageDay": "16",
                            "pChargeAmt": "546810",
                            "gvChargeAmt": "1965000"
                        },
                        {
                            "No": "34",
                            "pharmNm": "제주대학교병원[제주시 아란13길]",
                            "diagType": "일반외래",
                            "diagSdate": "20190829",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "78000",
                            "gvChargeAmt": "78190"
                        },
                        {
                            "No": "35",
                            "pharmNm": "제주대학교병원[제주시 아란13길]",
                            "diagType": "일반외래",
                            "diagSdate": "20190730",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "9900",
                            "gvChargeAmt": "10050"
                        },
                        {
                            "No": "36",
                            "pharmNm": "제주우리병원[제주시 중앙로]",
                            "diagType": "일반외래",
                            "diagSdate": "20190718",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "17900",
                            "gvChargeAmt": "27080"
                        },
                        {
                            "No": "37",
                            "pharmNm": "윤진호정형외과의원[제주시 동광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20190509",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "10900",
                            "gvChargeAmt": "25630"
                        },
                        {
                            "No": "38",
                            "pharmNm": "윤진호정형외과의원[제주시 동광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20190507",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "14000",
                            "gvChargeAmt": "32830"
                        },
                        {
                            "No": "39",
                            "pharmNm": "세브란스약국[제주시 동광로]",
                            "diagType": "처방조제",
                            "diagSdate": "20190507",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "3",
                            "pChargeAmt": "2300",
                            "gvChargeAmt": "5500"
                        },
                        {
                            "No": "40",
                            "pharmNm": "한마음병원[제주시 연신로]",
                            "diagType": "일반외래",
                            "diagSdate": "20190506",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "2",
                            "pChargeAmt": "90070",
                            "gvChargeAmt": "85800"
                        },
                        {
                            "No": "41",
                            "pharmNm": "911매일의원[제주시 중앙로]",
                            "diagType": "일반외래",
                            "diagSdate": "20190311",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "6400",
                            "gvChargeAmt": "15170"
                        },
                        {
                            "No": "42",
                            "pharmNm": "사랑약국[제주시 중앙로]",
                            "diagType": "처방조제",
                            "diagSdate": "20190311",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "3",
                            "pChargeAmt": "3300",
                            "gvChargeAmt": "8020"
                        },
                        {
                            "No": "43",
                            "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20181214",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "6600",
                            "gvChargeAmt": "6790"
                        },
                        {
                            "No": "44",
                            "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20181213",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "6600",
                            "gvChargeAmt": "6790"
                        },
                        {
                            "No": "45",
                            "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20181213",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "15700",
                            "gvChargeAmt": "15720"
                        },
                        {
                            "No": "46",
                            "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20181212",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "30600",
                            "gvChargeAmt": "30700"
                        },
                        {
                            "No": "47",
                            "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20181023",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "6600",
                            "gvChargeAmt": "6790"
                        },
                        {
                            "No": "48",
                            "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20181012",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "9000",
                            "gvChargeAmt": "9090"
                        },
                        {
                            "No": "49",
                            "pharmNm": "우리약국[제주시 서광로]",
                            "diagType": "처방조제",
                            "diagSdate": "20181012",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "7",
                            "pChargeAmt": "5200",
                            "gvChargeAmt": "12250"
                        },
                        {
                            "No": "50",
                            "pharmNm": "의료법인 혜인의료재단 한국병원[제주시 서광로]",
                            "diagType": "일반외래",
                            "diagSdate": "20181011",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "41000",
                            "gvChargeAmt": "41060"
                        },
                        {
                            "No": "51",
                            "pharmNm": "더고운의원[제주시 중앙로]",
                            "diagType": "일반외래",
                            "diagSdate": "20180712",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "pChargeAmt": "23800",
                            "gvChargeAmt": "55700"
                        },
                        {
                            "No": "52",
                            "pharmNm": "윤정형외과의원[동작구 흑석로]",
                            "diagType": "일반외래",
                            "diagSdate": "20180613",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "10500",
                            "gvChargeAmt": "24660"
                        },
                        {
                            "No": "53",
                            "pharmNm": "천사온누리약국[동작구 서달로]",
                            "diagType": "처방조제",
                            "diagSdate": "20180517",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "5",
                            "pChargeAmt": "3000",
                            "gvChargeAmt": "7200"
                        },
                        {
                            "No": "54",
                            "pharmNm": "정인설정형외과의원[동작구 서달로]",
                            "diagType": "일반외래",
                            "diagSdate": "20180517",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "pChargeAmt": "26600",
                            "gvChargeAmt": "62310"
                        },
                        {
                            "No": "55",
                            "pharmNm": "중앙대학교병원[동작구 흑석로]",
                            "diagType": "일반외래",
                            "diagSdate": "20180515",
                            "admDay": "1",
                            "presCnt": "0",
                            "dosageDay": "3",
                            "pChargeAmt": "114700",
                            "gvChargeAmt": "61650"
                        },
                        {
                            "No": "56",
                            "pharmNm": "건강과행복이열리는중앙메디칼약국[동작구 흑석로]",
                            "diagType": "처방조제",
                            "diagSdate": "20180411",
                            "admDay": "1",
                            "presCnt": "1",
                            "dosageDay": "7",
                            "pChargeAmt": "8300",
                            "gvChargeAmt": "8450"
                        }
                    ]
                }
            ],
            "errYn": "N",
            "errMsg": ""
        },
        "outE4030": {
            "list": []
        },
        "outC0002": {
            "list": []
        },
        "outE1040": {
            "list": []
        },
        "outE3020": {
            "list": []
        },
        "outE2010": {
            "list": []
        },
        "outC0008": {
            "list": []
        },
        "outC0009": {
            "list": []
        },
        "outC0003": {
            "list": []
        },
        "outC0004": {
            "list": []
        },
        "outC0005": {
            "list": []
        },
        "outC0006": {
            "list": []
        },
        "outB0002": {
            "list": []
        },
        "outB0003": {
            "list": []
        },
        "proxy": "210.205.122.72:22977",
        "outB0000": [],
        "outB0001": {
            "list": []
        },
        "orgCd": "nhic",
        "outB0006": {
            "list": []
        },
        "outB0007": {
            "list": []
        },
        "device": "linux",
        "outB0004": {
            "list": []
        },
        "outB0005": {
            "list": []
        },
        "outC0010": {
            "list": []
        },
        "outE2040": {
            "list": []
        },
        "outC0011": {
            "list": []
        },
        "outC0012": {
            "list": []
        },
        "outE1030": {
            "list": []
        },
        "outE3010": {
            "list": []
        },
        "outC0013": [],
        "outE4020": {
            "list": []
        },
        "outC0014": [],
        "uid": "",
        "resCd": "0000",
        "outE4010": {
            "list": []
        },
        "outE2030": {
            "list": []
        },
        "outE1020": {
            "list": []
        },
        "reqCd": "UUID20200716000001",
        "infotechLog": []
    }
}
module.exports = router;
