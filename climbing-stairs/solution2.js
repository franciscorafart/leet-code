// Test cases:
// 0 => 1
// 1 => 1
// 2 => 2
// 3 => 3
// 4 => 5
// 5 => 8
// 6 => 13

// Considering the amount of steps is a progression
let climbStairs = n => {
    if (n===0 || n===1)
        return 1

    let first = 1
    let last = 1

    for (let i=2; i<=n; i++){
        const add = first+last;
        first = last;
        last = add;
    }

    return last
}
