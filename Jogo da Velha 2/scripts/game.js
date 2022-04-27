var board = ['','','','','','','','',''];
var playerTurn = 0;
var players = ['', ''];
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function saveSelect(position){
    if(players[0] == ''){

        players[0] = position;
    }else{
        players[0] = position;
    }
    
}

function saveSelect2(position){
    if(players[1] == ''){

        players[1] = position;
    }else{
        players[1] = position;
    }
    
}


function onMove(position){

    if(gameOver){
        return
    }

    if(board[position] == ''){
        board[position] = players[playerTurn];

        gameOver = isWin();

        if(!gameOver){    
            playerTurn = (playerTurn == 0)?1:0
        }
    }

    return gameOver;
}

function isWin(){


    for( let i = 0; i < winStates.length; i++){

        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if( board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){

            return true
        
        }
    }
    return false;
}