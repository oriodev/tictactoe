// GAMEBOARD

const gameBoard = ( () => {

    let board = ["X", "O", "", "", "", "", "", "", ""];
    let allBoxes = document.querySelectorAll('[id=box]');

    const populateBoxes = () => {
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

// GAME LOOP

const game = ( () => {

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


    const gameLoop = () => {

        console.log(gameBoard.board);
        console.log("we're in gameLoop");
        console.log(gameEnd());

        while (gameEnd() == false) {
            console.log("game is running");
            
            // enter gameloop logic here


        }

        console.log("we're on the other side of the actual loop");

    }

    return {
        gameLoop
    }

})();

game.gameLoop();