let isAnagram = s, t) => {

    const sSplit = s.split('').sort((a,b)=> a<b?-1:1).join('')
    const tSplit = t.split('').sort((a,b) => a<b? -1:1).join('')

    return (sSplit===tSplit)
};