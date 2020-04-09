const lengthOfLongestSubstringHelper = (sArr, all=[]) => {
    let j = 1;
    const visited = [sArr[0]];

    while (j<=sArr.length-1){
        if(visited.indexOf(sArr[j])>=0){
            all.push(sArr.slice(0,j));

            if (j<sArr.length-1){
                lengthOfLongestSubstringHelper(sArr.slice(1), all)
            }

            break;
        } else {
            if (j===sArr.length-1){
                all.push(sArr); // last char
            }

            visited.push(sArr[j]);
        }
        j+=1;
    }


    return Math.max(...all.map(a => a.length));
}

let lengthOfLongestSubstring = s => (s.length <= 1)?
    s.length: lengthOfLongestSubstringHelper(s.split(''));