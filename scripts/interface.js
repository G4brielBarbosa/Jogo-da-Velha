var player = document.getElementById('player');
var firstDisplay = document.getElementById('firstContainer');
var secondDisplay = document.getElementById('secondContainer');
var thirdDisplay = document.getElementById('thirdContainer');
var playerIcons = document.querySelectorAll('.icons');
var playerIcons2 = document.querySelectorAll('.icons2');
var startGame = document.getElementById('startGame');
var backMenu = document.getElementById('backMenu1');
var backMenu2 = document.getElementById('backMenu2');
var scoreIcons = document.getElementById('scoreIcons');
var scoreIcons2 = document.getElementById('scoreIcons2');
let res1 = 000;
let res2 = 000;
let squares = document.querySelectorAll('.square');
let reset = document.getElementById('resetGame');
let jogador1 = document.getElementById('jogador1');
let jogador2 = document.getElementById('jogador2');

player.addEventListener('click', playerSelect);

playerIcons.forEach((icons) => {
    icons.addEventListener('click', iconsSelect);
})

playerIcons2.forEach((icons) => {
    icons.addEventListener('click', iconsSelect2);
})

startGame.addEventListener('click', startSelect);

backMenu.addEventListener('click', loadMenu);
backMenu2.addEventListener('click', loadMenu);

squares.forEach((square) => {

    square.addEventListener('click', onTarget);
})

reset.addEventListener('click', resetGame)




function onTarget(event){

    let square = event.target;
    let position = square.id;
    
    onMove(position);
    if(isWin()){

        if(playerTurn == 0){
            res1 += 1;
            jogador1.innerHTML = '  ' + ('00' + res1).slice(-2);
        }else{
            res2 += 1;
            jogador2.innerHTML = '  ' + ('00' + res2).slice(-2);
        }


        setTimeout(() => {
            alert('O jogo acabou! - o vencedor foi o jogador ' + board[position].toUpperCase())
        }, 100)

    }

    updateScreen(position);

}

function updateScreen(position){

    let square = document.getElementById(position.toString());
    let symbols = board[position];
    let text = `<div class='${symbols}'></div>`;

    console.log(square)

    square.innerHTML = text;

}

function playerSelect(){

    firstDisplay.style.display = 'none'
    secondDisplay.style.display = 'flex'
    thirdDisplay.style.display = 'none'
}

function iconsSelect(event){
    let icons = event.target;
    let position = icons.id;
    
    saveSelect(position);
    

}

function iconsSelect2(event){
    let icons = event.target;
    let position = icons.id;
    
    saveSelect2(position);
    
}

function startSelect(){


    if(players[0, 1] != ''){
        firstDisplay.style.display = 'none';
        secondDisplay.style.display = 'none';
        thirdDisplay.style.display = 'flex';
    }else{
        alert('Selecione todos os jogadores');
    }

    scorePlayer()
    
}

function scorePlayer(){

    let foxi = '&#x1F98A;';
    let lioni = '&#x1F981';
    let pigi = '&#x1F437'

    if(players[0] == 'fox'){
        scoreIcons.innerHTML = foxi;
    }else if(players[0] == 'lion'){
        scoreIcons.innerHTML = lioni;
    }else if(players[0] == 'pig'){
        scoreIcons.innerHTML = pigi;
    }
    

    if(players[1] == 'fox2'){
        scoreIcons2.innerHTML = foxi;
    }else if(players[1] == 'lion2'){
        scoreIcons2.innerHTML = lioni;
    }else if(players[1] == 'pig2'){
        scoreIcons2.innerHTML = pigi;
    }

}


function loadMenu(){

    firstDisplay.style.display = 'flex';
    secondDisplay.style.display = 'none';
    thirdDisplay.style.display = 'none';

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) =>{

        let position = square.id;
        symbol = board[position];

        if(symbol != ''){

            square.innerHTML = "";
            jogador1.innerHTML = "";
            jogador2.innerHTML = "";
            
        }
    })

    board = ['','','','','','','','',''];
    playerTurn = 0;
    players = ['', ''];
    gameOver = false;
    res1 = 000;
    res2 = 000;

    

}

function resetGame(){

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) =>{

        let position = square.id;
        symbol = board[position];

        if(symbol != ''){

            square.innerHTML = "";
        }
    })

    board = ['','','','','','','','',''];
    playerTurn = 0;
    gameOver = false;

}
