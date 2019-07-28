let firstUniqChar = (s) => {
    const repeated = s.split('').sort((a,b) => a<b)
      .filter((a,i,arr) => a==arr[i+1] && a!==arr[i-1]);

    for (let i=0; i<s.length; i++){
        if (repeated.indexOf(s.charAt(i)) === -1)
            return i
    }
    return -1
};