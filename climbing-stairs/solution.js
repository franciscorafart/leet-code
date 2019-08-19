/**
 * @param {number} n
 * @return {number}
 */

// Test cases:
// 2 => 2
// 3 => 3
// 0 => 0

// Traverse and look
var climbStairs = function(n) {
    if (n<0)
        return 0

    if (n === 0){
        return 1
    }

    return climbStairs(n-1) + climbStairs(n-2);
};