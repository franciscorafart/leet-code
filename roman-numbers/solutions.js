/**
 * @param {string} s
 * @return {number}
 */

const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function Node(v, ll) {
    this.value = v;
    this.next = ll || null;
}

const isSubstraction = (r, rNext) => {
    if (!rNext) return false

    if (r === 'I') {
        if (rNext === 'V' || rNext === 'X') {
            return true
        }
    } else if(r === 'X') {
        if (rNext === 'L' || rNext === 'C') {
            return true
        }
    } else if (r === 'C') {
        if (rNext === 'D' || rNext === 'M') {
            return true
        }
    }

    return false;
}

const romanToInt = (s) => {
    if (!s.length) return 0;

    let sum = 0;
    const romans = s.split('');

    // Put them in a linked list
    const firstNode = new Node(romans.splice(0, 1)[0], null);
    let llDynamic = firstNode;
    while (romans.length) {
        const newLL = new Node(romans.splice(0, 1)[0], null);
        llDynamic.next = newLL;
        llDynamic = newLL
    }

    llDynamic = firstNode;

    // iterate throug linked list and keep a score of addition
    while (llDynamic) {
        const v = llDynamic.value;
        const nextValue = llDynamic.next ? llDynamic.next.value : null;
        const isSubs = isSubstraction(v, nextValue);
        if (isSubs) {
            sum-=romanMap[v];
        } else {
            sum+=romanMap[v];
        }

        llDynamic = llDynamic.next
    }

    return sum;
};