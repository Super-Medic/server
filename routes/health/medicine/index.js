const express = require('express');
const router = express.Router();
const {postAPIfunction, makeBodyData} = require('../../../controller/forAPI');

router.post('/', async function(req, res, next) {
    const url = 'https://api.hyphen.im/in0002000428'

    let bodyData = makeBodyData(req.body)
    bodyData['subjectType'] = req.body.subjectType
    bodyData['detailYn'] = 'Y'

    await postAPIfunction(url, bodyData).then((resAPI) => {
        res.send(JSON.parse(resAPI))
    }).catch((err) => {
        console.log('error = ' + err);
        res.status(500).end()
    });
});

router.post('/test', function(req, res, next) {
    const data = req.body
    if(data.loginOrgCd == null || data.name == null || data.birthday == null || data.mobileNo == null || data.subjectType == null)
        return res.status(404).end();
    res.send(medicineTestData)
});

const medicineTestData = {
    "common": {
        "userTrNo": "",
        "hyphenTrNo": "10202302140000000779",
        "errYn": "N",
        "errMsg": ""
    },
    "data": {
        "list": [
            {
                "subject": "01",
                "examinee": "",
                "sublist": [
                    {
                        "No": "1",
                        "pharmNm": "좋은약국[구로구 경인로40길]",
                        "medDate": "20221202",
                        "medType": "처방조제",
                        "medCnt": "1",
                        "presCnt": "1",
                        "dosageDay": "5",
                        "medList": [
                            {
                                "No": "1",
                                "diagDate": "20221202",
                                "diagType": "약국",
                                "presCnt": "0",
                                "medicineNm": "코대원에스시럽 (Codaewon S Syrup)",
                                "medicineEffect": "진해거담제",
                                "dosageDay": "5",
                                "detailObj": {
                                    "MEDI_PRDC_NM": "코대원에스시럽",
                                    "CMPN_NM": "DL-메틸에페드린염산염(DL-Methylephedrine Hydrochloride)\n디히드로코데인타르타르산염(Dihydrocodeine Bitartrate)\n염화암모늄(Ammonium Chloride)\n클로르페니라민말레산염(Chlorpheniramine Maleate)\n펠라고니움시도이데스11%에탄올추출물(1→8~10)(Pelargonium Sidoides 11% Ethanol Extract(1→8~10))",
                                    "TMSG_GNL_SPCD": "1",
                                    "SNGL_CMTN_YN": "",
                                    "UPSO_NAME": "대원제약",
                                    "UPSO1": "",
                                    "FOML_CD_XPLN_CNTE": "시럽제",
                                    "MDCT_PATH_XPLN_CNTE": "경구(내용액제)",
                                    "MOHW_CLSF": "진해거담제(222)",
                                    "ATC_STND_CD": "undefined : undefined",
                                    "NATN_CD_ECEP_RPST_CD": "",
                                    "KPIC_PRDC_CD": "2020071600007",
                                    "KPIC_EFMD": "",
                                    "CMPN_NM_2": "없음",
                                    "AGE_INCP_CNTE": "없음",
                                    "PRGW_GRDE_XPLN_CNTE": "없음",
                                    "EFFT_EFT_CNTE": "급성 기관지염의 증상 및 징후 개선",
                                    "USAG_CPCT_CNTE": "이 약은 성인 1회 1포(20 mL), 1일 3회 식후 경구 투여한다.",
                                    "USE_ATNT_MTT_CNTE": "1. 경고\n중증의 호흡 억제 위험이 증가할 수 있으니 18세 미만의 비만, 폐색성 수면 무호흡증후군 또는 중증 폐 질환을 가진 환자에게 투여를 피한다.\n2. 다음 환자에는 투여하지 말 것\n1) 이 약 또는 이 약의 구성성분에 대한 과민반응 및 그 병력이 있는 환자\n2) MAO억제제(항우울제, 정신병치료제, 감정조절제, 항파킨슨제 등)를 복용하고 있거나 복용을 중단한 후 2주 이내의 환자\n3) 12세 미만의 소아(‘소아에 대한 투여’항 참조)\n4) 임부 및 수유부\n5) 녹내장 환자(항콜린 작용에 의해 안압이 상승되어 녹내장이 악화될 수 있다.)\n6) 전립선비대 등 하부요로폐색성 질환 환자\n7) 출혈경향의 증가 환자, 응고억제제 복용환자\n8) 중증의 간질환 및 신질환 환자\n3. 다음 환자에는 신중히 투여할 것\n1) 본인, 양친 또는 형제 등이 두드러기, 접촉피부염, 알레르기비염, 편두통, 음식물알레르기 등을 일으키기 쉬운 체질을 갖고 있는 사람\n2) 지금까지 약에 의해 알레르기 증상(예, 발열, 발진, 관절통, 가려움 등)을 일으킨 적이 있는 사람\n3) 간장애, 신장애, 갑상샘질환, 당뇨병 등이 있는 사람, 허약자 또는 고열이 있는 사람\n4) 순환기계 질환, 고혈압등 심혈관계 질환 환자 또는 고령자\n5) 임신하고 있을 가능성이 있는 여성\n6) 안압상승 또는 배뇨장애 환자\n7) 다음과 같은 기침이 있는 사람\n흡연, 천식, 만성 기관지염, 폐기종, 기관지확장증, 과도한 가래가 동반되는 기침, 1주 이상 지속 또는 재발되는 기침, 만성 기침, 발열·발진이나 지속적인 두통이 동반되는 기침\n8) 협착성소화성궤양 또는 유문십이지장 폐색 환자(클로르페니라민의 항콜린 작용에 의해 평활근의 운동억제, 긴장저하가 일어나 증상이 악화될 수 있다.)\n9) 간질 환자\n10) 이 약은 카라멜을 함유하고 있으므로 이 성분에 과민하거나 알레르기 병력이 있는 환자\n4. 이상반응\n1) 임상시험\n이 약에 대한 안전성을 19세 이상의 무작위배정된 급성기관지염 환자 204명을 대상으로 활성대조약(디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽)을 대조로 하여 임상시험에서 평가하였다. 7일의 치료기간 동안 코대원에스시럽에서 흔하게 보고된 이상반응은 구강건조 2.99%(2/67명), 오심, 졸음, 안면부종이 각 1.49%(1/67명)이었다. 이 중 안면부종을 제외하고 모두 코대원에스시럽과 인과관계가 있다고 평가한 이상약물반응이었다. 다음 표1는 이 임상시험에서 인과관계와 상관없이 전체투여군에서 발생한 이상반응의 발생빈도를 요약한 것이다.\n\n<TABLE style=\"TEXT-INDENT: 0px\" cellSpacing=0 borderColorDark=white borderColorLight=black border=1>\n<TBODY>\n<TR>\n<TD colSpan=5>표1. 이 약 임상시험 중 발생한 이상반응</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: center\">기관</TD>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 84.6pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: center\">코대원에스시럽군\n<P style=\"TEXT-ALIGN: center\">(N = 67)\n<P style=\"TEXT-ALIGN: center\">N(%)</TD>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 84.6pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: center\">디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽군\n<P style=\"TEXT-ALIGN: center\">(N = 70)\n<P style=\"TEXT-ALIGN: center\">N(%)</TD>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 184px; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: center\">펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽군\n<P style=\"TEXT-ALIGN: center\">(N = 65)\n<P style=\"TEXT-ALIGN: center\">N(%)</TD>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 100px; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: center\">전체투여군\n<P style=\"TEXT-ALIGN: center\">(N = 202)\n<P style=\"TEXT-ALIGN: center\">N(%)</TD></TR>\n<TR>\n<TD colSpan=5>소화계 장애</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">구강건조</TD>\n<TD style=\"TEXT-ALIGN: right\">2(2.99) &nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.43)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">3(1.49)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">오심</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.49) &nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.54)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">2(0.99)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">소화불량</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0) &nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.54)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">위염</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.54)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD colSpan=5>신경계 장애</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">졸음</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.49)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">3(4.29)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">2(3.08)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">6(2.97)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">어지러움</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.43)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD colSpan=5>전신 및 투여부위</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">안면 부종</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.49)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.43)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">2(0.99)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">발열</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.54)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD colSpan=5>감염</TD></TR>\n<TR>\n<TD>&nbsp;&nbsp;&nbsp; 상기도감염</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.54)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD colSpan=5>호흡기, 흉부 및 종격장애</TD></TR>\n<TR>\n<TD>&nbsp;&nbsp;&nbsp; 비강건조</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.43)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR></TBODY></TABLE>2) 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽\n① 쇼크 : 청색증, 호흡곤란, 흉부불쾌감, 혈압저하 등\n② 과민반응 : 발진, 발적, 가려움, 광민감반응, 박탈피부염, 두드러기, 단일수축, 근허약, 협조불능\n③ 소화기계 : 구역, 구토, 변비, 식욕부진, 구갈(지속적이거나 심한), 가슴쓰림, 소화불량, 복통, 설사\n④ 정신신경계 : 어지럼, 불안, 떨림, 불면, 졸음, 진정, 신경과민, 두통, 초조감, 복시, 이명, 전정장애, 이상황홀감, 정서불안, 히스테리, 진전, 신경염, 협조이상, 감각이상, 흐린시력, 집중력감소, 권태감, 경련, 착란\n⑤ 비뇨기계 : 배뇨곤란, 빈뇨, 요폐, 요저류\n⑥ 순환기계 : 저혈압, 심계항진, 빈맥, 부정맥, 기외수축, 간염, 황달\n⑦ 호흡기계 : 코 또는 기도의 건조, 기관분비액의 점성화, 천명, 코막힘\n⑧ 혈액계 : 용혈성빈혈, 혈소판감소, 재생불량성빈혈, 무과립구증\n⑨ 기타 : 오한, 발한이상, 흉통, 피로감, 월경이상\n3) 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽\n① 때때로 위통, 속쓰림, 구역, 설사와 같은 위장장애가 발생할 수 있다.\n② 드물게 가벼운 잇몸출혈 또는 비출혈이 발생할 수 있다.\n③ 드물게 발진, 두드러기, 피부 및 점막의 가려움 등의 과민반응이 발생할 수 있다.\n④ 매우 드물게 안면부종, 호흡곤란, 혈압강하와 함께 중증의 과민반응이 발생할 수 있다.\n⑤ 드물게 간수치 증가가 발생할 수 있고 일부 환자에서 염증관련 간질환을 나타내기도 하였다.\n⑥ 혈소판수치 감소가 발생하였다. 그러나 이것은 기저질환에 의해 야기된 것일 수 있다.\n⑦ 시판 후 조사 결과\n국내에서 시판 후 조사기간 동안 727명을 대상으로 실시한 안전성 평가 결과, 유해사례 발현율은 인과관계와 상관없이 0.96%(7명/727명, 7건)이었고, 본제와 인과관계를 배제할 수 없는 약물유해사례 0.28%(2명/727명, 2건)로 구토 0.16%(1명/727명, 1건), 묽은변 0.16%(1명/727명, 1건)이었다. 이 중 중대한 유해사례 및 예상하지 못한 약물유해반응은 없었다.\n⑧ 약물유해반응 보고사례\n외국에서 이 약의 복용과 관련하여 간손상과 간염사례가 보고되고 있다. 이러한 사례들은 자발적으로 보고되었기 때문에, 신뢰성 있는 발생빈도는 도출되지 않았다.\n5. 일반적 주의\n1) 복용하는 동안 졸음이 오는 경우가 있으므로 자동차 운전 또는 기계류의 운전 조작을 피한다.\n2) 과량투여 하거나 장기연용하지 않는다.\n3) 이 약의 복용과 관련하여 간손상 징후(황달, 짙은 색 소변, 심한 상복부 통증, 식욕감퇴)가 나타나는 경우 즉시 복용을 중지한다.\n4) 발열이 수일간 지속되거나 호흡곤란, 혈담 등의 상태가 호전되지 않을 경우 즉시 의사와 상의한다.\n6. 상호작용\n1) 이 약의 주성분인 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽과 펠라고니움시도이데스 11%에탄올추출물(1→8~10)시럽의 병용투여시 임상적으로 유의한 약동학적 상호작용은 나타나지 않았다.\n2) 다른약물들과 본제의 약물상호작용에 대한 연구는 수행되지 않았다.\n3) 각 단일제의 허가사항을 참고하였을 때 약물상호작용에 대한 정보는 아래와 같다.\n&#x2022; 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽\n① 다음 약들과 병용투여하지 않는다: 다른 진해거담제, 감기약, 항히스타민제, 진정제 등\n② 알코올, 중추신경억제제 병용시 졸음을 유발할 수 있다.\n③ 클로르페니라민은 페니토인대사를 억제하여 페니토인 독성을 유발할 수 있다.\n&#x2022; 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽\n현재까지 상호작용이 보고된 바 없다. 이 약이 응고인자에 영향을 미칠 수 있기 때문에 Phenprocoumon, Wafarin과 같은 쿠마린계와의 병용투여시 응고저해 증강효과를 배제할 수 없다. 건강한 피험자들을 대상으로 한 임상시험에서 이 약과 페녹시메틸페니실린(penicillin V) 간의 상호작용이 없었다.\n7. 임부 및 수유부에 대한 투여\n1) 임부 및 임신하고 있을 가능성이 있는 여성에 대한 안전성이 확립되어 있지 않으므로 투여하지 않는다.\n2) 이 약이 유즙 분비를 억제하고 모유로 이행될 수 있으므로 수유부에게 투여하지 않는다.\n8. 소아에 대한 투여\n1) 이 약은 19세 미만의 소아 및 청소년에서의 안전성 및 유효성은 확립되어 있지 않다.\n2) 소아에 과량 투여하면 환각, 흥분, 경련, 사망을 일으킬 수 있으므로 특히 주의한다.\n3) 중증 호흡억제가 나타날 수 있으니 12세 미만 소아에게 투여하지 말아야한다(12세 미만 소아는 호흡억제 감수성이 크다. 12세 미만 소아에서 사망을 포함하는 중증 호흡억제 위험이 크다는 국외보고가 있다.).\n9. 고령자에 대한 투여\n일반적으로 고령자는 생리기능이 저하되어 있으므로 환자의 상태를 관찰하여 신중히 투여해야 한다.\n10. 과량투여시의 처치\n클로르페니라민의 치사량은 체중 kg당 25 ∼ 50 mg이다. 증상으로는 진정, 중추신경계 비정상적 자극, 중독성 정신병, 경련, 무호흡, 정신착란, 항콜린 효과, 실조증, 부정맥을 비롯한 심혈관계 허탈증 등이 나타날 수 있으며 이 때에는 토근시럽을 이용해 구토를 유발시키거나 위세척을 한다.\n11. 보관 및 취급상의 주의사항\n1) 어린이의 손이 닿지 않는 장소에 보관한다.\n2) 직사광선을 피하고 되도록 습기가 적은 서늘한 곳에 밀전하여 보관한다.\n3) 오용을 막고 품질의 보존을 위하여 다른 용기에 바꾸어 넣지 않는다.\n\n\n\n12. 전문가를 위한 정보\n1) 임상시험 정보\n① 약물-약물 상호작용 임상시험\n총 30명의 건강한 남성 대상자에서 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 단독투여에 대한 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽의 병용 투여 시의 안전성과 약동학적 특성에 대해 평가하기 위해 공개, 무작위배정, 공복, 경구 투여, 2군 2기 교차시험의 형태로 임상시험을 수행하였다. 그 결과 약동학적 특성의 경우 총 27명의 대상자가 완료하였으며 각 성분의 C<SUB>max</SUB> 및 AUC<SUB>last</SUB> 에 대한 기하평균비와 90% 신뢰구간은 디히드로코데인 0.931[0.856 &#x2013; 1.013], 1.000[0.960 &#x2013; 1.041], dl-메틸에페드린 0.955[0.902 &#x2013; 1.012], 1.004[0.978 &#x2013; 1.030], 클로르페니라민 0.980[0.936 &#x2013; 1.025], 1.009[0.964 &#x2013; 1.057]로 체내 노출에서 동등한 것으로 확인되었다.\n② 치료적 확증 임상시험\n총 204명의 급성 기관지염 환자를 무작위배정하여 다기관, 무작위배정, 이중눈가림, 평행군, 활성대조, 우월성 임상시험을 실시하여 7일동안 코대원에스시럽(DW1601)을 시험약, 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽을 활성대조약으로 경구투여하였다.\n기저치 수치(연속형 변수)를 공변량으로 포함한 공분산분석으로 분석하였을 때 일차 유효성 평가 결과는 하기의 표와 같았으며 이 약 투여군이 활성대조약(디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽) 투여군에 비해 기저치 대비 4일 후 BSS 변화량이 더 컸으며, 이는 통계적으로 유의하였다(p = 0.0012, p = 0.0006).\n[기저치에서의 평균 BSS를 공변량으로 보정한 공분산분석(ANCOVA) 결과 기저치 대비 4일 후 BSS 변화량(시험군 vs 대조군1)]\n\n<TABLE style=\"TEXT-INDENT: 0px\" cellSpacing=0 borderColorDark=white borderColorLight=black border=1>\n<TBODY>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 133pt; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">측정값(FAS군)</TD>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 152.35pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">시험군(N=67)\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">코대원에스시럽</TD>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 152.4pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">대조군1(N=70)\n<P style=\"TEXT-ALIGN: justify\">디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">최소제곱평균</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 152.35pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-3.51±0.18</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 152.4pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-2.65±0.18</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">최소제곱평균 변화량</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-0.86±0.26</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">95% 신뢰구간\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">(최소제곱평균변화량)</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">[-1.37, -0.35]</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">p 값</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">0.0012</TD></TR></TBODY></TABLE>[기저치에서의 평균 BSS를 공변량으로 보정한 공분산분석(ANCOVA) 결과 기저치 대비 4일 후 BSS 변화량(시험군 vs 대조군2)]\n\n<TABLE style=\"TEXT-INDENT: 0px\" cellSpacing=0 borderColorDark=white borderColorLight=black border=1>\n<TBODY>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 133pt; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">측정값(FAS군)</TD>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 152.35pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">시험군(N=67)\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">코대원에스시럽</TD>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 152.4pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">대조군2(N=64)\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">최소제곱평균</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 152.35pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-3.56±0.18</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 152.4pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-2.64±0.19</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">최소제곱평균 변화량</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-0.92±0.26</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">95% 신뢰구간\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">(최소제곱평균변화량)</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">[-1.44, -0.40]</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">p 값</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">0.0006</TD></TR></TBODY></TABLE>2) 약리시험 정보\n디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽(대조 투여군) 대비 코대원에스시럽의 거담 효과를 확인하기 위하여 효력시험을 수행하였다. phenol red 정량검사를 실시한 결과 각 대조 투여군 대비 코대원에스시럽 투여군에서 phenol red 배출이 통계학적으로 유의하게 증가하였다.\n3) 독성시험 정보\n랫드에서 4주 반복투여독성시험 및 2주 회복시험 (독성동태시험 포함) 결과 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽을 혼합하여 투여하였을 때 독성학적으로 유의할만한 상승작용이나 새로운 독성은 관찰되지 않았다.",
                                    "CMN_TMDC_GDNC_CNTE": "",
                                    "imgHex": ""
                                }
                            },
                            {
                                "No": "1",
                                "diagDate": "20221202",
                                "diagType": "약국",
                                "presCnt": "0",
                                "medicineNm": "아틴정 (Atin Tab.)",
                                "medicineEffect": "기타의 알레르기용약",
                                "dosageDay": "5",
                                "detailObj": {
                                    "MEDI_PRDC_NM": "아틴정",
                                    "CMPN_NM": "아젤라스틴염산염(Azelastine Hydrochloride)",
                                    "TMSG_GNL_SPCD": "1",
                                    "SNGL_CMTN_YN": "",
                                    "UPSO_NAME": "한국프라임제약",
                                    "UPSO1": "",
                                    "FOML_CD_XPLN_CNTE": "정제",
                                    "MDCT_PATH_XPLN_CNTE": "경구(내용고형)",
                                    "MOHW_CLSF": "기타의 알레르기용약(149)",
                                    "ATC_STND_CD": "R06AX19 : AZELASTINE",
                                    "NATN_CD_ECEP_RPST_CD": "663601280",
                                    "KPIC_PRDC_CD": "A11AOOOOO4489",
                                    "KPIC_EFMD": "아젤라스틴염산염(Azelastine Hydrochloride) : 알러지 질환 (비염, 가려움증 등 포함) < 항히스타민제 < 제2세대",
                                    "CMPN_NM_2": "없음",
                                    "AGE_INCP_CNTE": "없음",
                                    "PRGW_GRDE_XPLN_CNTE": "없음",
                                    "EFFT_EFT_CNTE": "기관지천식, 알레르기성 비염, 두드러기, 습진, 피부염, 아토피성 피부염, 피부소양증, 가려움",
                                    "USAG_CPCT_CNTE": "염산아젤라스틴으로서 1회 1mg, 기관지천식인 경우에는 1회 2mg 을 아침식사후 및 취침전에 경구투여한다. 연령, 증상에 따라 적절히 증감한다.",
                                    "USE_ATNT_MTT_CNTE": "1. 다음 환자에는 투여하지 말 것\n6세 이하의 유아\n\n2. 이상반응\n1) 정신신경계 : 졸음, 때때로 권태감, 수족마비, 드물게 비틀거림 등이 나타날 수 있다. \n2) 소화기계 : 때때로 구갈, 구역, 구토, 입안의 기침, 드물게 식욕부진, 복통, 변비, 설사, 위부불쾌감 등이 나타날 수 있다. \n3) 순환기계 : 드물게 얼굴이 달아오름, 숨가쁨 등이 나타날 수 있다. \n4) 호흡기계 : 비건조가 나타날 수 있다.\n5) 간장 : 때때로 트랜스아미나제의 활성을 상승시키는 수가 있다. 드물게 AST, ALT, Al-P의 상승이 나타날 수 있다. \n6) 과민증 : 때로는 발진 등이 나타날 수 있으므로 이러한 증상이 나타날 경우에는 투여를 중지한다.\n7) 비뇨기계 : 배뇨곤란, 혈뇨, 드물게 빈뇨가 나타날 수 있다. \n8) 혈액계 : 드물게 백혈구 증가가 나타날 수 있다. \n9) 기타 : 부종, 월경이상이 나타날 수 있다.\n\n3. 일반적 주의\n1) 졸음을 유발할 수 있으므로 이 약을 투여중인 환자는 자동차 운전 등 위험한 기계조작을 하지 않도록 주의한다.\n2) 장기 스테로이드 요법을 받고 있는 환자에서 이 약 투여에 의해 스테로이드를 감량하고자 하는 경우에는 충분한 관리하에 천천히 한다.\n3) 기관지 천식에 사용하는 경우, 이 약은 이미 일어나고 있는 발작을 빠르게 경감시키는 약물이 아님을 환자에게 충분히 설명할 필요가 있다.\n4) 이 약을 계절성 환자에 투여하고자할 때에는 호발계절을 고려하여 그전에 투여를 시작하고 호발 계절의 종료시까지 계속하여 투여하는 것이 바람직하다.\n\n4. 상호작용\n알코올의 섭취에 의해 진정 작용이 증강될수 있으며 시메티딘과 병용투여시에도 주의한다.\n\n5. 임부 및 수유부에 대한 투여\n1) 동물 실험에서 대량투여(임상 용량의 370배 이상)에 의해 기형발생이 보고되고 있으므로 임부 또는 임신하고 있을 가능성이 있는 부인에게는 치료상의 유익성이 위험성을 상회한다고 판단되는 경우에만 투여한다.\n2) 동물실험(랫트)에서 유즙중에 이행하는 것이 보고되어 있으므로 수유중의 부인에는 투여하지 않는 것이 바람직하나 부득이 투여할 경우에는 수유를 중단한다. \n\n6. 소아에 대한 투여\n미숙아, 신생아, 영아 및 유아에 대한 안전성이 확립되어 있지 않다(사용경험이 적다.).\n\n7. 고령자에 대한 투여\n일반적으로 생리기능이 저하되어 있으므로 감량하는 등 주의한다. \n\n8. 적용상의 주의\n약물 자체의 맛인 쓴맛이 나타날 수 있다.\n\n9. 보관 및 취급상의 주의사항\n1)소아의 손이 닿지 않는 곳에 보관한다.\n2)직사일광을 피하고 되도록 습기가 적은 서늘한 곳에 밀전하여 보관한다.\n3)오용을 막고 품질의 보존을 위하여 다른 용기에 바꾸어 넣지 않는다.",
                                    "CMN_TMDC_GDNC_CNTE": "- 졸음이 올 수 있으므로 운전, 위험한 기계조작시 주의하세요.\n- 전문가와 상의없이 다른 감기약과 병용하지 마세요.\n- 이 약의 투여기간 동안에는 가능한 금주하세요.\n- 6세 이하의 유아에게 투여하지 마세요.",
                                    "imgHex": ""
                                }
                            },
                            {
                                "No": "1",
                                "diagDate": "20221202",
                                "diagType": "약국",
                                "presCnt": "0",
                                "medicineNm": "피드로정 (Pidro Tab.)",
                                "medicineEffect": "진해거담제",
                                "dosageDay": "5",
                                "detailObj": {
                                    "MEDI_PRDC_NM": "피드로정",
                                    "CMPN_NM": "레보드로프로피진(Levodropropizine)",
                                    "TMSG_GNL_SPCD": "1",
                                    "SNGL_CMTN_YN": "",
                                    "UPSO_NAME": "한국프라임제약",
                                    "UPSO1": "",
                                    "FOML_CD_XPLN_CNTE": "정제",
                                    "MDCT_PATH_XPLN_CNTE": "경구(내용고형)",
                                    "MOHW_CLSF": "진해거담제(222)",
                                    "ATC_STND_CD": "R05DB27 : LEVODROPROPIZINE",
                                    "NATN_CD_ECEP_RPST_CD": "663602590",
                                    "KPIC_PRDC_CD": "A11APPPPP0661",
                                    "KPIC_EFMD": "레보드로프로피진(Levodropropizine) : 호흡기계질환 < 진해제 < 말초성",
                                    "CMPN_NM_2": "없음",
                                    "AGE_INCP_CNTE": "없음",
                                    "PRGW_GRDE_XPLN_CNTE": "없음",
                                    "EFFT_EFT_CNTE": "다음 질환에서의 기침 : 급·만성기관지염",
                                    "USAG_CPCT_CNTE": "[허가사항변경(2010년 재평가) 의약품관리과-7389호, 2011.12.29]\n\n(정제)(캡슐제)\n성인 : 레보드로프로피진으로서 1회 60 mg을 1일 3회 적어도 6시간 간격을 두고 경구투여한다.\n증상에 따라 적절히 증감한다.",
                                    "USE_ATNT_MTT_CNTE": "1. 다음 환자에는 투여하지 말 것.\n1) 이 약 또는 이 약의 구성성분에 과민반응이 있는 환자\n2) 기관지 점액 분비 증가 환자\n3) 점액섬모기능이상(카르타게너증후군, 섬모이상운동증) 환자\n4) 임부 또는 임신하고 있을 가능성이 있는 여성, 수유부\n5) 중증의 간장애 환자\n6) 이 약은 유당을 함유하고 있으므로, 갈락토오스 불내성(galactose intolerance), Lapp 유당분해효소 결핍증(Lapp lactase deficiency) 또는 포도당-갈락토오스 흡수장애(glucose-galactose malabsorption) 등의 유전적인 문제가 있는 환자에게는 투여하면 안 된다.\n2. 다음 환자에는 신중히 투여할 것.\n1) 중증 심부전 및 중증 신장부전 환자\n2) 고령자\n3) 만 2세 미만의 영아\n3. 이상반응\n1) 소화기계 : 구역, 탄산증, 소화불량, 설사, 구토\n2) 중추신경계 : 피로, 기능쇠약, 반수, 혼수, 두통, 어지러움\n3) 순환기계 : 심계항진\n4) 피부 : 매우 드물게 알레르기 반응\n5) 국내 시판 후 수집된 중대한 이상사례 분석·평가 결과 확인된 이상사례는 다음과 같다. 다만, 이로써 곧 해당성분과 다음의 이상사례 간에 인과관계가 입증된 것을 의미하는 것은 아니다.\n  면역계 : 아나필락시스 반응\n4. 일반적 주의\n드물게 반수상태가 초래되므로 운전이나 기계 조작 시 주의하며, 특히 알코올과 병용 시 작용이 증대 될 수 있다.\n5. 상호작용\n예민한 환자에게 진정제와 병용투여 시 주의한다.\n6. 임부 및 수유부에 대한 투여\n임부 또는 임신하고 있을 가능성이 있는 여성, 수유부에는 투여하지 않는다.\n7. 보관 및 취급상의 주의사항\n1) 어린이의 손이 닿지 않는 곳에 보관한다.\n2) 다른 용기에 바꾸어 넣는 것은 사고원인이 되거나, 품질유지면에서 바람직하지 않으므로 주의한다.\n",
                                    "CMN_TMDC_GDNC_CNTE": "- 만 2세 미만의 영아는 투여하지 마세요.\n- 1일 3회 적어도 6시간 간격을 두고 투여하세요.\n- 발진, 발적, 가려움증 등의 증상이 나타날 경우 전문가와 상의하세요.\n- 임부, 수유부는 투여하지 마세요.",
                                    "imgHex": ""
                                }
                            },
                            {
                                "No": "1",
                                "diagDate": "20221202",
                                "diagType": "약국",
                                "presCnt": "0",
                                "medicineNm": "펜세타정 (Phenceta Tab.)",
                                "medicineEffect": "해열, 진통, 소염제",
                                "dosageDay": "5",
                                "detailObj": {
                                    "MEDI_PRDC_NM": "펜세타정",
                                    "CMPN_NM": "아세트아미노펜제피세립(Acetaminophen Encapsulated)",
                                    "TMSG_GNL_SPCD": "2",
                                    "SNGL_CMTN_YN": "",
                                    "UPSO_NAME": "대원제약",
                                    "UPSO1": "",
                                    "FOML_CD_XPLN_CNTE": "정제",
                                    "MDCT_PATH_XPLN_CNTE": "경구(내용고형)",
                                    "MOHW_CLSF": "해열, 진통, 소염제(114)",
                                    "ATC_STND_CD": "N02BE01 : PARACETAMOL(ACETAMINOPHEN)",
                                    "NATN_CD_ECEP_RPST_CD": "671803310",
                                    "KPIC_PRDC_CD": "A11A1280B0036",
                                    "KPIC_EFMD": "아세트아미노펜제피세립(Acetaminophen Encapsulated) : 통증 질환 < 비마약성 진통제 < 중추성 진통제",
                                    "CMPN_NM_2": "없음",
                                    "AGE_INCP_CNTE": "없음",
                                    "PRGW_GRDE_XPLN_CNTE": "없음",
                                    "EFFT_EFT_CNTE": "1. 주효능·효과\n\n감기로 인한 발열 및 동통(통증), 두통, 신경통, 근육통, 월경통, 염좌통(삔 통증)2. 다음 질환에도 사용할 수 있다.\n\n치통, 관절통, 류마티양 동통(통증)",
                                    "USAG_CPCT_CNTE": "(경구 : 300mg, 325mg, 500mg )\nㆍ성인 : 아세트아미노펜으로서 1회 0.3-1.0g 1일 3-4회 경구투여한다.\nㆍ1일 최고 4g까지 투여할 수 있다.\nㆍ연령, 질환, 증상에 따라 적절히 증감한다.\n(어린이용 : 80mg, 160mg )\nㆍ다음 1회 용량을 1일 3-4회 경구투여 한다.\n(160mg) (80mg)\n11-14세 : 200-400mg (2정) (4정)\n7-10세 : 150-300mg (1-2정) (2-4정)\n3- 6세 : 100-200mg (1정) (2정)\n1- 2세 : 60-120mg (1정)\n3개월-1세미만: 30-60mg\n(어린이용 : 액제, 현탁액, 엘릭서제 )\n소아 : 이 약은 1회 10 ~15mg/kg의 용량을 4~6시간 간격으로 필요시 복용하며, 1일 최대 5회 (75mg/kg)를 넘지 않는다. 이 약 1회 용량은 몸무게 또는 나이에 따라 다음과 같다.\n(몸무게를 아는 경우에는 몸무게에 따른 용량으로 복용하는 것이 더 적절하다.)\n\n<TABLE style=\"TEXT-INDENT: 0px\" cellSpacing=0 borderColorDark=white borderColorLight=black border=1>\n<TBODY>\n<TR>\n<TD>\n연령</TD>\n<TD>\n몸무게(kg)</TD>\n<TD>\n아세트아미노펜으로서 용량</TD>\n<TD>\n1회용량</TD></TR>\n<TR>\n<TD>\n만 12세</TD>\n<TD>\n43kg 이상</TD>\n<TD>\n640mg</TD>\n<TD>\n20ml</TD></TR>\n<TR>\n<TD>\n만 11세</TD>\n<TD>\n38.0~42.9kg</TD>\n<TD>\n480mg</TD>\n<TD>\n15ml</TD></TR>\n<TR>\n<TD>\n만 9-10세</TD>\n<TD>\n30.0~37.9kg</TD>\n<TD>\n400mg</TD>\n<TD>\n12.5ml</TD></TR>\n<TR>\n<TD>\n만 6-8세</TD>\n<TD>\n21.0~29.9kg</TD>\n<TD>\n320mg</TD>\n<TD>\n10ml</TD></TR>\n<TR>\n<TD>\n만 4-5세</TD>\n<TD>\n16.0~20.9kg</TD>\n<TD>\n240mg</TD>\n<TD>\n7.5ml</TD></TR>\n<TR>\n<TD>\n만 2-3세</TD>\n<TD>\n12.0~15.9kg</TD>\n<TD>\n160mg</TD>\n<TD>\n5ml</TD></TR>\n<TR>\n<TD>\n12-23개월</TD>\n<TD>\n10.0~11.9kg</TD>\n<TD>\n120mg</TD>\n<TD>\n3.5ml</TD></TR>\n<TR>\n<TD>\n4-11개월</TD>\n<TD>\n7.0~ 9.9kg</TD>\n<TD>\n80mg</TD>\n<TD>\n2.5ml</TD></TR></TBODY></TABLE>",
                                    "USE_ATNT_MTT_CNTE": "1. 경고\n1) 매일 세잔 이상 정기적으로 술을 마시는 사람이 이 약이나 다른 해열진통제를 복용해야 할 경우 반드시 의사 또는 약사와 상의해야 한다. 이러한 사람이 이 약을 복용하면 간손상이 유발될 수 있다.\n2) 아세트아미노펜을 복용한 환자에서 매우 드물게 급성 전신성 발진성 농포증(급성 전신성 발진성 고름물집증)(AGEP), 스티븐스 - 존슨 증후군(SJS), 독성 표피 괴사용해(TEN)와 같은 중대한 피부 반응이 보고되었고, 이러한 중대한 피부반응은 치명적일 수 있다. 따라서 이러한 중대한 피부반응의 징후에 대하여 환자들에게 충분히 알리고, 이 약 투여 후 피부발진이나 다른 과민반응의 징후가 나타나면 즉시 복용을 중단하도록 하여야 한다.\n3) 이 약은 아세트아미노펜을 함유하고 있다. 아세트아미노펜으로 일일 최대 용량(4,000mg)을 초과할 경우 간손상을 일으킬 수 있으므로 이 약을 일일 최대 용량(4000mg)을 초과하여 복용하여서는 아니되며, 아세트아미노펜을 포함하는 다른 제품과 함께 복용하여서는 안 된다.\n2. 다음과 같은 사람은 이 약을 복용하지 말 것\n1) 이 약에 과민증 환자\n2) 소화성궤양 환자\n3) 심한 혈액 이상 환자\n4) 심한 간장애 환자\n5) 심한 신장(콩팥)장애 환자\n6) 심한 심장기능저하 환자\n7) 아스피린 천식(비스테로이드성 소염(항염)제에 의한 천식발작 유발) 또는 그 병력이 있는 환자\n8) 다음의 약물을 복용한 환자 : 바르비탈계 약물, 삼환계 항우울제\n9) 알코올을 복용한 사람\n3. 다음과 같은 사람은 이약을 복용하기 전에 의사, 치과의사, 약사와 상의할 것\n1) 간장애 또는 그 병력이 있는 환자\n2) 신장(콩팥)장애 또는 그 병력이 있는 환자\n3) 소화성궤양의 병력이 있는 환자\n4) 혈액이상 또는 그 병력이 있는 환자\n5) 출혈경향이 있는 환자(혈소판기능이상이 나타날 수 있다.)\n6) 심장기능이상이 있는 환자\n7) 과민증의 병력이 있는 환자\n8) 기관지 천식 환자\n9) 고령자(노인)\n10) 임부 또는 수유부\n11) 와파린을 장기복용하는 환자\n12) 다음의 약물을 용한 환자 : 리튬, 치아짓계이뇨제\n4. 다음과 같을 경우 이 약의 복용을 즉각 중지하고 의사, 치과의사, 약사와 상의할 것. 상담시 가능한 한 이 첨부문서를 소지할 것\n1) 쇽: 쇽, 아나필락시양 증상(과민성유사증상 : 호흡곤란, 온몸이 붉어짐, 혈관부기, 두드러기 등), 천식발작\n2) 혈액: 혈소판 감소, 과립구감소, 용혈성(적혈구 파괴성)빈혈, 메트헤모글로빈혈증, 혈소판기능 저하(출혈시간 연장), 청색증\n3) 과민증: 과민증상(얼굴부기, 호흡곤란, 땀이 남, 저혈압, 쇽)\n4) 소화기: 구역, 구토, 식욕부진, 장기복용시 위장출혈, 소화성궤양, 천공(뚫림) 등의 위장관계 이상반응\n5) 피부: 발진, 알레르기 반응, 피부점막안 증후군(스티븐스-존슨 증후군), 중독성표피괴사용해(리엘 증후군)\n6) 기타: 장기투여시 만성간괴사, 급성췌장(이자)염, 만성간염, 신장(콩팥)독성\n7) 과량투여: 간장, 신장(콩팥), 심근의 괴사\n8) 이 약에 대해 시판 후 조사에서 보고된 추가적 이상반응은 아래 표와 같다. 발현빈도는 매우 흔히 ≥1/10, 흔히 ≥1/100 및 <1/10, 흔하지 않게 ≥1/1,000 및 <1/100, 드물게 ≥1/10,000 및 <1/1,000, 매우 드물게 <1/10,000 이다.\n표. 자발적 보고율로부터 추정한 빈도에 따른 이 약의 시판후 경험에서 밝혀진 이상반응\n\n<TABLE style=\"TEXT-INDENT: 0px\" cellSpacing=0 borderColorDark=white borderColorLight=black border=1>\n<TBODY>\n<TR>\n<TD>\n면역계 장애\n매우 드물게 : 아나필락시스 반응, 과민증\n피부 및 피하(피부밑)조직 장애\n매우 드물게 : 두드러기, 소양성(가려움) 발진, 발진</TD></TR></TBODY></TABLE>\n9) 국내 부작용 보고자료의 분석·평가에 따라 다음의 이상반응을 추가한다.\n&#x2981;간담도계: AST 상승, ALT 상승\n&#x2981;피부: 고정발진\n5. 기타 이 약을 복용시 주의할 사항\n1) 일반적주의\n(1) 과민증상을 예측하기 위해 충분한 상담을 받아야 한다.\n(2) 소염(항염)진통제에 의한 치료는 원인요법이 아닌 대증요법(증상별로 치료하는 방법)이다.\n(3) 만성질환에 사용하는 경우에는 다음 사항을 고려한다.\n\n가. 장기복용하는 경우 정기적인 임상검사(요검사, 혈액검사, 간기능검사 등)를 받고 이상이 있을 경우 감량(줄임), 복용중지 등의 적절한 조치를 해야 한다.\n나. 약물요법 이외의 치료법도 고려한다.\n(4) 급성질환에 사용하는 경우에는 다음 사항을 고려한다.\n\n가. 급성통증 및 발열의 정도를 고려하여 복용한다.\n나. 원칙적으로 동일한 약물의 장기복용은 피한다.\n다. 원인요법이 있는 경우에는 실시한다.\n(5) 소아 및 고령자(노인)는 최소 필요량을 복용하고 이상반응에 유의한다. 과도한 체온강하, 허탈, 사지냉각 등이 나타날 수 있으므로 특히 고열을 수반하는 소아 및 고령자(노인) 또는 소모성 질환 환자의 경우, 복용 후의 상태를 충분히 살펴야한다.\n(6) 다른 소염(항염)진통제와 함께 복용하는 것은 피한다.\n(7) 의사 또는 약사의 지시없이 통증에 10일 이상(성인)또는 5일 이상(소아) 복용하지 않고 발열에 3일 이상 복용하지 않는다. 통증이나 발열 증상이 지속되거나 악화될 경우, 또는 새로운 증상이 나타날 경우 의사 또는 약사와 상의한다.\n(8) 이 약 복용시 감염증을 겉으로 나타나지 않게 할 수 있으므로 감염증이 합병된 환자의 경우에 의사처방에 따라 적절한 항균제를 함께 복용해야 한다.\n2) 과량투여시의 처치\n이 약을 과량복용시 어떠한 명백한 증상이나 징후가 없더라도 신속하게 의학적 처치를 받아야 한다. 10~12시간 이내에 N-아세틸시스테인 정맥주사를 투여받거나 메치오닌을 경구복용하여 간을 보호해야한다.\n6. 저장상의 주의사항\n1) 어린이의 손이 닿지 않는 곳에 보관한다.\n2) 의약품을 원래의 용기에서 꺼내어 다른 용기에 보관하는 것은 의약품의 오용(잘못 사용)에 따른 사고 발생이나 의약품 품질 저하의 원인이 될 수 있으므로 원래의 용기에 넣고 꼭 닫아 보관한다.",
                                    "CMN_TMDC_GDNC_CNTE": "- 충분한 물과 함께 투여하세요.\n- 정기적으로 술을 마시는 사람은 이 약 투여전 반드시 전문가와 상의하세요.\n- 황달 등 간기능 이상징후가 나타날 경우에는 전문가와 상의하세요.\n- 전문가와 상의없이 다른 소염진통제와 병용하지 마세요.",
                                    "imgHex": ""
                                }
                            }
                        ]
                    },
                    {
                        "No": "2",
                        "pharmNm": "권내과의원[구로구 경인로40길]",
                        "medDate": "20221202",
                        "medType": "일반외래",
                        "medCnt": "1",
                        "presCnt": "1",
                        "dosageDay": "1",
                        "medList": []
                    },
                    {
                        "No": "3",
                        "pharmNm": "가산디지털내과의원[금천구 가산디지털1로]",
                        "medDate": "20221114",
                        "medType": "일반외래",
                        "medCnt": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "medList": []
                    },
                    {
                        "No": "4",
                        "pharmNm": "한사랑치과의원[동작구 만양로]",
                        "medDate": "20221011",
                        "medType": "치과외래",
                        "medCnt": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "medList": []
                    },
                    {
                        "No": "5",
                        "pharmNm": "아름다운미소치과의원[동작구 양녕로]",
                        "medDate": "20220425",
                        "medType": "치과외래",
                        "medCnt": "1",
                        "presCnt": "0",
                        "dosageDay": "1",
                        "medList": []
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
            "list": []
        },
        "outE4030": {
            "list": []
        },
        "outC0002": {
            "list": [
                {
                    "subject": "01",
                    "examinee": "",
                    "sublist": [
                        {
                            "No": "1",
                            "pharmNm": "좋은약국[구로구 경인로40길]",
                            "medDate": "20221202",
                            "medType": "처방조제",
                            "medCnt": "1",
                            "presCnt": "1",
                            "dosageDay": "5",
                            "medList": [
                                {
                                    "No": "1",
                                    "diagDate": "20221202",
                                    "diagType": "약국",
                                    "presCnt": "0",
                                    "medicineNm": "코대원에스시럽 (Codaewon S Syrup)",
                                    "medicineEffect": "진해거담제",
                                    "dosageDay": "5",
                                    "detailObj": {
                                        "MEDI_PRDC_NM": "코대원에스시럽",
                                        "CMPN_NM": "DL-메틸에페드린염산염(DL-Methylephedrine Hydrochloride)\n디히드로코데인타르타르산염(Dihydrocodeine Bitartrate)\n염화암모늄(Ammonium Chloride)\n클로르페니라민말레산염(Chlorpheniramine Maleate)\n펠라고니움시도이데스11%에탄올추출물(1→8~10)(Pelargonium Sidoides 11% Ethanol Extract(1→8~10))",
                                        "TMSG_GNL_SPCD": "1",
                                        "SNGL_CMTN_YN": "",
                                        "UPSO_NAME": "대원제약",
                                        "UPSO1": "",
                                        "FOML_CD_XPLN_CNTE": "시럽제",
                                        "MDCT_PATH_XPLN_CNTE": "경구(내용액제)",
                                        "MOHW_CLSF": "진해거담제(222)",
                                        "ATC_STND_CD": "undefined : undefined",
                                        "NATN_CD_ECEP_RPST_CD": "",
                                        "KPIC_PRDC_CD": "2020071600007",
                                        "KPIC_EFMD": "",
                                        "CMPN_NM_2": "없음",
                                        "AGE_INCP_CNTE": "없음",
                                        "PRGW_GRDE_XPLN_CNTE": "없음",
                                        "EFFT_EFT_CNTE": "급성 기관지염의 증상 및 징후 개선",
                                        "USAG_CPCT_CNTE": "이 약은 성인 1회 1포(20 mL), 1일 3회 식후 경구 투여한다.",
                                        "USE_ATNT_MTT_CNTE": "1. 경고\n중증의 호흡 억제 위험이 증가할 수 있으니 18세 미만의 비만, 폐색성 수면 무호흡증후군 또는 중증 폐 질환을 가진 환자에게 투여를 피한다.\n2. 다음 환자에는 투여하지 말 것\n1) 이 약 또는 이 약의 구성성분에 대한 과민반응 및 그 병력이 있는 환자\n2) MAO억제제(항우울제, 정신병치료제, 감정조절제, 항파킨슨제 등)를 복용하고 있거나 복용을 중단한 후 2주 이내의 환자\n3) 12세 미만의 소아(‘소아에 대한 투여’항 참조)\n4) 임부 및 수유부\n5) 녹내장 환자(항콜린 작용에 의해 안압이 상승되어 녹내장이 악화될 수 있다.)\n6) 전립선비대 등 하부요로폐색성 질환 환자\n7) 출혈경향의 증가 환자, 응고억제제 복용환자\n8) 중증의 간질환 및 신질환 환자\n3. 다음 환자에는 신중히 투여할 것\n1) 본인, 양친 또는 형제 등이 두드러기, 접촉피부염, 알레르기비염, 편두통, 음식물알레르기 등을 일으키기 쉬운 체질을 갖고 있는 사람\n2) 지금까지 약에 의해 알레르기 증상(예, 발열, 발진, 관절통, 가려움 등)을 일으킨 적이 있는 사람\n3) 간장애, 신장애, 갑상샘질환, 당뇨병 등이 있는 사람, 허약자 또는 고열이 있는 사람\n4) 순환기계 질환, 고혈압등 심혈관계 질환 환자 또는 고령자\n5) 임신하고 있을 가능성이 있는 여성\n6) 안압상승 또는 배뇨장애 환자\n7) 다음과 같은 기침이 있는 사람\n흡연, 천식, 만성 기관지염, 폐기종, 기관지확장증, 과도한 가래가 동반되는 기침, 1주 이상 지속 또는 재발되는 기침, 만성 기침, 발열·발진이나 지속적인 두통이 동반되는 기침\n8) 협착성소화성궤양 또는 유문십이지장 폐색 환자(클로르페니라민의 항콜린 작용에 의해 평활근의 운동억제, 긴장저하가 일어나 증상이 악화될 수 있다.)\n9) 간질 환자\n10) 이 약은 카라멜을 함유하고 있으므로 이 성분에 과민하거나 알레르기 병력이 있는 환자\n4. 이상반응\n1) 임상시험\n이 약에 대한 안전성을 19세 이상의 무작위배정된 급성기관지염 환자 204명을 대상으로 활성대조약(디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽)을 대조로 하여 임상시험에서 평가하였다. 7일의 치료기간 동안 코대원에스시럽에서 흔하게 보고된 이상반응은 구강건조 2.99%(2/67명), 오심, 졸음, 안면부종이 각 1.49%(1/67명)이었다. 이 중 안면부종을 제외하고 모두 코대원에스시럽과 인과관계가 있다고 평가한 이상약물반응이었다. 다음 표1는 이 임상시험에서 인과관계와 상관없이 전체투여군에서 발생한 이상반응의 발생빈도를 요약한 것이다.\n\n<TABLE style=\"TEXT-INDENT: 0px\" cellSpacing=0 borderColorDark=white borderColorLight=black border=1>\n<TBODY>\n<TR>\n<TD colSpan=5>표1. 이 약 임상시험 중 발생한 이상반응</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: center\">기관</TD>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 84.6pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: center\">코대원에스시럽군\n<P style=\"TEXT-ALIGN: center\">(N = 67)\n<P style=\"TEXT-ALIGN: center\">N(%)</TD>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 84.6pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: center\">디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽군\n<P style=\"TEXT-ALIGN: center\">(N = 70)\n<P style=\"TEXT-ALIGN: center\">N(%)</TD>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 184px; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: center\">펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽군\n<P style=\"TEXT-ALIGN: center\">(N = 65)\n<P style=\"TEXT-ALIGN: center\">N(%)</TD>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 100px; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: center\">전체투여군\n<P style=\"TEXT-ALIGN: center\">(N = 202)\n<P style=\"TEXT-ALIGN: center\">N(%)</TD></TR>\n<TR>\n<TD colSpan=5>소화계 장애</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">구강건조</TD>\n<TD style=\"TEXT-ALIGN: right\">2(2.99) &nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.43)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">3(1.49)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">오심</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.49) &nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.54)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">2(0.99)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">소화불량</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0) &nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.54)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">위염</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.54)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD colSpan=5>신경계 장애</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">졸음</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.49)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">3(4.29)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">2(3.08)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">6(2.97)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">어지러움</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.43)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD colSpan=5>전신 및 투여부위</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">안면 부종</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.49)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.43)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">2(0.99)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD style=\"HEIGHT: 2.82pt; BORDER-TOP-COLOR: #000000; WIDTH: 97.55pt; VERTICAL-ALIGN: middle; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: #000000; BORDER-RIGHT-COLOR: #000000\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 11.8pt\">발열</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.54)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD colSpan=5>감염</TD></TR>\n<TR>\n<TD>&nbsp;&nbsp;&nbsp; 상기도감염</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.54)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR>\n<TR>\n<TD colSpan=5>호흡기, 흉부 및 종격장애</TD></TR>\n<TR>\n<TD>&nbsp;&nbsp;&nbsp; 비강건조</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(1.43)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">0(0)&nbsp;&nbsp;</TD>\n<TD style=\"TEXT-ALIGN: right\">1(0.50)&nbsp;&nbsp;</TD></TR></TBODY></TABLE>2) 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽\n① 쇼크 : 청색증, 호흡곤란, 흉부불쾌감, 혈압저하 등\n② 과민반응 : 발진, 발적, 가려움, 광민감반응, 박탈피부염, 두드러기, 단일수축, 근허약, 협조불능\n③ 소화기계 : 구역, 구토, 변비, 식욕부진, 구갈(지속적이거나 심한), 가슴쓰림, 소화불량, 복통, 설사\n④ 정신신경계 : 어지럼, 불안, 떨림, 불면, 졸음, 진정, 신경과민, 두통, 초조감, 복시, 이명, 전정장애, 이상황홀감, 정서불안, 히스테리, 진전, 신경염, 협조이상, 감각이상, 흐린시력, 집중력감소, 권태감, 경련, 착란\n⑤ 비뇨기계 : 배뇨곤란, 빈뇨, 요폐, 요저류\n⑥ 순환기계 : 저혈압, 심계항진, 빈맥, 부정맥, 기외수축, 간염, 황달\n⑦ 호흡기계 : 코 또는 기도의 건조, 기관분비액의 점성화, 천명, 코막힘\n⑧ 혈액계 : 용혈성빈혈, 혈소판감소, 재생불량성빈혈, 무과립구증\n⑨ 기타 : 오한, 발한이상, 흉통, 피로감, 월경이상\n3) 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽\n① 때때로 위통, 속쓰림, 구역, 설사와 같은 위장장애가 발생할 수 있다.\n② 드물게 가벼운 잇몸출혈 또는 비출혈이 발생할 수 있다.\n③ 드물게 발진, 두드러기, 피부 및 점막의 가려움 등의 과민반응이 발생할 수 있다.\n④ 매우 드물게 안면부종, 호흡곤란, 혈압강하와 함께 중증의 과민반응이 발생할 수 있다.\n⑤ 드물게 간수치 증가가 발생할 수 있고 일부 환자에서 염증관련 간질환을 나타내기도 하였다.\n⑥ 혈소판수치 감소가 발생하였다. 그러나 이것은 기저질환에 의해 야기된 것일 수 있다.\n⑦ 시판 후 조사 결과\n국내에서 시판 후 조사기간 동안 727명을 대상으로 실시한 안전성 평가 결과, 유해사례 발현율은 인과관계와 상관없이 0.96%(7명/727명, 7건)이었고, 본제와 인과관계를 배제할 수 없는 약물유해사례 0.28%(2명/727명, 2건)로 구토 0.16%(1명/727명, 1건), 묽은변 0.16%(1명/727명, 1건)이었다. 이 중 중대한 유해사례 및 예상하지 못한 약물유해반응은 없었다.\n⑧ 약물유해반응 보고사례\n외국에서 이 약의 복용과 관련하여 간손상과 간염사례가 보고되고 있다. 이러한 사례들은 자발적으로 보고되었기 때문에, 신뢰성 있는 발생빈도는 도출되지 않았다.\n5. 일반적 주의\n1) 복용하는 동안 졸음이 오는 경우가 있으므로 자동차 운전 또는 기계류의 운전 조작을 피한다.\n2) 과량투여 하거나 장기연용하지 않는다.\n3) 이 약의 복용과 관련하여 간손상 징후(황달, 짙은 색 소변, 심한 상복부 통증, 식욕감퇴)가 나타나는 경우 즉시 복용을 중지한다.\n4) 발열이 수일간 지속되거나 호흡곤란, 혈담 등의 상태가 호전되지 않을 경우 즉시 의사와 상의한다.\n6. 상호작용\n1) 이 약의 주성분인 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽과 펠라고니움시도이데스 11%에탄올추출물(1→8~10)시럽의 병용투여시 임상적으로 유의한 약동학적 상호작용은 나타나지 않았다.\n2) 다른약물들과 본제의 약물상호작용에 대한 연구는 수행되지 않았다.\n3) 각 단일제의 허가사항을 참고하였을 때 약물상호작용에 대한 정보는 아래와 같다.\n&#x2022; 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽\n① 다음 약들과 병용투여하지 않는다: 다른 진해거담제, 감기약, 항히스타민제, 진정제 등\n② 알코올, 중추신경억제제 병용시 졸음을 유발할 수 있다.\n③ 클로르페니라민은 페니토인대사를 억제하여 페니토인 독성을 유발할 수 있다.\n&#x2022; 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽\n현재까지 상호작용이 보고된 바 없다. 이 약이 응고인자에 영향을 미칠 수 있기 때문에 Phenprocoumon, Wafarin과 같은 쿠마린계와의 병용투여시 응고저해 증강효과를 배제할 수 없다. 건강한 피험자들을 대상으로 한 임상시험에서 이 약과 페녹시메틸페니실린(penicillin V) 간의 상호작용이 없었다.\n7. 임부 및 수유부에 대한 투여\n1) 임부 및 임신하고 있을 가능성이 있는 여성에 대한 안전성이 확립되어 있지 않으므로 투여하지 않는다.\n2) 이 약이 유즙 분비를 억제하고 모유로 이행될 수 있으므로 수유부에게 투여하지 않는다.\n8. 소아에 대한 투여\n1) 이 약은 19세 미만의 소아 및 청소년에서의 안전성 및 유효성은 확립되어 있지 않다.\n2) 소아에 과량 투여하면 환각, 흥분, 경련, 사망을 일으킬 수 있으므로 특히 주의한다.\n3) 중증 호흡억제가 나타날 수 있으니 12세 미만 소아에게 투여하지 말아야한다(12세 미만 소아는 호흡억제 감수성이 크다. 12세 미만 소아에서 사망을 포함하는 중증 호흡억제 위험이 크다는 국외보고가 있다.).\n9. 고령자에 대한 투여\n일반적으로 고령자는 생리기능이 저하되어 있으므로 환자의 상태를 관찰하여 신중히 투여해야 한다.\n10. 과량투여시의 처치\n클로르페니라민의 치사량은 체중 kg당 25 ∼ 50 mg이다. 증상으로는 진정, 중추신경계 비정상적 자극, 중독성 정신병, 경련, 무호흡, 정신착란, 항콜린 효과, 실조증, 부정맥을 비롯한 심혈관계 허탈증 등이 나타날 수 있으며 이 때에는 토근시럽을 이용해 구토를 유발시키거나 위세척을 한다.\n11. 보관 및 취급상의 주의사항\n1) 어린이의 손이 닿지 않는 장소에 보관한다.\n2) 직사광선을 피하고 되도록 습기가 적은 서늘한 곳에 밀전하여 보관한다.\n3) 오용을 막고 품질의 보존을 위하여 다른 용기에 바꾸어 넣지 않는다.\n\n\n\n12. 전문가를 위한 정보\n1) 임상시험 정보\n① 약물-약물 상호작용 임상시험\n총 30명의 건강한 남성 대상자에서 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 단독투여에 대한 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽의 병용 투여 시의 안전성과 약동학적 특성에 대해 평가하기 위해 공개, 무작위배정, 공복, 경구 투여, 2군 2기 교차시험의 형태로 임상시험을 수행하였다. 그 결과 약동학적 특성의 경우 총 27명의 대상자가 완료하였으며 각 성분의 C<SUB>max</SUB> 및 AUC<SUB>last</SUB> 에 대한 기하평균비와 90% 신뢰구간은 디히드로코데인 0.931[0.856 &#x2013; 1.013], 1.000[0.960 &#x2013; 1.041], dl-메틸에페드린 0.955[0.902 &#x2013; 1.012], 1.004[0.978 &#x2013; 1.030], 클로르페니라민 0.980[0.936 &#x2013; 1.025], 1.009[0.964 &#x2013; 1.057]로 체내 노출에서 동등한 것으로 확인되었다.\n② 치료적 확증 임상시험\n총 204명의 급성 기관지염 환자를 무작위배정하여 다기관, 무작위배정, 이중눈가림, 평행군, 활성대조, 우월성 임상시험을 실시하여 7일동안 코대원에스시럽(DW1601)을 시험약, 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽을 활성대조약으로 경구투여하였다.\n기저치 수치(연속형 변수)를 공변량으로 포함한 공분산분석으로 분석하였을 때 일차 유효성 평가 결과는 하기의 표와 같았으며 이 약 투여군이 활성대조약(디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽) 투여군에 비해 기저치 대비 4일 후 BSS 변화량이 더 컸으며, 이는 통계적으로 유의하였다(p = 0.0012, p = 0.0006).\n[기저치에서의 평균 BSS를 공변량으로 보정한 공분산분석(ANCOVA) 결과 기저치 대비 4일 후 BSS 변화량(시험군 vs 대조군1)]\n\n<TABLE style=\"TEXT-INDENT: 0px\" cellSpacing=0 borderColorDark=white borderColorLight=black border=1>\n<TBODY>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 133pt; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">측정값(FAS군)</TD>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 152.35pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">시험군(N=67)\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">코대원에스시럽</TD>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 152.4pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">대조군1(N=70)\n<P style=\"TEXT-ALIGN: justify\">디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">최소제곱평균</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 152.35pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-3.51±0.18</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 152.4pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-2.65±0.18</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">최소제곱평균 변화량</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-0.86±0.26</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">95% 신뢰구간\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">(최소제곱평균변화량)</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">[-1.37, -0.35]</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">p 값</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">0.0012</TD></TR></TBODY></TABLE>[기저치에서의 평균 BSS를 공변량으로 보정한 공분산분석(ANCOVA) 결과 기저치 대비 4일 후 BSS 변화량(시험군 vs 대조군2)]\n\n<TABLE style=\"TEXT-INDENT: 0px\" cellSpacing=0 borderColorDark=white borderColorLight=black border=1>\n<TBODY>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 133pt; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">측정값(FAS군)</TD>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 152.35pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">시험군(N=67)\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">코대원에스시럽</TD>\n<TD style=\"BORDER-TOP-COLOR: black; WIDTH: 152.4pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">대조군2(N=64)\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">최소제곱평균</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 152.35pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-3.56±0.18</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 152.4pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-2.64±0.19</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">최소제곱평균 변화량</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">-0.92±0.26</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">95% 신뢰구간\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">(최소제곱평균변화량)</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">[-1.44, -0.40]</TD></TR>\n<TR>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 133pt; VERTICAL-ALIGN: top; BORDER-LEFT-COLOR: black; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\">\n<P style=\"TEXT-ALIGN: justify; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">p 값</TD>\n<TD style=\"BORDER-TOP-COLOR: #000000; WIDTH: 304.75pt; BORDER-LEFT-COLOR: #000000; BORDER-BOTTOM-COLOR: black; BORDER-RIGHT-COLOR: black\" colSpan=2>\n<P style=\"TEXT-ALIGN: center; MARGIN-LEFT: 0cm; MARGIN-RIGHT: 0cm\">0.0006</TD></TR></TBODY></TABLE>2) 약리시험 정보\n디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽(대조 투여군) 대비 코대원에스시럽의 거담 효과를 확인하기 위하여 효력시험을 수행하였다. phenol red 정량검사를 실시한 결과 각 대조 투여군 대비 코대원에스시럽 투여군에서 phenol red 배출이 통계학적으로 유의하게 증가하였다.\n3) 독성시험 정보\n랫드에서 4주 반복투여독성시험 및 2주 회복시험 (독성동태시험 포함) 결과 디히드로코데인타르타르산염, dl-메틸에페드린염산염, 클로르페니라민말레산염, 염화암모늄 복합시럽 및 펠라고니움시도이데스11%에탄올추출물(1→8~10)시럽을 혼합하여 투여하였을 때 독성학적으로 유의할만한 상승작용이나 새로운 독성은 관찰되지 않았다.",
                                        "CMN_TMDC_GDNC_CNTE": "",
                                        "imgHex": ""
                                    }
                                },
                                {
                                    "No": "1",
                                    "diagDate": "20221202",
                                    "diagType": "약국",
                                    "presCnt": "0",
                                    "medicineNm": "아틴정 (Atin Tab.)",
                                    "medicineEffect": "기타의 알레르기용약",
                                    "dosageDay": "5",
                                    "detailObj": {
                                        "MEDI_PRDC_NM": "아틴정",
                                        "CMPN_NM": "아젤라스틴염산염(Azelastine Hydrochloride)",
                                        "TMSG_GNL_SPCD": "1",
                                        "SNGL_CMTN_YN": "",
                                        "UPSO_NAME": "한국프라임제약",
                                        "UPSO1": "",
                                        "FOML_CD_XPLN_CNTE": "정제",
                                        "MDCT_PATH_XPLN_CNTE": "경구(내용고형)",
                                        "MOHW_CLSF": "기타의 알레르기용약(149)",
                                        "ATC_STND_CD": "R06AX19 : AZELASTINE",
                                        "NATN_CD_ECEP_RPST_CD": "663601280",
                                        "KPIC_PRDC_CD": "A11AOOOOO4489",
                                        "KPIC_EFMD": "아젤라스틴염산염(Azelastine Hydrochloride) : 알러지 질환 (비염, 가려움증 등 포함) < 항히스타민제 < 제2세대",
                                        "CMPN_NM_2": "없음",
                                        "AGE_INCP_CNTE": "없음",
                                        "PRGW_GRDE_XPLN_CNTE": "없음",
                                        "EFFT_EFT_CNTE": "기관지천식, 알레르기성 비염, 두드러기, 습진, 피부염, 아토피성 피부염, 피부소양증, 가려움",
                                        "USAG_CPCT_CNTE": "염산아젤라스틴으로서 1회 1mg, 기관지천식인 경우에는 1회 2mg 을 아침식사후 및 취침전에 경구투여한다. 연령, 증상에 따라 적절히 증감한다.",
                                        "USE_ATNT_MTT_CNTE": "1. 다음 환자에는 투여하지 말 것\n6세 이하의 유아\n\n2. 이상반응\n1) 정신신경계 : 졸음, 때때로 권태감, 수족마비, 드물게 비틀거림 등이 나타날 수 있다. \n2) 소화기계 : 때때로 구갈, 구역, 구토, 입안의 기침, 드물게 식욕부진, 복통, 변비, 설사, 위부불쾌감 등이 나타날 수 있다. \n3) 순환기계 : 드물게 얼굴이 달아오름, 숨가쁨 등이 나타날 수 있다. \n4) 호흡기계 : 비건조가 나타날 수 있다.\n5) 간장 : 때때로 트랜스아미나제의 활성을 상승시키는 수가 있다. 드물게 AST, ALT, Al-P의 상승이 나타날 수 있다. \n6) 과민증 : 때로는 발진 등이 나타날 수 있으므로 이러한 증상이 나타날 경우에는 투여를 중지한다.\n7) 비뇨기계 : 배뇨곤란, 혈뇨, 드물게 빈뇨가 나타날 수 있다. \n8) 혈액계 : 드물게 백혈구 증가가 나타날 수 있다. \n9) 기타 : 부종, 월경이상이 나타날 수 있다.\n\n3. 일반적 주의\n1) 졸음을 유발할 수 있으므로 이 약을 투여중인 환자는 자동차 운전 등 위험한 기계조작을 하지 않도록 주의한다.\n2) 장기 스테로이드 요법을 받고 있는 환자에서 이 약 투여에 의해 스테로이드를 감량하고자 하는 경우에는 충분한 관리하에 천천히 한다.\n3) 기관지 천식에 사용하는 경우, 이 약은 이미 일어나고 있는 발작을 빠르게 경감시키는 약물이 아님을 환자에게 충분히 설명할 필요가 있다.\n4) 이 약을 계절성 환자에 투여하고자할 때에는 호발계절을 고려하여 그전에 투여를 시작하고 호발 계절의 종료시까지 계속하여 투여하는 것이 바람직하다.\n\n4. 상호작용\n알코올의 섭취에 의해 진정 작용이 증강될수 있으며 시메티딘과 병용투여시에도 주의한다.\n\n5. 임부 및 수유부에 대한 투여\n1) 동물 실험에서 대량투여(임상 용량의 370배 이상)에 의해 기형발생이 보고되고 있으므로 임부 또는 임신하고 있을 가능성이 있는 부인에게는 치료상의 유익성이 위험성을 상회한다고 판단되는 경우에만 투여한다.\n2) 동물실험(랫트)에서 유즙중에 이행하는 것이 보고되어 있으므로 수유중의 부인에는 투여하지 않는 것이 바람직하나 부득이 투여할 경우에는 수유를 중단한다. \n\n6. 소아에 대한 투여\n미숙아, 신생아, 영아 및 유아에 대한 안전성이 확립되어 있지 않다(사용경험이 적다.).\n\n7. 고령자에 대한 투여\n일반적으로 생리기능이 저하되어 있으므로 감량하는 등 주의한다. \n\n8. 적용상의 주의\n약물 자체의 맛인 쓴맛이 나타날 수 있다.\n\n9. 보관 및 취급상의 주의사항\n1)소아의 손이 닿지 않는 곳에 보관한다.\n2)직사일광을 피하고 되도록 습기가 적은 서늘한 곳에 밀전하여 보관한다.\n3)오용을 막고 품질의 보존을 위하여 다른 용기에 바꾸어 넣지 않는다.",
                                        "CMN_TMDC_GDNC_CNTE": "- 졸음이 올 수 있으므로 운전, 위험한 기계조작시 주의하세요.\n- 전문가와 상의없이 다른 감기약과 병용하지 마세요.\n- 이 약의 투여기간 동안에는 가능한 금주하세요.\n- 6세 이하의 유아에게 투여하지 마세요.",
                                        "imgHex": ""
                                    }
                                },
                                {
                                    "No": "1",
                                    "diagDate": "20221202",
                                    "diagType": "약국",
                                    "presCnt": "0",
                                    "medicineNm": "피드로정 (Pidro Tab.)",
                                    "medicineEffect": "진해거담제",
                                    "dosageDay": "5",
                                    "detailObj": {
                                        "MEDI_PRDC_NM": "피드로정",
                                        "CMPN_NM": "레보드로프로피진(Levodropropizine)",
                                        "TMSG_GNL_SPCD": "1",
                                        "SNGL_CMTN_YN": "",
                                        "UPSO_NAME": "한국프라임제약",
                                        "UPSO1": "",
                                        "FOML_CD_XPLN_CNTE": "정제",
                                        "MDCT_PATH_XPLN_CNTE": "경구(내용고형)",
                                        "MOHW_CLSF": "진해거담제(222)",
                                        "ATC_STND_CD": "R05DB27 : LEVODROPROPIZINE",
                                        "NATN_CD_ECEP_RPST_CD": "663602590",
                                        "KPIC_PRDC_CD": "A11APPPPP0661",
                                        "KPIC_EFMD": "레보드로프로피진(Levodropropizine) : 호흡기계질환 < 진해제 < 말초성",
                                        "CMPN_NM_2": "없음",
                                        "AGE_INCP_CNTE": "없음",
                                        "PRGW_GRDE_XPLN_CNTE": "없음",
                                        "EFFT_EFT_CNTE": "다음 질환에서의 기침 : 급·만성기관지염",
                                        "USAG_CPCT_CNTE": "[허가사항변경(2010년 재평가) 의약품관리과-7389호, 2011.12.29]\n\n(정제)(캡슐제)\n성인 : 레보드로프로피진으로서 1회 60 mg을 1일 3회 적어도 6시간 간격을 두고 경구투여한다.\n증상에 따라 적절히 증감한다.",
                                        "USE_ATNT_MTT_CNTE": "1. 다음 환자에는 투여하지 말 것.\n1) 이 약 또는 이 약의 구성성분에 과민반응이 있는 환자\n2) 기관지 점액 분비 증가 환자\n3) 점액섬모기능이상(카르타게너증후군, 섬모이상운동증) 환자\n4) 임부 또는 임신하고 있을 가능성이 있는 여성, 수유부\n5) 중증의 간장애 환자\n6) 이 약은 유당을 함유하고 있으므로, 갈락토오스 불내성(galactose intolerance), Lapp 유당분해효소 결핍증(Lapp lactase deficiency) 또는 포도당-갈락토오스 흡수장애(glucose-galactose malabsorption) 등의 유전적인 문제가 있는 환자에게는 투여하면 안 된다.\n2. 다음 환자에는 신중히 투여할 것.\n1) 중증 심부전 및 중증 신장부전 환자\n2) 고령자\n3) 만 2세 미만의 영아\n3. 이상반응\n1) 소화기계 : 구역, 탄산증, 소화불량, 설사, 구토\n2) 중추신경계 : 피로, 기능쇠약, 반수, 혼수, 두통, 어지러움\n3) 순환기계 : 심계항진\n4) 피부 : 매우 드물게 알레르기 반응\n5) 국내 시판 후 수집된 중대한 이상사례 분석·평가 결과 확인된 이상사례는 다음과 같다. 다만, 이로써 곧 해당성분과 다음의 이상사례 간에 인과관계가 입증된 것을 의미하는 것은 아니다.\n  면역계 : 아나필락시스 반응\n4. 일반적 주의\n드물게 반수상태가 초래되므로 운전이나 기계 조작 시 주의하며, 특히 알코올과 병용 시 작용이 증대 될 수 있다.\n5. 상호작용\n예민한 환자에게 진정제와 병용투여 시 주의한다.\n6. 임부 및 수유부에 대한 투여\n임부 또는 임신하고 있을 가능성이 있는 여성, 수유부에는 투여하지 않는다.\n7. 보관 및 취급상의 주의사항\n1) 어린이의 손이 닿지 않는 곳에 보관한다.\n2) 다른 용기에 바꾸어 넣는 것은 사고원인이 되거나, 품질유지면에서 바람직하지 않으므로 주의한다.\n",
                                        "CMN_TMDC_GDNC_CNTE": "- 만 2세 미만의 영아는 투여하지 마세요.\n- 1일 3회 적어도 6시간 간격을 두고 투여하세요.\n- 발진, 발적, 가려움증 등의 증상이 나타날 경우 전문가와 상의하세요.\n- 임부, 수유부는 투여하지 마세요.",
                                        "imgHex": ""
                                    }
                                },
                                {
                                    "No": "1",
                                    "diagDate": "20221202",
                                    "diagType": "약국",
                                    "presCnt": "0",
                                    "medicineNm": "펜세타정 (Phenceta Tab.)",
                                    "medicineEffect": "해열, 진통, 소염제",
                                    "dosageDay": "5",
                                    "detailObj": {
                                        "MEDI_PRDC_NM": "펜세타정",
                                        "CMPN_NM": "아세트아미노펜제피세립(Acetaminophen Encapsulated)",
                                        "TMSG_GNL_SPCD": "2",
                                        "SNGL_CMTN_YN": "",
                                        "UPSO_NAME": "대원제약",
                                        "UPSO1": "",
                                        "FOML_CD_XPLN_CNTE": "정제",
                                        "MDCT_PATH_XPLN_CNTE": "경구(내용고형)",
                                        "MOHW_CLSF": "해열, 진통, 소염제(114)",
                                        "ATC_STND_CD": "N02BE01 : PARACETAMOL(ACETAMINOPHEN)",
                                        "NATN_CD_ECEP_RPST_CD": "671803310",
                                        "KPIC_PRDC_CD": "A11A1280B0036",
                                        "KPIC_EFMD": "아세트아미노펜제피세립(Acetaminophen Encapsulated) : 통증 질환 < 비마약성 진통제 < 중추성 진통제",
                                        "CMPN_NM_2": "없음",
                                        "AGE_INCP_CNTE": "없음",
                                        "PRGW_GRDE_XPLN_CNTE": "없음",
                                        "EFFT_EFT_CNTE": "1. 주효능·효과\n\n감기로 인한 발열 및 동통(통증), 두통, 신경통, 근육통, 월경통, 염좌통(삔 통증)2. 다음 질환에도 사용할 수 있다.\n\n치통, 관절통, 류마티양 동통(통증)",
                                        "USAG_CPCT_CNTE": "(경구 : 300mg, 325mg, 500mg )\nㆍ성인 : 아세트아미노펜으로서 1회 0.3-1.0g 1일 3-4회 경구투여한다.\nㆍ1일 최고 4g까지 투여할 수 있다.\nㆍ연령, 질환, 증상에 따라 적절히 증감한다.\n(어린이용 : 80mg, 160mg )\nㆍ다음 1회 용량을 1일 3-4회 경구투여 한다.\n(160mg) (80mg)\n11-14세 : 200-400mg (2정) (4정)\n7-10세 : 150-300mg (1-2정) (2-4정)\n3- 6세 : 100-200mg (1정) (2정)\n1- 2세 : 60-120mg (1정)\n3개월-1세미만: 30-60mg\n(어린이용 : 액제, 현탁액, 엘릭서제 )\n소아 : 이 약은 1회 10 ~15mg/kg의 용량을 4~6시간 간격으로 필요시 복용하며, 1일 최대 5회 (75mg/kg)를 넘지 않는다. 이 약 1회 용량은 몸무게 또는 나이에 따라 다음과 같다.\n(몸무게를 아는 경우에는 몸무게에 따른 용량으로 복용하는 것이 더 적절하다.)\n\n<TABLE style=\"TEXT-INDENT: 0px\" cellSpacing=0 borderColorDark=white borderColorLight=black border=1>\n<TBODY>\n<TR>\n<TD>\n연령</TD>\n<TD>\n몸무게(kg)</TD>\n<TD>\n아세트아미노펜으로서 용량</TD>\n<TD>\n1회용량</TD></TR>\n<TR>\n<TD>\n만 12세</TD>\n<TD>\n43kg 이상</TD>\n<TD>\n640mg</TD>\n<TD>\n20ml</TD></TR>\n<TR>\n<TD>\n만 11세</TD>\n<TD>\n38.0~42.9kg</TD>\n<TD>\n480mg</TD>\n<TD>\n15ml</TD></TR>\n<TR>\n<TD>\n만 9-10세</TD>\n<TD>\n30.0~37.9kg</TD>\n<TD>\n400mg</TD>\n<TD>\n12.5ml</TD></TR>\n<TR>\n<TD>\n만 6-8세</TD>\n<TD>\n21.0~29.9kg</TD>\n<TD>\n320mg</TD>\n<TD>\n10ml</TD></TR>\n<TR>\n<TD>\n만 4-5세</TD>\n<TD>\n16.0~20.9kg</TD>\n<TD>\n240mg</TD>\n<TD>\n7.5ml</TD></TR>\n<TR>\n<TD>\n만 2-3세</TD>\n<TD>\n12.0~15.9kg</TD>\n<TD>\n160mg</TD>\n<TD>\n5ml</TD></TR>\n<TR>\n<TD>\n12-23개월</TD>\n<TD>\n10.0~11.9kg</TD>\n<TD>\n120mg</TD>\n<TD>\n3.5ml</TD></TR>\n<TR>\n<TD>\n4-11개월</TD>\n<TD>\n7.0~ 9.9kg</TD>\n<TD>\n80mg</TD>\n<TD>\n2.5ml</TD></TR></TBODY></TABLE>",
                                        "USE_ATNT_MTT_CNTE": "1. 경고\n1) 매일 세잔 이상 정기적으로 술을 마시는 사람이 이 약이나 다른 해열진통제를 복용해야 할 경우 반드시 의사 또는 약사와 상의해야 한다. 이러한 사람이 이 약을 복용하면 간손상이 유발될 수 있다.\n2) 아세트아미노펜을 복용한 환자에서 매우 드물게 급성 전신성 발진성 농포증(급성 전신성 발진성 고름물집증)(AGEP), 스티븐스 - 존슨 증후군(SJS), 독성 표피 괴사용해(TEN)와 같은 중대한 피부 반응이 보고되었고, 이러한 중대한 피부반응은 치명적일 수 있다. 따라서 이러한 중대한 피부반응의 징후에 대하여 환자들에게 충분히 알리고, 이 약 투여 후 피부발진이나 다른 과민반응의 징후가 나타나면 즉시 복용을 중단하도록 하여야 한다.\n3) 이 약은 아세트아미노펜을 함유하고 있다. 아세트아미노펜으로 일일 최대 용량(4,000mg)을 초과할 경우 간손상을 일으킬 수 있으므로 이 약을 일일 최대 용량(4000mg)을 초과하여 복용하여서는 아니되며, 아세트아미노펜을 포함하는 다른 제품과 함께 복용하여서는 안 된다.\n2. 다음과 같은 사람은 이 약을 복용하지 말 것\n1) 이 약에 과민증 환자\n2) 소화성궤양 환자\n3) 심한 혈액 이상 환자\n4) 심한 간장애 환자\n5) 심한 신장(콩팥)장애 환자\n6) 심한 심장기능저하 환자\n7) 아스피린 천식(비스테로이드성 소염(항염)제에 의한 천식발작 유발) 또는 그 병력이 있는 환자\n8) 다음의 약물을 복용한 환자 : 바르비탈계 약물, 삼환계 항우울제\n9) 알코올을 복용한 사람\n3. 다음과 같은 사람은 이약을 복용하기 전에 의사, 치과의사, 약사와 상의할 것\n1) 간장애 또는 그 병력이 있는 환자\n2) 신장(콩팥)장애 또는 그 병력이 있는 환자\n3) 소화성궤양의 병력이 있는 환자\n4) 혈액이상 또는 그 병력이 있는 환자\n5) 출혈경향이 있는 환자(혈소판기능이상이 나타날 수 있다.)\n6) 심장기능이상이 있는 환자\n7) 과민증의 병력이 있는 환자\n8) 기관지 천식 환자\n9) 고령자(노인)\n10) 임부 또는 수유부\n11) 와파린을 장기복용하는 환자\n12) 다음의 약물을 용한 환자 : 리튬, 치아짓계이뇨제\n4. 다음과 같을 경우 이 약의 복용을 즉각 중지하고 의사, 치과의사, 약사와 상의할 것. 상담시 가능한 한 이 첨부문서를 소지할 것\n1) 쇽: 쇽, 아나필락시양 증상(과민성유사증상 : 호흡곤란, 온몸이 붉어짐, 혈관부기, 두드러기 등), 천식발작\n2) 혈액: 혈소판 감소, 과립구감소, 용혈성(적혈구 파괴성)빈혈, 메트헤모글로빈혈증, 혈소판기능 저하(출혈시간 연장), 청색증\n3) 과민증: 과민증상(얼굴부기, 호흡곤란, 땀이 남, 저혈압, 쇽)\n4) 소화기: 구역, 구토, 식욕부진, 장기복용시 위장출혈, 소화성궤양, 천공(뚫림) 등의 위장관계 이상반응\n5) 피부: 발진, 알레르기 반응, 피부점막안 증후군(스티븐스-존슨 증후군), 중독성표피괴사용해(리엘 증후군)\n6) 기타: 장기투여시 만성간괴사, 급성췌장(이자)염, 만성간염, 신장(콩팥)독성\n7) 과량투여: 간장, 신장(콩팥), 심근의 괴사\n8) 이 약에 대해 시판 후 조사에서 보고된 추가적 이상반응은 아래 표와 같다. 발현빈도는 매우 흔히 ≥1/10, 흔히 ≥1/100 및 <1/10, 흔하지 않게 ≥1/1,000 및 <1/100, 드물게 ≥1/10,000 및 <1/1,000, 매우 드물게 <1/10,000 이다.\n표. 자발적 보고율로부터 추정한 빈도에 따른 이 약의 시판후 경험에서 밝혀진 이상반응\n\n<TABLE style=\"TEXT-INDENT: 0px\" cellSpacing=0 borderColorDark=white borderColorLight=black border=1>\n<TBODY>\n<TR>\n<TD>\n면역계 장애\n매우 드물게 : 아나필락시스 반응, 과민증\n피부 및 피하(피부밑)조직 장애\n매우 드물게 : 두드러기, 소양성(가려움) 발진, 발진</TD></TR></TBODY></TABLE>\n9) 국내 부작용 보고자료의 분석·평가에 따라 다음의 이상반응을 추가한다.\n&#x2981;간담도계: AST 상승, ALT 상승\n&#x2981;피부: 고정발진\n5. 기타 이 약을 복용시 주의할 사항\n1) 일반적주의\n(1) 과민증상을 예측하기 위해 충분한 상담을 받아야 한다.\n(2) 소염(항염)진통제에 의한 치료는 원인요법이 아닌 대증요법(증상별로 치료하는 방법)이다.\n(3) 만성질환에 사용하는 경우에는 다음 사항을 고려한다.\n\n가. 장기복용하는 경우 정기적인 임상검사(요검사, 혈액검사, 간기능검사 등)를 받고 이상이 있을 경우 감량(줄임), 복용중지 등의 적절한 조치를 해야 한다.\n나. 약물요법 이외의 치료법도 고려한다.\n(4) 급성질환에 사용하는 경우에는 다음 사항을 고려한다.\n\n가. 급성통증 및 발열의 정도를 고려하여 복용한다.\n나. 원칙적으로 동일한 약물의 장기복용은 피한다.\n다. 원인요법이 있는 경우에는 실시한다.\n(5) 소아 및 고령자(노인)는 최소 필요량을 복용하고 이상반응에 유의한다. 과도한 체온강하, 허탈, 사지냉각 등이 나타날 수 있으므로 특히 고열을 수반하는 소아 및 고령자(노인) 또는 소모성 질환 환자의 경우, 복용 후의 상태를 충분히 살펴야한다.\n(6) 다른 소염(항염)진통제와 함께 복용하는 것은 피한다.\n(7) 의사 또는 약사의 지시없이 통증에 10일 이상(성인)또는 5일 이상(소아) 복용하지 않고 발열에 3일 이상 복용하지 않는다. 통증이나 발열 증상이 지속되거나 악화될 경우, 또는 새로운 증상이 나타날 경우 의사 또는 약사와 상의한다.\n(8) 이 약 복용시 감염증을 겉으로 나타나지 않게 할 수 있으므로 감염증이 합병된 환자의 경우에 의사처방에 따라 적절한 항균제를 함께 복용해야 한다.\n2) 과량투여시의 처치\n이 약을 과량복용시 어떠한 명백한 증상이나 징후가 없더라도 신속하게 의학적 처치를 받아야 한다. 10~12시간 이내에 N-아세틸시스테인 정맥주사를 투여받거나 메치오닌을 경구복용하여 간을 보호해야한다.\n6. 저장상의 주의사항\n1) 어린이의 손이 닿지 않는 곳에 보관한다.\n2) 의약품을 원래의 용기에서 꺼내어 다른 용기에 보관하는 것은 의약품의 오용(잘못 사용)에 따른 사고 발생이나 의약품 품질 저하의 원인이 될 수 있으므로 원래의 용기에 넣고 꼭 닫아 보관한다.",
                                        "CMN_TMDC_GDNC_CNTE": "- 충분한 물과 함께 투여하세요.\n- 정기적으로 술을 마시는 사람은 이 약 투여전 반드시 전문가와 상의하세요.\n- 황달 등 간기능 이상징후가 나타날 경우에는 전문가와 상의하세요.\n- 전문가와 상의없이 다른 소염진통제와 병용하지 마세요.",
                                        "imgHex": ""
                                    }
                                }
                            ]
                        },
                        {
                            "No": "2",
                            "pharmNm": "권내과의원[구로구 경인로40길]",
                            "medDate": "20221202",
                            "medType": "일반외래",
                            "medCnt": "1",
                            "presCnt": "1",
                            "dosageDay": "1",
                            "medList": []
                        },
                        {
                            "No": "3",
                            "pharmNm": "가산디지털내과의원[금천구 가산디지털1로]",
                            "medDate": "20221114",
                            "medType": "일반외래",
                            "medCnt": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "medList": []
                        },
                        {
                            "No": "4",
                            "pharmNm": "한사랑치과의원[동작구 만양로]",
                            "medDate": "20221011",
                            "medType": "치과외래",
                            "medCnt": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "medList": []
                        },
                        {
                            "No": "5",
                            "pharmNm": "아름다운미소치과의원[동작구 양녕로]",
                            "medDate": "20220425",
                            "medType": "치과외래",
                            "medCnt": "1",
                            "presCnt": "0",
                            "dosageDay": "1",
                            "medList": []
                        }
                    ]
                }
            ],
            "errYn": "N",
            "errMsg": ""
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
        "proxy": "210.205.121.116:23525",
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
        "device": "Windows",
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
