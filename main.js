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

// GAME OBJECT

const gamePlay = ( () => {

    let turn = crosses;

    turn.makeMove();
    

    // make a game loop

    // check if someone has won or if all the slots are filled

    // if neither are true then run loop

    // each loop is one turn

    // so run makeMove on whoever's turn it is



    return {
        turn
    };


})();

const noughts = players("O");
const crosses = players("X");

