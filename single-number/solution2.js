// Addition by negatives solution

const singleNumber = nums => {
    let result = 0;
    nums.sort((a,b) => a-b);
    for (let i=0; i<nums.length; i++){
        result += i%2==0? nums[i]: -nums[i];
    }
    return result
}