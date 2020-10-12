/**
 * @param {number[]} bills
 * @return {boolean}
 */

const lemonadeChange = bills => {
    const keyVal = [[20, 0], [10, 0], [5, 0]]
    const register = new Map(keyVal);

    for (let i=0;i<bills.length; i++){
        const pay = bills[i];
        register.set(pay, register.get(pay)+1);

        let changeDue = pay-5;

        if (changeDue === 0)
            continue

        for (let [bill, amount] of register){
            while (amount>0 && bill<=changeDue){
                changeDue-=bill
                amount--
            }
            register.set(bill, amount)
        }
        if (changeDue != 0)
            return false
    }
    return true
};