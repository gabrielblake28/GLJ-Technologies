function placement(coords, player) {
  if (player === "Computer") {
    a_board[coords[0]][coords[1]] = 2;
    renderBoard();
  } else {
    const canPlace = a_board[coords[0]][coords[1]] == 0 ? true : false;

    if (canPlace) {
      a_board[coords[0]][coords[1]] = 1;
      renderBoard();

      // set 2 second timer

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
