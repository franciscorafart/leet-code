const isAlphaNum = ch => {
    //65-90 or 48 to 57
    const charCode = ch.charCodeAt(0);
    if((charCode <=122 && charCode >= 97) || (charCode >= 48 && charCode <= 57))
        return true;
    return false;
}

const isPalindrome = s => {
    if(s.length>0){
        const sClean = s.toLowerCase().split('').filter(ch => isAlphaNum(ch))
        let i = 0;
        let j = sClean.length-1;

        while(i<j){
            if(sClean[i] != sClean[j])
              return false
            
            i++
            j--
        }
    }
    return true;
};
