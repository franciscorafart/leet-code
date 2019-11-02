/**
 * @param {string} text
 * @return {number}
 */

const maxNumberOfBalloons = text => {
    const balloon = {
      'b': 0,
      'a': 0,
      'l': 0,
      'o': 0,
      'n': 0
    }
  sArr = text.split('');
  for (let ch of sArr){
    if(balloon[ch] !== undefined){
      const value = balloon[ch];
      balloon[ch] = value+1;
    }
  } // O(n)

  let noZero = true;
  let count = 0;
  outer:
  while(noZero){
    for (let ch of ['b','a','l','l','o','o','n']){
      let val = balloon[ch]
      if (val===0){
        noZero=false;
        break outer;
      } else {
        balloon[ch] = val-1;
      }
    }
    count++
  }
  return count;
}