var isComTurn = false;
var a_board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function showPopup() {
    document.getElementById("d_game").hidden = true;
    document.getElementById("d_goFirst").hidden = false;

    console.log("Popup Displayed");
}

function goesFirst(_isComTurn) {
    isComTurn = _isComTurn;
    console.log("isComTurn = " + isComTurn);
    startGame();
}

function startGame() {
    document.getElementById("d_goFirst").hidden = true;
    document.getElementById("d_game").hidden = false;

    renderBoard();
    
    // Append gameplay here
}

function drawSquares(_canvas, _context) {
    var scale = _canvas.width / 3;

    _context.beginPath();

    _context.moveTo(scale, 1);
    _context.lineTo(scale, _canvas.width - 1);
    _context.moveTo(scale * 2, 1);
    _context.lineTo(scale * 2, _canvas.width - 1);

    _context.moveTo(1, scale);
    _context.lineTo(_canvas.width - 1, scale);
    _context.moveTo(1, scale * 2);
    _context.lineTo(_canvas.width - 1, scale * 2);

    _context.strokeStyle = "blue";
    _context.stroke();
}

function drawX(_canvas, _context, _column, _row) {
    var scale = _canvas.width / 3;

    _context.beginPath();

    _context.moveTo(scale * _row, scale * _column);
    _context.lineTo((scale * _row) + scale, (scale * _column) + scale);

    _context.moveTo(scale * _row, (scale * _column) + scale);
    _context.lineTo((scale * _row) + scale, scale * _column);

    _context.strokeStyle = "red";
    _context.stroke();
}

function drawO(_canvas, _context, _column, _row) {
    var scale = _canvas.width / 6;

    _context.beginPath();

    _context.arc(scale + (_row * scale * 2), scale + (_column * scale * 2), scale, 0, 2 * Math.PI);
    
    _context.strokeStyle = "green";
    _context.stroke();
}

function renderBoard() {
    var canvas = document.getElementById("c_board");
    var context = canvas.getContext("2d");
    var debug = "Array =\n  ";

    drawSquares(canvas, context);
    
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (a_board[i][j] == 0) {
                debug = debug + "0 ";
            }
            else if (a_board[i][j] == 1) {
                debug = debug + "1 ";
                drawX(canvas, context, i, j);
            }
            else if (a_board[i][j] == 2) {
                debug = debug + "2 ";
                drawO(canvas, context, i, j);
            }
        }
        debug = debug + "\n  ";
    }
    console.log(debug);
}

function getCurrentSquare(_canvas, event) {
    var canvasPos = _canvas.getBoundingClientRect();
    var scale = _canvas.width / 3;
    var mousePos = [

        Math.floor((event.clientY - canvasPos.top) / scale),
        Math.floor((event.clientX - canvasPos.left) / scale)
    ];
    console.log(
        "User selected square:\nColumn: " + mousePos[0] +
        "\nRow: " + mousePos[1]);
    return mousePos;
}

showPopup();