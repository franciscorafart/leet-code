/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */

// Pseudo code
// Keep track of old and new number and total addition

//Evaluate
// is old pair? substract old: do nothing
// is new pair? add new: do nothing

// modify A
// add addition to result array

const sumEvenAfterQueries = (A, queries) => {
    let addition = A.reduce((acc,n) => (n%2==0)? acc+=n: acc, 0);
    let result = []
    for (const el of queries){
        const idx = el[1];
        const val = el[0];

        const oldN = A[idx];
        const newN = A[idx]+val;

        if (oldN%2==0)
            addition=addition-oldN;

        if (newN%2==0)
            addition=addition+newN;

        A[idx] = newN;
        result.push(addition);
    }
    return result;
};

console.log(sumEvenAfterQueries([1,2,3,4],[[1,0],[-3,1],[-4,0],[2,3]]))
// Should return [8, 6, 2, 4]

// 1,2,3,4 .. add = 6 / res =
// 2,2,3,4 .. add = 8 (6 + 2) / [8]
// 2,-1, 3,4 .. add = 6 (8-2) / res = [8,6]
// -2,-1,3,4 .. add = 2 (6-2-2) / res = [8,6,2]
// -2,-1,3,6 .. add = 4 (2-4+6) / res = [8,6,2,4]
