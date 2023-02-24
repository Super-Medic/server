const request = require('request');
require('dotenv').config();

/**
 * HYPHEN API request 및 response 반환
 * @param {API uri} url 
 * @param {body DATA} bodyData 
 * @returns 성공시 API response 반환
 */
const postAPIfunction = (url, bodyData) => {
    return new Promise((res, rej) => {
        const options = {
            uri : url, 
            method: 'POST',
            headers: { 
                'Content-Type' : 'application/json',
                'user-id' : process.env.HYPHENUSERID,
                'Hkey' : process.env.HKEY,
                },
            body: JSON.stringify(bodyData)
        };
        request.post(options, function(err,httpResponse,body){ 
            if (err) rej();
            res(body)
        });
    });
}
/**
 * HYPHEN API 요청시 body에 들어갈 기본적인 정보 생성
 * @param {reqest Data} data 
 * @returns API 명세에 맞는 기본 JSON 형식의 body value
 */
const makeBodyData = (data) => {
    return {
        loginMethod : 'EASY',
        loginOrgCd : data.loginOrgCd,
        resNm : data.name,
        resNo : data.birthday,
        mobileNo : data.mobileNo,
        mobileCo : data.mobileCo != null ? data.mobileCo : 'null',
        stepMode : 'step',
        step : data.step,
        step_data : data.step_data != null ? data.step_data : ''
    }
}

module.exports = {
    postAPIfunction : postAPIfunction,
    makeBodyData : makeBodyData
}