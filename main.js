// HOLDS THE BOARD

const gameBoard = ( () => {

    let board = ["", "", "", "", "", "", "", "", ""];

    return {
        board
    };
})();

// HANDLES THE DISPLAY

const displayController = ( () => {

    let allBoxes = document.querySelectorAll('[id=box]');
    let board = gameBoard.board;

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
        populateBoxes
    };

})();

// PLAYER OBJECT

const players = (symbol) => {

    const makeMove = () => {

        let allBoxes = displayController.allBoxes;

        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].addEventListener("click", function(event) {

                if (gameBoard.board[i] == "") {

                    gameBoard.board[i] = symbol;
                    console.log(gameBoard.board);
                    displayController.populateBoxes();

                    if (gamePlay.turn == "crosses") {
                        gamePlay.turn = "noughts";
                    } else {
                        gamePlay.turn = "crosses";
                    }

                }
            })
        }

    }


    return {
        makeMove,
    };
};

const gamePlay = ( () => {

    let turn = "crosses";

    const startGame = () => {
        
    }

    return {
        turn
    };


})();

const noughts = players("O");
const crosses = players("X");
