/**
 * @param {number[]} prices
 * @return {number}
 */


// [7,1,5,3,6,1,8] --> 7
// [7,6,4,3,1] --> 0
// [7,1,5,3,6,4] --> 5
// [2,4,1] --> 2
// [3,5,2,3,1] --> 2
// [4,11,2,1,7] --> 7

// Best case O(n) - worst: O^2
var maxProfit = function(prices) {
    if (prices.length === 0 || prices.length === 1)
        return 0

    let result = 0;
    let left = []
    while (prices.length>1){
        left.push(prices.splice(0,1)[0])
        const min = Math.min(...left)
        const max = Math.max(...prices)

        if (max>min && max-min>0 && max-min>result)
            result = max-min
    }

    return result
}