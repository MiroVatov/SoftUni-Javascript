function solve() {
    let sudokuTable = Array.from(document.querySelectorAll('tbody tr td input[type="number"]'));
    const buttons = document.querySelectorAll('table tfoot tr td button');
    const quickCheckButton = buttons[0];
    const clearButton = buttons[1];

    quickCheckButton.style.cursor = 'pointer';
    clearButton.style.cursor = 'pointer';
    let filledSudoku = successFillInTheSudoku(sudokuTable);
    // let filledSudoku = notSuccessFillInTheSudoku(sudokuTable);

    function clearSudoku() {
        for ( let cell of filledSudoku ){
            cell.value = '';
        }
        document.querySelector('table').style.border = 'none';
        document.querySelector('#check>p').textContent = "";
    }

    clearButton.addEventListener('click', clearSudoku);
    printSudoku(filledSudoku); // Unnecessary Function just to print the Sudoku !

    function notCorrectSudoku() {
        let paragraph = document.querySelector('#check>p');
        document.querySelector('table').style.border = "2px solid red";
        paragraph.textContent = 'NOP! You are not done yet...';
        document.getElementById('check').style.color = "red";
    }

    function correctSudoku() {
        let paragraph = document.querySelector('#check>p');
        document.querySelector('table').style.border = "2px solid green";
        paragraph.textContent = 'You solve it! Congratulations!';
        document.getElementById('check').style.color = "green";
    }

    function checkIfNumbersAreFromZeroToNine() {
        for (let number of filledSudoku){
            if ( number.value <= 0 || number.value > 9 || number.value === ""){
                return false;
            }
        }
        return true;
    }

    function checkIfSudokuIsCorrect() {
        if (!checkIfNumbersAreFromZeroToNine()) {
            notCorrectSudoku(filledSudoku);
        } else if (filledSudoku[0].value === filledSudoku[1].value || filledSudoku[1].value === filledSudoku[2].value || filledSudoku[2].value === filledSudoku[0].value) {
            notCorrectSudoku(filledSudoku);
        } else if (filledSudoku[3].value === filledSudoku[4].value || filledSudoku[4].value === filledSudoku[5].value || filledSudoku[5].value === filledSudoku[3].value) {
            notCorrectSudoku(filledSudoku);
        } else if (filledSudoku[6].value === filledSudoku[7].value || filledSudoku[7].value === filledSudoku[8].value || filledSudoku[8].value === filledSudoku[6].value) {
            notCorrectSudoku(filledSudoku);
        } else if (filledSudoku[0].value === filledSudoku[3].value || filledSudoku[0].value === filledSudoku[6].value || filledSudoku[6].value === filledSudoku[3].value) {
            notCorrectSudoku(filledSudoku);
        } else if (filledSudoku[1].value === filledSudoku[4].value || filledSudoku[1].value === filledSudoku[7].value || filledSudoku[7].value === filledSudoku[4].value) {
            notCorrectSudoku(filledSudoku);
        } else if (filledSudoku[2].value === filledSudoku[5].value || filledSudoku[2].value === filledSudoku[8].value || filledSudoku[8].value === filledSudoku[5].value) {
            notCorrectSudoku(filledSudoku);
        } else {
            correctSudoku(filledSudoku);
        }
    }

    quickCheckButton.addEventListener('click', checkIfSudokuIsCorrect);

    function successFillInTheSudoku(sudokuTable) {
        let successfulFilling = [1, 2, 3, 3, 1, 2, 2, 3, 1];
        for (let i = 0; i < successfulFilling.length; i++) {
            sudokuTable[i].value = successfulFilling[i];
        }
        return sudokuTable;
    }

    function notSuccessFillInTheSudoku(sudokuTable) {
        // let unsuccessfulFilling = [1, 2, 3, 3, 1, 3, 2, 3, 1];
        let unsuccessfulFilling = [1, 1, 1, 2, 2, 2, 3, 3, 3];
        for (let i = 0; i < unsuccessfulFilling.length; i++) {
            sudokuTable[i].value = unsuccessfulFilling[i];
        }
        return sudokuTable;
    }

    function printSudoku(filledSudoku) {
        for (let i = 0; i < filledSudoku.length; i += 3) {
            console.log(filledSudoku[i].value, filledSudoku[i + 1].value, filledSudoku[i + 2].value);
        }
    }
}