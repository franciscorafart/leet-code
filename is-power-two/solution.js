// Test cases:
// 0 false
// 1 true
// 2 true
// 3 false
// -25 false
// - 16 false

let isPowerOfTwo = n => {
    if (n<=0)
        return false

    const div = n/2

    if (Math.abs(div) === 1 || n === 1)
        return true

    if (Math.floor(div)!==div || Math.abs(div)<1)
        return false

    return isPowerOfTwo(div)
};