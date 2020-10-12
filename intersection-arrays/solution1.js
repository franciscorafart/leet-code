// O(n)-solution
const intersect = (nums1, nums2) => {
    const indexes = {}
    const results = [];

    for (let i=0; i<nums1.length; i++){
        const num = nums1[i];
        if(indexes[String(num)] === undefined){
            indexes[String(num)] = [i];
        } else {
            indexes[String(num)].push(i);
        }
    }

    for (let i=0;i<nums2.length; i++){
        const num = nums2[i];
        if (indexes[String(num)] && indexes[String(num)].length>0){
            results.push(num);
            indexes[String(num)].pop();
        }
    }

    return results;
};