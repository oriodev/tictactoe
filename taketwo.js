// PLAYERS

const players = (symbol, name) => {

    // score tracker

    let row1 = 0; // 0 1 2
    let row2 = 0; // 3 4 5
    let row3 = 0; // 6 7 8
    let col1 = 0; // 0 3 6
    let col2 = 0; // 1 4 7
    let col3 = 0; // 2 5 8

    const addScore = (i) => {
        
        switch (i) {
            case 0:
                row1++;
                col1++;
                break;
            case 1:
                row1++;
                col2++;
                break;
            case 2:
                row1++;
                col3++;
                break;
            case 3:
                row2++;
                col1++;
                break;
            case 4:
                row2++;
                col2++;
                break;
            case 5:
                row2++;
                col3++;
                break;
            case 6:
                row3++;
                col1++;
                break;
            case 7:
                row3++;
                col2++;
                break;
            case 8:
                row3++;
                col3++;
                break;
        }

        console.log("row1 is " + row1 + " and row 2 is " + row2);
    }

    

    const winStatus = () => {
        if (row1 == 3 || row2 == 3 || row3 == 3 || col1 == 3 || col2 == 3 || col3 == 3) {
            return true;
        } else {
            return false;
        }
    }

    return {
        row1,
        row2,
        row3,
        col1,
        col2,
        col3,
        winStatus,
        addScore,
        name,
        symbol
    }

}

// GAMEBOARD

const game = ( () => {

    // create board array
    let board = ["", "", "", "", "", "", "", "", ""];
    let allBoxes = document.querySelectorAll('[id=box]');

    // init player objects
    const crosses = players("X", "crosses");
    const noughts = players("O", "noughts");

    // populate board function

    const populateBoard = () => {
        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].textContent = board[i];

            if (board[i] == "X") {
                allBoxes[i].style.color = "white";
            } else {
                allBoxes[i].style.color = "rgb(195, 195, 195)";
            }
        }
    }

    // board reset function
    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].textContent = "";
        }
    }

    // checks if the board is full
    const boardFull = () => {
        for (let i = 0; i < board.length; i++) {
            if (board[i] == "") return false;
        } 
        return true;
    }

    // the game loop function

    const gameLoop = () => {

    // set turn
    let turn = crosses;
    let play = true;

    // the event listener
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].addEventListener("click", function(e) {

            if (play == true) {

                // add turn to board array
                if (board[i] == "") {
                    board[i] = turn.symbol;
                }

                // add to player count
                turn.addScore(i);

                // add to screen
                populateBoard();

                // check for winner
                console.log(turn.winStatus());
                if (turn.winStatus() == true) {
                    console.log(turn.name + " won!");
                    play = false;


                } else {
                    turn == crosses ? turn = noughts : turn = crosses;
                }

                }
            
        })
    }

}

return {
    resetBoard,
    gameLoop
};

})();

let btn = document.getElementById("btn");

btn.addEventListener("click", function(event) {
    game.resetBoard();
    game.gameLoop();
});





