// PLAYERS

const players = (symbol, name) => {

    // score tracker

    let row1 = 0; // 0 1 2
    let row2 = 0; // 3 4 5
    let row3 = 0; // 6 7 8
    let col1 = 0; // 0 3 6
    let col2 = 0; // 1 4 7
    let col3 = 0; // 2 5 8
    let dia1 = 0;
    let dia2 = 0;

    const resetScore = () => {
        row1 = 0; // 0 1 2
        row2 = 0; // 3 4 5
        row3 = 0; // 6 7 8
        col1 = 0; // 0 3 6
        col2 = 0; // 1 4 7
        col3 = 0; // 2 5 8
        dia1 = 0; // 0 4 8
        dia2 = 0; // 2 4 6
    }

    const addScore = (i) => {
        
        switch (i) {
            case 0:
                row1++;
                col1++;
                dia1++;
                break;
            case 1:
                row1++;
                col2++;
                break;
            case 2:
                row1++;
                col3++;
                dia2++;
                break;
            case 3:
                row2++;
                col1++;
                break;
            case 4:
                row2++;
                col2++;
                dia1++;
                dia2++;
                break;
            case 5:
                row2++;
                col3++;
                break;
            case 6:
                row3++;
                col1++;
                dia2++;
                break;
            case 7:
                row3++;
                col2++;
                break;
            case 8:
                row3++;
                col3++;
                dia1++;
                break;
        }

        console.log("row1 is " + row1 + " and row 2 is " + row2);
    }

    

    const winStatus = () => {
        if (row1 == 3 || row2 == 3 || row3 == 3 || col1 == 3 || col2 == 3 || col3 == 3 || dia1 == 3 || dia2 == 3) {
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
        symbol,
        resetScore
    }

}

// GAMEBOARD

const game = ( () => {

    // create board array
    let board = ["", "", "", "", "", "", "", "", ""];
    let allBoxes = document.querySelectorAll('[id=box]');

    // init player objects
    const crosses = players("X", "PLAYER ONE");
    const noughts = players("O", "PLAYER TWO");

    // set turn
    let turn = crosses;
    let play = true;

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

    // checks if the board is full
    const boardFull = () => {
        for (let i = 0; i < board.length; i++) {
            if (board[i] == "") return false;
        } 
        return true;
    }

    // display text
    const displayText = (winner) => {
        let displayArea = document.querySelector('[class=winnerDisplay');
        displayArea.textContent = (winner);
    }

    // the game loop function

    const gameLoop = () => {

        // the event listener
        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].addEventListener("click", function(e) {

                if (play == true && board[i] == "") {

                    // add turn to board array
                    board[i] = turn.symbol;


                    // add to player count
                    turn.addScore(i);

                    // add to screen
                    populateBoard();

                    // check for winner
        
                    if (turn.winStatus() == true) {
                        console.log(turn.name + " won!");
                        displayText(turn.name + " WINS");
                        play = false;
                    } else if (boardFull() == true) {
                        console.log("tie!");
                        displayText("TIE!");
                        play = false;
                    } else {
                        turn == crosses ? turn = noughts : turn = crosses;
                    }
                }
            })
        }

    }

    // board reset function
    const resetBoard = () => {
        console.clear();
        board = ["", "", "", "", "", "", "", "", ""];
        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].textContent = "";
        }

        displayText("");

        crosses.resetScore();
        noughts.resetScore();
        play = true;
        turn = crosses;

    }

    let btn = document.getElementById("btn");
    btn.addEventListener('click', resetBoard);

    return { gameLoop };

})();


game.gameLoop();



