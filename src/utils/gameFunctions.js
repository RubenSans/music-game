// Constants
const keys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k'];
const randomNotes = [];
const userNotes = [];
const firstRandomNotes = 4;
const timeBetweenNotes = 500;

// Variables
export let score = 0;
export let time = 0;
let intervalTime;
let userTurn = false;

window.onload = function() {
    initRandomNotes();
}

export function initRandomNotes(){
    randomNotes.length = 0;
    userNotes.length = 0;
    score = 0;
    intervalTime = setInterval(function() {
        time++;
    }, 1000);

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

document.addEventListener('keydown', function(event) {
    if (userTurn && keys.includes(event.key)) {
        userNotes.push(event.key);

        //si la nota es incorrecta que pare el juego
        if (userNotes[userNotes.length - 1] !== randomNotes[userNotes.length - 1]) {
            console.log('User: ', userNotes);
            console.log('Game: ' , randomNotes);

            console.log('Game Over');
            userNotes.length = 0;
            randomNotes.length = 0;

            clearInterval(intervalTime);
            
            initRandomNotes();
        }

        // console.log('User: ', userNotes.length, 'Random: ', randomNotes.length);

        if (userNotes.length === randomNotes.length-1) {
            console.log('User: ', userNotes);
            
            score = calculateScore();
            console.log('Score: ', score);
            console.log('Time: ', time);

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

    const timeScore = Math.max(0, (randomNotes.length * letterBonus) - (time * timePenalty));
    return timeScore;
}

export function handlePlayNote() {
    userTurn = false;

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