/**
 * @param {string} str
 * @return {number}
 */

const isNeg = strArray => {
    const charCode = strArray[0].charCodeAt(0);
    if (charCode==45)
        return [-1, strArray.slice(1)]
    if (charCode == 43)
        return [1, strArray.slice(1)]

    return [1, strArray]
}

const isValidCh = (ch,idx) => {
    const charCode = ch.charCodeAt(0);

    // + or - at begining
    if (idx==0 && (charCode==43 || charCode==45))
        return true

    // int character
    if ((charCode<=57 && charCode>=48))
        return true

    return false
}

const validPortion = sArray => {
    let filtered = []

    for (let [idx,ch] of sArray.entries()){

        if (isValidCh(ch, idx)){
            filtered.push(ch)
        } else {
            break;
        }
    }
    return filtered
}

const myAtoi = str => {
    const cleanStr = validPortion(str.trim().split(''));

    if (cleanStr.length<1)
        return 0;

    const [sign, intPortion]= isNeg(cleanStr);

    let result = 0;
    for (let i = intPortion.length-1, j=0; i>=0; i--, j++){

        result+= intPortion[i]*Math.pow(10, j)

        if (result*sign>=2147483648) {
            return sign*(2147483647)
        }
        if (result*sign<-2147483648){
            return -2147483648
        }

    }
    // multiply each element by 10^n and add
    return result*sign
};