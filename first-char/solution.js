const firstUniqChar = s => {
    const indexes = {}

    for (let i = 0; i<s.length; i++){
        const thisChar = s.charAt(i)
        indexes[thisChar] = (indexes[thisChar] === undefined)? [i, false]:[i, true];
    }

    for (let [_,value] of Object.entries(indexes)){
        if (!value[1]){
            return value[0]
        }
    }
    return -1
};
