/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let binaryS = (nums, target,min, max) => {
    if (min==null || max == null){
        min =0;
        max = nums.length-1
    }

    if (min>max)
        return min

    const midIdx = min + Math.ceil((max-min)/2);

    if (nums[midIdx] === target)
        return midIdx

    if (nums[midIdx] > target)
        return binaryS(nums, target, min, midIdx-1)

    return binaryS(nums, target, midIdx+1, max);

}
var searchInsert = function(nums, target) {
    if (nums.length>0)
        return binaryS(nums, target)

    return 0
};