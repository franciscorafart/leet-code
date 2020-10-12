/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */


// We do a binary search that shortens the range 1...n
// If our current middle element is a bad version we cut our range on the
// left side. If it's not a bad version we limit our range to the right side.
// When we have two elements we evaluate which is the first bad version and return
// that element.

const solutionHelper = (min, max, isBadVersion) => {
    if (min==max-1){
        return isBadVersion(min)? min:max; // first bad one
    }

    const middle = min + Math.floor((max-min)/2)

    if (isBadVersion(middle)){
        return solutionHelper(min, middle, isBadVersion)
    } else {
        return solutionHelper(middle, max, isBadVersion)
    }
}

const solution = isBadVersion => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return n => {
        if (n<2){
            return isBadVersion(n)? n:null;
        }
        return solutionHelper(1, n, isBadVersion)
    };
};