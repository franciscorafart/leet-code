let firstUniqChar = (s) => {
    const indexes = {}

    for (let i = 0; i<s.length; i++){
        const thisChar = s.charAt(i)
        indexes[thisChar] = (indexes[thisChar] === undefined)? [i, false]:[i, true];
    }

    for (let [key,value] of Object.entries(indexes)){
        if (!value[1]){
            return value[0]
        }
    }
    return -1
};
