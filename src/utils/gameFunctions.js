// Constants
const keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k'];
const randomNotes = [];
const userNotes = [];
const firstRandomNotes = 4;
const timeBetweenNotes = 500;
let btnStart;
let display;

// Variables
export let score = 0;
export let time = 0;
let intervalTime;
let userTurn = false;
let gameOver = false;

window.onload = function() {
    initRandomNotes();

    btnStart = document.getElementById('start');

    display = document.getElementById('display');
}

export function initRandomNotes(){
    randomNotes.length = 0;
    userNotes.length = 0;
    score = 0;
    time = 0;
    gameOver = false;

    for (let i = 0; i < firstRandomNotes; i++) {
        updateRandomNotes();
    }
}

export function updateRandomNotes(){
    randomNotes.push(getRandomNote());
}

export function getRandomNote(){
    return keys[Math.floor(Math.random() * keys.length)];
}

function popUpKey() {
    let p = document.createElement('p');
    p.classList.add('p-key');
    p.classList.add('animate-ping');
    p.classList.add('uppercase');
    p.textContent = event.key;
    display.appendChild(p);
    setTimeout(function() {
        p.remove();
    }, 1000);
}

document.addEventListener('keydown', function(event) {
    
    if (keys.includes(event.key) && !gameOver) {
        popUpKey();
    }

    if (userTurn && keys.includes(event.key)) {
        // display = document.getElementById('display');

        if (!userTurn) {
            return;
        }

        userNotes.push(event.key);

        //si la nota es incorrecta que pare el juego
        if (userNotes[userNotes.length - 1] !== randomNotes[userNotes.length - 1]) {
            console.log('User: ', userNotes);
            console.log('Game: ' , randomNotes);

            console.log('Game Over');
            gameOver = true;
            btnStart.disabled = false;
            display.textContent = 'Game Over! Your score is: ' + score + ' points. Press F5 to play again.';

            userNotes.length = 0;
            randomNotes.length = 0;

            clearInterval(intervalTime);            
        }

        // console.log('User: ', userNotes.length, 'Random: ', randomNotes.length);

        if (userNotes.length === randomNotes.length-1) {
            console.log('User: ', userNotes);
            
            score = calculateScore() + score;
            console.log('Score: ', score);

            setTimeout(function() {
                userNotes.length = 0;
                handlePlayNote();
            }, 1000);
        }
    }
});

function calculateScore() {
    // Fórmula para calcular el puntaje basado en el tiempo y el número de letras en la secuencia
    const timePenalty = 2;
    const letterBonus = 10;

    const timeScore = Math.max(0, (randomNotes.length * letterBonus) + (time * timePenalty));
    return timeScore;
}

export function handlePlayNote() {
    userTurn = false;

    // btnStart = document.getElementById('start');

    if (randomNotes.length === 0) {
        initRandomNotes();
    }

    // btnStart.disabled = true;

    if (time === 0) {
        intervalTime = setInterval(function() {
            time++;
            // console.log('Time: ', time);
        }, 1000);
    }

    randomNotes.forEach(function(letra, index) {
        letra = letra.toLowerCase();
        
        var eventoKeyDown = new KeyboardEvent('keydown', {
            key: letra,
            bubbles: true
        });

        setTimeout(function() {
            document.dispatchEvent(eventoKeyDown);
        }, index * timeBetweenNotes);

        setTimeout(function() {
            var eventoKeyUp = new KeyboardEvent('keyup', {
                key: letra,
                bubbles: true
            });
            document.dispatchEvent(eventoKeyUp);
        }, (index + 1) * timeBetweenNotes);
    });

    setTimeout(function() {
        userTurn = true;
    }, randomNotes.length * timeBetweenNotes);

    console.log(randomNotes);

    updateRandomNotes();
}