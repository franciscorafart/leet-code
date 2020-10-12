/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Test cases
// [1, 2, 5] 11  -> 3
// [2, 5, 6] 7 -> 2
// [5, 2, 6] 7 -> 2
// [2] 3 -> -1
// [186,419,83,408] 6249 -> 20
// [2] 0 --> 0
// [] 0 --> 0
// [] 23 -> -1

const coinChange = (coins, amount) => {
    if (amount === 0)
        return 0

    if (coins.length === 0)
        return -1

    if (coins.indexOf(amount)>=0)
        return 1

    let prevTreeLevel = [...coins];

    let coinAmount = 1;
    const maxCoins = Math.floor(amount/Math.min(...coins));

    while (coinAmount <= maxCoins){
        coinAmount++
        const newTreeLevel = new Set([]);

        for (let i=0; i<prevTreeLevel.length; i++){
            for (let j=0; j<coins.length; j++){
                const sum = prevTreeLevel[i]+coins[j];
                if (sum===amount)
                    return coinAmount;
                if (sum < amount)
                    newTreeLevel.add(sum);
            }
        }
        prevTreeLevel = Array.from(newTreeLevel)
    }

    return -1
}