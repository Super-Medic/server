const request = require('request');
require('dotenv').config();

function postAPIfunction(url, bodyData){
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
function makeBodyData(data){
    return {
        loginMethod : 'EASY',
        loginOrgCd : data.loginOrgCd,
        resNm : data.name,
        resNo : data.birthday,
        mobileNo : data.mobileNo,
        mobileCo : data.mobileCo != null ? data.mobileCo : 'null',
        stepMode : 'nostep'
    }
}

module.exports = {
    postAPIfunction : postAPIfunction,
    makeBodyData : makeBodyData
}