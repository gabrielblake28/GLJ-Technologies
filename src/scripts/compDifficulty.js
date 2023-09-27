var oldMoves = [];

// Selects a random empty tile.
// Takes in: Nothing
// Returns: Coordinates of selected tile in the format of [num1,num2]
function easyDifficultySelection() {
    var squareValue = 1

    // Will repeat until a viable square is found
    do {
        rand1 = Math.floor(Math.random() * 3);
        rand2 = Math.floor(Math.random() * 3);

        squareValue = a_board[rand1][rand2];
    } while (squareValue != 0);

    console.log("rand1: " + rand1);
    console.log("rand2: " + rand2);
    return [rand1, rand2];
}

//Selects a tile adjacent to another owned tile whenever possible.
// Takes in: Nothing
// Returns: Coordinates of selected tile in the format of [num1,num2]
function medDifficultySelection() {
}