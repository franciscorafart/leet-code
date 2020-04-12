/**
 * @param {string} s
 * @return {string}
 */

// Test cases

// "aba" => "aba"
// "abccbg" => "bccb"
// "bb" => "bb"
// "acfgg" => "gg"
// '' => ''
// "aganjdksjdfdsj" => "aga"
// "aganjdksjdfdj" => "jdfdj"
// "ccc" => "ccc"

const buildPalindrome = (sArr, idx, odd=false) => {
    let i = odd? idx-1: idx;
    let j = idx+1;

    while (i>=0 && j<=sArr.length-1){
        if (sArr[i] !== sArr[j]){
            break;
        }
            i--;
            j++;
    }
    i++;
    j--;

    return sArr.slice(i, j+1).join('');
}

const longestPalindrome = s => {
    if (s.length === 0)
        return '';

    const sArr = s.split('');
    const palindromes = [sArr[0]];

    for (let i=0; i<sArr.length-1; i++){
        if (sArr[i] === sArr[i+1]){
            palindromes.push(buildPalindrome(sArr, i, false));
        }

        if (i !== 0){ // we check always because of "ccc" edge case type
            palindromes.push(buildPalindrome(sArr, i, true));
        }
    }
    palindromes.sort((a, b) => b.length-a.length);

    return palindromes[0];
};