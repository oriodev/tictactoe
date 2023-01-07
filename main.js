// GAMEBOARD

const gameBoard = ( () => {

    let board = ["", "", "", "", "", "", "", "", ""];
    let allBoxes = document.querySelectorAll('[id=box]');

    const populateBoxes = (board) => {
        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].textContent = board[i];

            if (board[i] == "X") {
                allBoxes[i].style.color = "white";
            } else {
                allBoxes[i].style.color = "rgb(195, 195, 195)";
            }
        }
    }

    return {
        allBoxes,
        populateBoxes,
        board
    };

})();

// PLAYER OBJECTS

const players = (playerSymbol) => {
    const sayHello = () => {
        console.log(`hi bitches, i'm ${playerSymbol}`);
    }

    let symbol = playerSymbol;

    return {
        sayHello,
        symbol
    };
}

// GAME LOOP

const game = ( () => {

    const crosses = players("X");
    const noughts = players("O");

    const gameWinner = () => {
        // checks if someone has won
    }

    const boardFull = () => {
        // checks if the board is full

        for (let i = 0; i < gameBoard.board.length; i++) {
            if (gameBoard.board[i] == "") {
                return false;
            } 
        }

        return true;

    }

    const gameEnd = () => {
        // checks if gameWinner or boardFull are true

        if (boardFull() == true) {
            return true;
        } else {
            return false;
        }
    }

    // this adds an event listener to the boxes
    const makeMove = () => {

        let playerTurn = crosses;

        let allBoxes = gameBoard.allBoxes;

        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].addEventListener("click", function(event) {
                
                if (gameBoard.board[i] == "") {
                    gameBoard.board[i] = playerTurn.symbol;
                    console.log(gameBoard.board);
                    gameBoard.populateBoxes(gameBoard.board);
                }

                
                
            }

        )}
    }


    const gameLoop = () => {

        // reset the board
        gameBoard.board = ["", "", "", "", "", "", "", "", ""];
        makeMove();

    }

    const startGame = () => {
        gameLoop();
    }

    return {
        startGame,
        crosses,
        noughts
    }

})();

let btn = document.getElementById("btn");

btn.addEventListener("click", function(event) {
    game.startGame();
});