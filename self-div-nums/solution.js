/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const isDigitDiv = n => {
    const nStrArr = n.toString().split('');
    return nStrArr.reduce((acc,val) => {
        const digit = Number(val)
        return (acc && digit !== 0 && n%digit===0)
    }, true); // default value of accumulator true
 } // O(nStrArr.length)

 const memo = {}; // memorizing to make several calls faster

 const selfDividingNumbers = (left,right) => {
    const allDivs = [];
    for (i=left; i<=right; i++){
        if (memo[i]){
            allDivs.push(i);
        } else {
            if (memo[i] === undefined && isDigitDiv(i)){
                allDivs.push(i);
                memo[i] = true;
            } else {
                memo[i] = false;
            }
        }
    }
    return allDivs;
 } // O(n)