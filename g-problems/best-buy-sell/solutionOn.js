// O(n) version
const maxProfit = prices => {
    let max = Number.NEGATIVE_INFINITY;
    let maxProfit = 0;

    for (let i=prices.length-1; i>=0; i--){
        if (prices[i]>max){
            max = prices[i]; // max at position
        }
        const profit = max-prices[i]; // profit at position

        if (profit>maxProfit){
            maxProfit = profit;
        }
    }

    return maxProfit;
}