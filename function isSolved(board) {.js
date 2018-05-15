function isSolved(board) {
  // TODO: Check if the board is solved!
  if(board[0][0] === board[0][1] === board[0][2] === 1 ||
      board[1][0] === board[1][1] === board[1][2] === 1 ||
      board[2][0] === board[2][1] === board[2][2] === 1 ||
      board[0][0] === board[1][0] === board[2][0] === 1 ||
      board[0][1] === board[1][1] === board[2][1] === 1 ||
      board[0][2] === board[1][2] === board[2][2] === 1 ||
      board[0][0] === board[1][1] === board[2][2] === 1 ||
      board[0][2] === board[1][1] === board[2][0] === 1) {
      return 1;
  }
  else if(board[0][0] === board[0][1] === board[0][2] === 2 ||
      board[1][0] === board[1][1] === board[1][2] === 2 ||
      board[2][0] === board[2][1] === board[2][2] === 2 ||
      board[0][0] === board[1][0] === board[2][0] === 2 ||
      board[0][1] === board[1][1] === board[2][1] === 2 ||
      board[0][2] === board[1][2] === board[2][2] === 2 ||
      board[0][0] === board[1][1] === board[2][2] === 2 ||
      board[0][2] === board[1][1] === board[2][0] === 2) {
      return 2;
  }
  else if(board[0][0] !== 0 &&
            board[0][1] !== 0 &&
            board[0][2] !== 0 &&
            board[1][0] !== 0 &&
            board[1][1] !== 0 &&
            board[1][2] !== 0 &&
            board[2][0] !== 0 &&
            board[2][1] !== 0 &&
            board[2][2] !== 0) {
    return 0;
  }
  else {
    return -1;
  }
}