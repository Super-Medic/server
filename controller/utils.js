
function leftPad(value) {
    if (value >= 10) {
        return value;
    }
    return `0${value}`;
}

function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
}

function changeObjectKeys(jsonObject, keyList){
    const keys = Object.keys(jsonObject);
    let idx = 0;
    keys.forEach((key) => {
        var newKey = keyList[idx++];
        jsonObject[newKey] = jsonObject[key];
        delete jsonObject[key];
    });
    return jsonObject
}
module.exports = {
    leftPad : leftPad,
    toStringByFormatting : toStringByFormatting,
    changeObjectKeys : changeObjectKeys

}