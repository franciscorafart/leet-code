/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Test cases:
// [] 4 => [-1, -1]
// [1,2,3,4,7,7,7,7,7,7,7,8,9,10,11,12,14]  / 7
// [1,2,3,4,5,6,7] / 6
// [1,2,3,4,5,6,7] / 1

let binaryS = (nums, target, min=0, max=nums.length-1) => {
    if (min>max)
        return null

    const midIdx = min + Math.ceil((max-min)/2)

    if (nums[midIdx] === target)
        return midIdx

    if(nums[midIdx]>target){
        return binaryS(nums, target, min, midIdx-1);
    }

    return binaryS(nums, target, midIdx+1, max);
}

var searchRange = function(nums, target) {
        const idx = binaryS(nums,target)

        if (idx !== null){
            let left = idx;
            let right = idx;

            if (right<nums.length-1){
                while(nums[right+1] === target){
                    right++
                }
            }
            if (left>0){
                while(nums[left-1] === target){
                    left --
                }
            }

            return [left, right]
        }

    return [-1,-1]
};