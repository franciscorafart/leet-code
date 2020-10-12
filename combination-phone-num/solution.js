/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
    '2': ['a','b','c'],
    '3': ['d','e', 'f'],
    '4':['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p','q','r','s'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}

const letterCombinations = digits => {
    if (digits.length==0)
        return []

    const digitsArr = digits.split('').map(d => map[d]);

    let first = digitsArr.shift(0,1);
    let second = null;

    while(digitsArr.length>0){
        let temp = []
        second = digitsArr.shift(0,1);
        for (let i=0; i<first.length; i++){
            for(let j=0; j<second.length; j++){
                thisString = first[i]+second[j]

                temp.push(thisString)
            }
        }
        first = temp;
    }

    return first
};