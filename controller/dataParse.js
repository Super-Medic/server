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
     * 사용처 : screenings(건강검진)
     * @param {list} coreKeyList list 형식의 뽑아올 DATA
     * @param {int} idx 전체 Data에서의 list 내에서 index
     * @return {JSON} List 새로운 list로 들어가기 전 { } 넘겨준 Key값에 대해서만 return
     */
    getBasicData(coreKeyList,idx=0){
        let selectData = this.data[idx];
        let returnData = {};
        for(let i=0;i<coreKeyList.length;i++){
            returnData[coreKeyList[i]] = selectData[coreKeyList[i]]
        }
        return returnData;
    }
    /**
     * 사용처 : screenings(건강검진)
     * @param {string} listName JSON 내 원하는 리스트 KEY
     * @param {string} findKey 찾고자 하는 field의 KEY
     * @param {list} findValueList 찾고자 하는 field의 Value
     * @param {string} returnKey return 받고자하는 값의 KEY
     * @param {int} idx 전체 Data에서의 list 내에서 index
     * @returns {JSON} List 내 { } 안에 있는 것 중 넘겨준 key값과 value 값이 일치하는 것만 return
     */
    getListData(listName, findKey, findValueList,returnKey,idx=0){
        let list = this.data[idx][listName];
        let returnData = {};
        for(let i=0;i<list.length;i++){
            for(let j=0;j<findValueList.length;j++){
                if(list[i][findKey] == findValueList[j]){
                    returnData[findValueList[j]] = list[i][returnKey];
                    break;
                }
            }
            if(returnData.length == findValueList.length)
                break;
        }
        return returnData;
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
     * 사용처 : diagnosis(진료정보)
     * @param {string} listName JSON 내 원하는 리스트 KEY
     * @param {list} findKeyList 찾고자 하는 field의 KEY List
     * @param {int} idx 전체 Data에서의 list 내에서 index
     * @returns {list} List 내 { } 안에 있는 것 중 원하는 Key 값만 가진채 return
     */
    getListDataEach(listName, findKeyList, idx=0){
        let list = this.data[idx][listName];
        let returnList = [];
        let returnData = {};
        for(let i=0;i<list.length;i++){
            for(let j=0;j<findKeyList.length;j++){
                returnData[findKeyList[j]] = list[i][findKeyList[j]]
            }
            returnList.push(returnData);
            returnData = {};
        }
        return returnList;
    }
    getListDataEachAndAll(listName,secListName, coreKeyList, idx=0){
        let newParse = this.data[idx][listName];
        let returnData = {};
        let returnList = [];
        for(let j = 0; j < newParse.length; j++){
            for(let i=0; i<coreKeyList.length; i++){
                returnData[coreKeyList[i]] = newParse[j][coreKeyList[i]]
            }
            returnData[secListName] = newParse[j][secListName]
            returnList.push(returnData);
            returnData = {};
        }

        return returnList;
    }
}

module.exports = {
    makeParsingClass : makeParsingClass
}