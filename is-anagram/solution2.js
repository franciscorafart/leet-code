const isAnagram = (s,t) => {
    if (s.length != t.length)
        return false

    const indexes = {}

    for (let i=0; i<s.length; i++){
        const existingIdx = indexes[s.charAt(i)] || -1
        const index = t.indexOf(s.charAt(i), existingIdx+1)

        if (index == -1){
            return false
        } else {
            indexes[s.charAt(i)] = index
        }
    }
    return true
}