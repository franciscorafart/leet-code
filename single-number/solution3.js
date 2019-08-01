// Addition by negatives. Solution without sorting by adding consecutive substracted pairs
// Ex: (a-b)+(c-d)-(e-f)+(g+h)-i

// NOTE: Only works for positive value single elements
let singleNumber = nums => {
    let result = 0, count=0;
    for (let i=0; i<nums.length-1; i+=2){
      if (count%2==0){
        result+=nums[i]-nums[i+1]
      } else {
        result-=nums[i]-nums[i+1]
      }
      count++
    }
    count++
    result+=count%2==0? -nums[nums.length-1]:nums[nums.length-1]

    return Math.abs(result)
}