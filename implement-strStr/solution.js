/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Test cases

// "helooll" "ll" => 5
// "hello" "ll" => 2
// "" "ll"  => -1
// "hello" "" => 0
var strStr = function(haystack, needle) {
    if (needle.length === 0)
        return 0;

    const hayArr = haystack.split('');
    const needleArr = needle.split('');
    let foundNeedle = false;
    let idx = -1;

    while (idx<hayArr.length && !foundNeedle && hayArr.length>0){
        idx++
        for (let i=0; i<needleArr.length;i++){
            if (needleArr[i] !== hayArr[idx+i]){
                break;
            }
            if (i === needleArr.length-1){
               foundNeedle = true;
            }
        }
    }

    return foundNeedle? idx: -1;
};