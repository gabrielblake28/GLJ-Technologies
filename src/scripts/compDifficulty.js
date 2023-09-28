var oldMoves = [];

// Selects a random empty tile.
// Takes in: Nothing
// Returns: Coordinates of selected tile in the format of [num1,num2]
function easyDifficultySelection() {
  var squareValue = 1;
  console.log("easy");
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

// Selects a tile adjacent to another owned tile whenever possible.
// Takes in: Nothing
// Returns: Coordinates of selected tile in the format of [num1,num2]
function medDifficultySelection() {
  var randomOld;
  var holdIndex;
  var result;

  // Will loop until a valid tile has been found or (if none exist) a random one is chosen.
  do {
    if (oldMoves.length == 0) {
      result = easyDifficultySelection();
      oldMoves.push(result);
      return result;
    } else {
      holdIndex = Math.floor(Math.random() * oldMoves.length);
      randomOld = oldMoves[holdIndex];

      result = lookForAdjacentTiles(randomOld);

      //Removes old moves that no longer have valid adjacent tiles.
      if (result == false) {
        oldMoves.splice(holdIndex, 1);
      } else {
        oldMoves.push(result);
        return result;
      }
    }
  } while (true);
}

// Finds unoccupied adjacent tiles to the provided "base" tile.
// Takes in: Coordinates of the "base" tile.
// Returns: Coordinates of a random, adjacent, unoccupied tile in the format of [num1, num2] if one exists. If not, returns false.
function lookForAdjacentTiles(base) {
  var validCoords = [];
  console.log("Base coords: " + base);

  // Need to avoid an out of range exception. Clunky, but works.
  if (base[0] > 0) {
    console.log("Up");

    if (a_board[base[0] - 1][base[1]] == 0) {
      validCoords.push([base[0] - 1, base[1]]);
    }
    if (base[1] > 0) {
      if (a_board[base[0] - 1][base[1] - 1] == 0) {
        validCoords.push([base[0] - 1, base[1] - 1]);
      }
    }
    if (base[1] < 2) {
      if (a_board[base[0] - 1][base[1] + 1] == 0) {
        validCoords.push([base[0] - 1, base[1] + 1]);
      }
    }
  }
  if (base[0] < 2) {
    console.log("Down");

    if (a_board[base[0] + 1][base[1]] == 0) {
      validCoords.push([base[0] + 1, base[1]]);
    }
    if (base[1] > 0) {
      if (a_board[base[0] + 1][base[1] - 1] == 0) {
        validCoords.push([base[0] + 1, base[1] - 1]);
      }
    }
    if (base[1] < 2) {
      if (a_board[base[0] + 1][base[1] - 1] == 0) {
        validCoords.push([base[0] + 1, base[1] - 1]);
      }
    }
  }
  if (base[1] > 0) {
    console.log("Left");

    if (a_board[base[0]][base[1] - 1] == 0) {
      validCoords.push([base[0], base[1] - 1]);
    }
  }
  if (base[1] < 2) {
    console.log("Right");

    if (a_board[base[0]][base[1] + 1] == 0) {
      validCoords.push([base[0], base[1] + 1]);
    }
  }

  console.log("Valid coords: " + validCoords);

  if (validCoords.length > 0) {
    return validCoords[Math.floor(Math.random() * validCoords.length)]; //Returns a random valid square
  } else {
    return false; //returns false if no valid square exists
  }
}
