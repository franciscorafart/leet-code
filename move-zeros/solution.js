/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [0,1,0,3,12] => [1,3,12,0,0]
// [0,1] => [1,0]
// [3,4,5] => [3,4,5]
// [0] => [0]
// [] => []
// [0,0,3,2,4,0]

var moveZeroes = function(nums) {
    if (nums.length<=1)
        return

    let indexZero = nums.indexOf(0);
    let i = indexZero+1

    while (indexZero<nums.length && i<nums.length && indexZero !== -1){

        if (nums[i] !== 0){ // swap
            nums[indexZero] = nums[i]
            nums[i] = 0
            indexZero++
            i = indexZero+1 // reset
        } else {
            i++
        }
    }
};