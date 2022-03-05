"use strict";

/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `🎉Correct number!`;
document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;


document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When there is no input
  if (!guess) {
    displayMessage(`🛑 no number!`);
    // When the answer is correct
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`.number`).style.width = `30rem`;
    if (highscore < score) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   guess > secretNumber ? `📈 Too high` : `📉 Too low`;
      displayMessage(guess > secretNumber ? `📈 Too high` : `📉 Too low`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`💥You lost the game!😭`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

/*


    // When the answer is lower than input
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈 Too high`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!😭`;
      document.querySelector(`.score`).textContent = 0;
    }
    //When the answer is higher than input
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉 Too low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥You lost the game!😭`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
}); 
*/
