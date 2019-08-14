/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// Test cases:
// [[1,3],[2,6],[8,10],[15,18]] = [[1,6],[8,10],[15,18]]
// [[1,4],[4,5]] => [[1,5]]
// [[1,3], [4,5]] => [[1,3], [4,5]]
// [[1,2]] => [[1,2]]
// [[-4,-1], [-1,100]] => [[-4,100]]
// [[5, 100], [10, 99]] => [[5, 100]]
// [[10, 99],[5, 100]] => [[5, 100]]
// [[2,3],[4,5],[6,7],[8,9],[1,10]] => [[1,10]]

let mergeHelper = (a,b) => {
    if((b[0]>=a[0] && b[0]<=a[1]) || (b[1]>=a[0] && b[1]<=a[1])){
        const min = Math.min(a[0], b[0]);
        const max = Math.max(a[1], b[1]);
        return [min,max]
    }

    return null
}
var merge = function(intervals) {
    if (intervals.length<2)
        return intervals

    const sortIntervals = intervals.sort((a,b) => a[0]<b[0]?-1:1)

    for (let i=0, j=1; j<=sortIntervals.length-1; i++, j++){
        const merged = mergeHelper(sortIntervals[i], sortIntervals[j]);
        if (merged){
            sortIntervals[i]=null;
            sortIntervals[j]=merged;
        }
    }
    return sortIntervals.filter(a=>a)
};