// GAMEBOARD

const gameBoard = ( () => {

    let board = ["", "", "", "", "", "", "", "", ""];
    let allBoxes = document.querySelectorAll('[id=box]');

    const populateBoxes = () => {
        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].textContent = board[i];

            if (board[i] == "X") {
                allBoxes[i].style.color = "#3E4269";
            } else {
                allBoxes[i].style.color = "#710000";
            }
        }
    }

    return {
        allBoxes,
        populateBoxes,
        board
    };

})();

// PLAYER OBJECT

const players = (symbol) => {

    const makeMove = () => {

        let allBoxes = gameBoard.allBoxes;

        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].addEventListener("click", function(event) {

                if (gameBoard.board[i] == "") {

                    gameBoard.board[i] = symbol;
                    console.log(gameBoard.board);
                    gameBoard.populateBoxes();

                    if (turn == "crosses") {
                        turn = "noughts";
                    } else {
                        turn = "crosses";
                    }

                }
            })
        }

    }


    return {
        makeMove,
    };
};

// GAME OBJECT

const gamePlay = ( () => {

    let playing = true;

    const noughts = players("O");
    const crosses = players("X");

    let turn = "crosses";

    const gameLoop = () => {

        while (playing == true) {

            if (slotsFilled() == true) {
                console.log("game over");
            }

    }

    const slotsFilled = () => {

        for (let i = 0; i < gameBoard.board.length; i++) {
            if (gameBoard.board[i] == "") {
                return false;
            } else {
                return true;
            }
        }

    }

    return {
        gameLoop
    };


})();

gamePlay.gameLoop();
