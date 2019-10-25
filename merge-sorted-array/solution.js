/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Test cases
// [1,2,3,0,0,0] And [2,5,6] => [1,2,2,3,5,6]
// [1,2,3] AND [] => [1,2,3]
// [6,7,8,9,0] AND [1] => [1,6,7,8,9]
// [6,7,8,9,0] AND [] => [6,7,8,9,0]
// [] AND [] => []

let merge = function(nums1, m, nums2, n) {
    if (n!==0){
        m=m-1;
        n=n-1;

        for (let i=nums1.length-1; i>=0; i--){
            if(m>=0 && n>=0){
                const a = nums1[m];
                const b = nums2[n];

                if (nums1[m]>b){
                    nums1[i] = nums1[m];
                    m--;
                } else {
                    nums1[i] = nums2[n];
                    n--
                }
            } else if (m>=0){
                nums1[i] = nums1[m];
                m--;
            } else if (n>=0){
                nums1[i] = nums2[n];
                n--;
            }
        }
    }
};