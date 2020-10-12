// Recursive solution

const singleNumber = nums => {
    let j = nums.length-1;
    while(j>0){
        if (nums[0]==nums[j]){
            nums.splice(0,1)
            nums.splice(j-1,1)
            return singleNumber(nums)
        }
        j--
    }
    return nums[0]
}