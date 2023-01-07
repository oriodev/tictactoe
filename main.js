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

// // PLAYER OBJECT

// const player = ( () => {


// });



// // GAME OBJECT

// const noughts = players("O");
// const crosses = players("X");

// const gamePlay = ( () => {

//     let playing = true;

//     let turn = crosses;

//     turn.makeMove();

//     const slotsFilled = () => {

//         for (let i = 0; i < gameBoard.board.length; i++) {
//             if (gameBoard.board[i] == "") {
//                 return false;
//             } else {
//                 return true;
//             }
//         }

//     }

//     const makeMove = () => {

//         let allBoxes = gameBoard.allBoxes;

//         for (let i = 0; i < allBoxes.length; i++) {
//             allBoxes[i].addEventListener("click", function(event) {

//                 if (gameBoard.board[i] == "") {

//                     gameBoard.board[i] = symbol;
//                     console.log(gameBoard.board);
//                     gameBoard.populateBoxes();

//                     if (gamePlay.turn == crosses) {
//                         gamePlay.turn = noughts;
//                     } else {
//                         gamePlay.turn = crosses;
//                     }

//                 }
//             })
//         }

//     }

//     const gameLoop = () => {

                
        
//     }

//     return {
//         gameLoop
//     };


// })();

// //gamePlay.gameLoop();
gameBoard.populateBoxes();