/**
 * @param {character[][]} board
 * @return {boolean}
 */

// routine to determine 3x3 box
const boxNum = (x,y) => {
    // Divides sudoku grid in 9 sequencial boxes (0 to 8)
    const horizontal = Math.floor(x/3);
    const vertical = Math.floor(y/3);

    return (vertical*3) + horizontal;
}

var isValidSudoku = function(board) {
    const box3x3 = {}
    const columns = {}

    for (let i=0; i<board.length;i++){
        const row = board[i];
        const elementsRow = [];
        for (let j=0; j<row.length;j++){
            const box = board[i][j];
            if (box === '.')
                continue;

            // evaluate row and insert
            if (elementsRow.indexOf(box)>=0){
                return false;
            } else {
                elementsRow.push(box);
            }

            // evaluate column and insert
            if (columns[j]){
                if (columns[j].indexOf(box)>=0){
                    return false;
                } else {
                    columns[j].push(box);
                }
            } else {
                columns[j] = [box];
            }

            // determine 3x3 box. Evaluate and insert
            const this3x3 = boxNum(i,j);

            if (box3x3[this3x3]){
                if (box3x3[this3x3].indexOf(box)>=0){
                    console.log('false in 3x3', this3x3, 'with box', box)
                    return false;
                } else {
                    box3x3[this3x3].push(box);
                }
            } else {
                box3x3[this3x3] = [box];
            }
        }
    }
    return true;
};