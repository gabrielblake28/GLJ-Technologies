function placement(coords, player) {
  const canPlace = a_board[coords[0]][coords[1]] == 0 ? true : false;

  if (player === "Computer") {
    if (canPlace) {
      a_board[coords[0]][coords[1]] = 2;
      isComTurn = !isComTurn;
      renderBoard();
    }
  } else {
    if (!isComTurn) {
      if (canPlace) {
        a_board[coords[0]][coords[1]] = 1;
        renderBoard();

        isComTurn = !isComTurn;
        setTimeout(() => {
          difficulty === 0
            ? placement(easyDifficultySelection(), "Computer")
            : placement(medDifficultySelection(), "Computer");
        }, 2000);
      } else {
        console.log("Can't place there!");
      }
    }
  }

  console.log(isComTurn);
}

function compFirst() {
  placement(easyDifficultySelection(), "Computer");
  goesFirst(false, checkDifficulty());
}
