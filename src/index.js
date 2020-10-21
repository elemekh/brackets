module.exports = function check(str, bracketsConfig) {
    const lenB = bracketsConfig.length;
    const lenS = str.length;
    var countNum = -1;
    var stArr = [];
    var stArr2 = [];
    var stArr3 = [];
    var type = [];
    var summer = [];
    var helper = -1;
    var forCount = 0;
    var sammer = [];
    var openClose = [];
    for (var i = 0; i < lenS; i++) {
        for (var j = 0; j < lenB; j++) {
            if (bracketsConfig[j][0] === str[i]) {
                if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
                    helper *= -1;
                    if (helper === -1) {
                        stArr[i] = countNum;
                        stArr2[i] = countNum;
                        stArr3[i] = countNum;
                        type[i] = j;
                        countNum--;
                        stArr[i] = "L";
                        openClose[i] = "o";
                    } else {
                        stArr[i] = countNum + 1;
                        stArr2[i] = countNum + 1;
                        stArr3[i] = countNum + 1;
                        type[i] = j;
                        countNum++;
                        stArr[i] = "R";
                        openClose[i] = "c";
                    }
                } else {
                    stArr[i] = countNum + 1;
                    stArr2[i] = countNum + 1;
                    stArr3[i] = countNum + 1;
                    type[i] = j;
                    countNum++;
                    openClose[i] = "c";
                }
                break;
            } else if (bracketsConfig[j][1] === str[i]) {
                stArr[i] = countNum;
                stArr2[i] = countNum;
                stArr3[i] = countNum;
                type[i] = j;
                countNum--;
                openClose[i] = "o";
                break;
            }
        }
    }
    for (var i = 0; i < lenS; i++) {
        summer[i] = 1;
    }
    for (var i = 0; i < lenS; i++) {
        for (var j = 0; j < lenS; j++) {
            if (
                stArr3[i] === stArr3[j] &&
                type[i] === type[j] &&
                summer[i] !== 0 &&
                summer[j] !== 0 &&
                i !== j &&
                openClose[i] === "o" &&
                openClose[j] === "c"
            ) {
                summer[i] = 0;
                summer[j] = 0;
                forCount += 2;
            }
        }
    }
    var test = 0;
    if (
        stArr2.sort()[0] < 0 ||
        stArr2.length % 2 === 1 ||
        forCount !== stArr3.length
    )
        return false;
    return true;
};
