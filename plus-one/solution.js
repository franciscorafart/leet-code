const plusOne = digits => {
    let extra = 1;
    
    for (let i=digits.length-1; i>=0; i--){
        let add = digits[i]+extra;

        if (add === 10){
            digits[i] = 0;
        } else {
            digits[i]=add;
            extra = 0;
            break;
        }
    }

    if (extra == 1){
        digits.unshift(1)
    }

    return digits
};