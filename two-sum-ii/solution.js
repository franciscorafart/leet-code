/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
    // Two indexes i and j calculating sum. If sum larger i --> , else <-- j
    let i = 0;
    let j=numbers.length-1;
    while(i<j){
        const sum = numbers[i]+numbers[j];
        if (sum === target)
            return [i+1,j+1]

        if (sum>target){
            j--
        } else {
            i++
        }
    }
};