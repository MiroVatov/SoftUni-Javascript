function solve(params) {

    const firstPlayerMark = 'X';
    const secondPlayerMark = 'O';

    function printMatrix(gameMatrix){
        for (let data of gameMatrix){
            console.log(`${data.join('\t')}`);
        }

    }


    function createMatrix(r, c) {
        let myArray = [];
        for (let i = 0; i < r; i++){
            myArray[i] = [];
            for (let j = 0; j < c; j++){
                myArray[i][j] = false;
            }
        }
        return myArray;
    }

    function freeSpace(gameMatrix) {
        for (let row = 0; row < 3; row++){
            for (let col = 0; col < 3; col++){
                if (gameMatrix[row][col] === false){
                    return true;
                } 
            }
        }
        return undefined;
    }

    function checkIfCoordinatesAreValid( r, c ) {
        return (r < 3 && r >= 0) && (c < 3 && c >= 0);

    }

    function checkIfWinner(gameMatrix, player){
        if (gameMatrix[0][0] === player && gameMatrix[0][1] === player && gameMatrix[0][2] === player){
            return player;
        }
        else if (gameMatrix[1][0] === player && gameMatrix[1][1] === player && gameMatrix[1][2] === player){
            return player;
        }
        else if (gameMatrix[2][0] === player && gameMatrix[2][1] === player && gameMatrix[2][2] === player){
            return player;
        }
        else if ( gameMatrix[0][0] === player && gameMatrix[1][0] === player && gameMatrix[2][0] === player ){
            return player;
        }
        else if ( gameMatrix[0][1] === player && gameMatrix[1][1] === player && gameMatrix[2][1] === player ){
            return player;
        }
        else if ( gameMatrix[0][2] === player && gameMatrix[1][2] === player && gameMatrix[2][2] === player ){
            return player;
        }
        else if (gameMatrix[0][0] === player && gameMatrix[1][1] === player && gameMatrix[2][2] === player){
            return player;
        }
        else if (gameMatrix[0][2] === player && gameMatrix[1][1] === player && gameMatrix[2][0] === player){
            return player;
        }
        return undefined;
    }

    let gameMatrix = createMatrix(3, 3);
    let coordinates = params;

    let playerTurn = 0;
    let player = '';
    let winner = '';    
        
        while (params.length > 0 && freeSpace(gameMatrix) === true ){
            let data = coordinates.shift();
            let [ chosenRow, chosenCol ] = data.split(' ');

    // Check if the wrong coordinates are until the end of the input !!!

           while ( gameMatrix[Number(chosenRow)][Number(chosenCol)] !== false && params.length > 0){
                console.log("This place is already taken. Please choose another!")
                data = coordinates.shift();
                [ chosenRow, chosenCol ] = data.split(' ');
           }
            if (playerTurn % 2 === 0){
                player = firstPlayerMark;
            }
            else{
                player = secondPlayerMark;
            }
            
            gameMatrix[Number(chosenRow)][Number(chosenCol)] = player;
            winner = checkIfWinner(gameMatrix, player);
            if ( winner !== undefined ){
                console.log(`Player ${winner} wins!`);
                printMatrix(gameMatrix);
                break;
            }
            playerTurn += 1;
        }        

    if (winner === undefined && freeSpace(gameMatrix) === undefined){        
        console.log("The game ended! Nobody wins :(");
        printMatrix(gameMatrix);
    }

}


solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);