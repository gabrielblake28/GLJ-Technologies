Program Written By: Gabriel, Lori, and Jacob
Documentation Depricated By: Jacob (09/27/2023 : 7:39PM (PST))

Documentation:
    Objects:
        d_game:
            - (Div) Contains:
                - c_board

        d_goFirst:
            - (Div) Contains:
                - b_goFirst
                - b_goSecond

        c_board:
            - (Canvas) Used to display gameplay
            - (Click) Triggers getCurrentSquare(self, click event)
        
        b_goFirst:
            - (Button) Triggers goesFirst(false)

        b_goSecond:
            - (Button) Triggers goesFirst(true)

    Variables:
        isComTurn:
            - (Boolean) Used to indicate who's turn it isComTurn
                - true: It is the computer's turn
                - false: It is the user's turn

        a_board:
            - (Integer Array) Holds curent board state
                - Ex:
                    a_Board[column][row] = 
                    0 - Empty
                    1 - O
                    2 - X
    
    Functions:
        showPopup:
            - Takes in:
                - NA
            - Actions:
                - Shows d_goFirst
                - Hides d_game
            - Calls:
                - NA
        
        goesFirst:
            - Takes in:
                - Boolean
            - Actions:
                - If true:
                    - Sets isComTurn = true
                - If false:
                    - Sets isComTurn = false
            - Calls:
                    - startGame
        
        startGame:
            - Takes in:
                - NA
            - Actions:
                - Shows d_game
                - Hides d_goFirst
                - TODO:
                    - Game Loop Takes Place Here
            - Calls:
                    - renderBoard

        drawSquares:
            - Takes in:
                - Canvas
                - Canvas context
            - Actions:
                - Draws board based on canvas size
            - Calls:
                - NA

        drawX:
            - Takes in:
                - Canvas
                - Canvas context
                - Column
                - Row
            - Actions:
                - Draws X at chosen square
            - Calls:
                - NA

        drawO:
            - Takes in:
                - Canvas
                - Canvas context
                - Column
                - Row
            - Actions:
                - Draws O at chosen square
            - Calls:
                - NA

        renderBoard:
            - Takes in:
                - NA
            - Actions:
                - Draws board based off Array
            - Calls:
                - drawX
                - drawO
        
        getCurrentSquare:
            - Takes in:
                - Canvas
                - Click event
            - Actions:
                Calculates box selected by mouse
            - Calls:
                -NA
            - Returns:
                Integer Array [Column, Row] selected by mouse