/**
 * @param {number[]} prices
 * @return {number}
 */


// [7,1,5,3,6,1,8] --> 7
// [7,6,4,3,1] --> 0
// [7,1,5,3,6,4] --> 5
// [2,4,1] --> 2
// [3,5,2,3,1] --> 2

// Recursive Solution
var maxProfit = function(prices) {
    if (prices.length === 0 || prices.length === 1)
        return 0

    const min = Math.min(...prices)
    const idx = prices.indexOf(min)

    const firstHalf = prices.slice(0,idx)
    const secondHalf = prices.slice(idx, prices.length)

    if (firstHalf.length>0){
        return Math.max(maxProfit(firstHalf), maxProfit(secondHalf))
    }

    return Math.max(...secondHalf)-min
};
