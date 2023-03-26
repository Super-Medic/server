const mdbConn = require('../db_connection/mariaDBConn')

/**
 * 키 리스트 인자에 대응하는 value들을 return
 * @param {list} list 
 * @param {list} keyList 
 * @returns List
 */
function getDataByKeyListFunc(list, keyList){
    let returnData = {};
    for(let i=0;i<keyList.length;i++)
        returnData[keyList[i]] = list[keyList[i]]
    return returnData
}

/**
 * key와 value가 대응한다면 returnkey에 대응하는 value return
 * @param {lust} list 
 * @param {string} returnKey 
 * @param {string} key 
 * @param {string} value 
 * @returns 
 */
function getDataByKeyValueFunc(list,returnKey, key , value){
    if(list[key] == value){
        return (returnKey != null ? list[returnKey] : list);
    }
    return
}

/**
 * 복약 상세 내역 저장
 * @param {JSON} data 
 */
async function insertMedicineDetail(data){
    let sql = 'SELECT medicineNm FROM medicine WHERE medicineNm=?'
    let sql2 = 'INSERT INTO medicine(medicineNm, detail) VALUES(?, ?)'
    let info = {
        'medicineNm':data['MEDI_PRDC_NM'],
        'details': data
    }
    await mdbConn.dbSelect(sql, info['medicineNm'])
    .then((row) => {
        if(!row){
            let params = [info['medicineNm'], info['details']]
            mdbConn.dbInsert(sql2, params)
            .then((row) => {
                console.log("의약정보 저장")
            })
            .catch((err) => {
                res.status(500).send(err)
            })
        }
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

/**
 * data : JSON['data']['list']
 */
class makeParsingClass{
    constructor(data){
        this.data = data;
        this.dataCount = data.length;
    }
    get Count(){
        return this.dataCount;
    }

    /**
     * 키값에 대응하는 value 값들을 가지고 옴
     * @param {list} keyList KEY 리스트 
     * @param {int} idx 원본 JSON list 내 idx
     * @returns {JSON}
     */
    getDataByKeyList(keyList, idx = 0){
        let parseData = this.data[idx];
        let returnData = getDataByKeyListFunc(parseData, keyList);
        return returnData;
    }

    /**
     * 키값과 value가 같다면 return 다르다면 undefined return
     * @param {string} key 
     * @param {string} value 
     * @param {string} returnKey 
     * @param {idx} idx 
     * @returns 
     */
    getDataByKeyValue(key, value, returnKey = null, idx = 0){
        let parseData = this.data[idx];
        getDataByKeyValueFunc(parseData, returnKey, key, value)
    }

    /**
     * @param {string} listName JSON 내 원하는 리스트 KEY
     * @param {int} idx 전체 Data에서의 list 내에서 index
     * @returns {list} List 내에 있는 값 전부 return
     */
    getListDataAll(listName,idx=0){
        return this.data[idx][listName];
    }

    /**
     * list 안에서 객체 내에서 원한는 Key값들을 가지고 오는 함수
     * @param {string} listName JSON 내 원하는 리스트 KEY
     * @param {list} keyList 가지고 오고자 하는 Key값들
     * @param {int} idx 
     * @returns {list} 진료정보
     */
    getDataByKeyListInList(listName, keyList, idx = 0){
        let list = this.data[idx][listName];
        let returnList = []
        for(let j = 0; j < list.length; j++){
            returnList.push(getDataByKeyListFunc(list[j], keyList));
        }
        return returnList
    }

    /**
     * list 안 객체 내에서 넘겨준 key와 value가 일치하는 객체에서 returnkey의 값만 가지고 오는 함수
     * @param {string} listName 
     * @param {string} returnKey 
     * @param {string} key 
     * @param {list} valueList 
     * @param {int} idx 
     * @returns 건강검진
     */
    getDataByKeyValueInList(listName, returnKey, key, valueList, idx = 0){
        let list = this.data[idx][listName];
        let cnt = 0;
        let returnData = {}
        for(let j = 0; j<list.length; j++){
            while(cnt < valueList.length){ // ValueList가 JSON 내에 순서대로 있으며, 누락된 값이 없다면 while을 지우고 idx를 j로 변경하면 됨
                returnData[valueList[cnt]] = getDataByKeyValueFunc(list[j], returnKey, key, valueList[cnt])
                cnt++;
                break;
            }
        }
        return returnData
    }
    /**
     * list 안 객체 내의 list를 가지고 오는 method
     * @param {string} listName 
     * @param {string} secListName 
     * @param {list} KeyList 
     * @param {int} idx 
     * @returns 투약정보
     */
    getDataByKeyListInListInList(listName,secListName, KeyList, idx=0){
        let list = this.data[idx][listName];
        let returnList = [];
        for(let j = 0; j < list.length; j++){
            let returnData = {};
            returnData = getDataByKeyListFunc(list[j], KeyList);
            returnData[secListName] = list[j][secListName]
            returnList.push(returnData);
        }
        return returnList;
    }
}

module.exports = {
    makeParsingClass : makeParsingClass,
    insertMedicineDetail : insertMedicineDetail,
}