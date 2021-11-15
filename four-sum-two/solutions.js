/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

 const combineTwo = (n1, n2) => {
    if (n1.length === 0) {
        return n2;
    }

    if (n2.length === 0) {
        return n1;
    }

    const res = [];

    for (let i = 0; i < n1.length; i++) {
        for (let j = 0; j < n2.length; j++) {
            const val = n1[i]+n2[j];
            res.push(val);
        }
    }

    return res;
}

 const fourSumWrapper = nums => {
    let res = [];
    for (let i = 0; i<nums.length-1; i++) {
        if (i === 0) {
            res=nums[i]
        }
        res = combineTwo(res, nums[i+1]);
    }
    return res;
}

// TODO: Make it more efficient than O^2
const fourSumCount = function(nums1, nums2, nums3, nums4) {
    const combinationsAddition = fourSumWrapper([
        nums1, nums2, nums3, nums4]);

    return combinationsAddition.filter(combo => !combo).length;
};

console.log('test1', fourSumCount([1,2], [-2,-1], [-1,2], [0,2]))
console.log('test2', fourSumCount(0,0,0,0))
console.log('test3', fourSumCount([-1,-1], [-1,1], [-1,1], [1,-1]))
console.log('test4', fourSumCount([1,2], [-2,-1], [-1,2], [0,2]))