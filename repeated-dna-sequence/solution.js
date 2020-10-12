
// "AAAAAAAAAAA" => ["AAAAAAAAAA"] One less A
//"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT" => ["AAAAACCCCC", "CCCCCAAAAA"]

const findRepeatedDnaSequences = s => {
    const keyed_sequences = {};
    const sArr = s.split('');

    for (i=0; i+10<=sArr.length;i++){
      const sequence = sArr.slice(i,i+10).join('');

      if (keyed_sequences[sequence]){
        const value = keyed_sequences[sequence];
        keyed_sequences[sequence] = value+1;
      } else {
        keyed_sequences[sequence] = 1;
      }
    }

    const res = []
    for (let [key, val] of Object.entries(keyed_sequences)){
      if (val>1)
        res.push(key);
    }
    return res;
  };

  console.log(findRepeatedDnaSequences("AAAAAAAAAAA"));
  console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
