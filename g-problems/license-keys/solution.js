/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */

// Test cases
// 9dj-9823-ds921 K=3 => 9DJ-982-3SD-921
// 2-5g-3-J K=2 => 2-5G-3J
const licenseKeyFormatting = (S, K) => {
    const cleanString = S.split('-').join('').toUpperCase();

    const pieces = [];

    for(let i=cleanString.length; i>0; i-=K){
        if (i-K>=0) {
            pieces.unshift(cleanString.slice(i-K,i))
        } else {
            pieces.unshift(cleanString.slice(0,i))
        }
    }

    return pieces.join('-')
};