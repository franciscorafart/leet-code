// Iterative solution
const lengthOfLongestSubstring = s => {
    if (s.length <= 1)
        return s.length

    let sArr = s.split('');
    let i = 0;
    let j = 1;

    let alreadyIncluded = [sArr[i]];
    const substrings = [];

    while(j<=sArr.length-1 && i<j){
        if (alreadyIncluded.indexOf(sArr[j]) >= 0){
            substrings.push(sArr.slice(i,j));

            i++
            j = i+1;
            alreadyIncluded = [sArr[i]];
        } else {
            if (j===sArr.length-1){
                substrings.push(sArr.slice(i));
            } // Last string

            alreadyIncluded.push(sArr[j]);
            j+=1;
        }
    }

    return Math.max(...substrings.map(substr => substr.length));
};