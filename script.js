'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // Quando não há entrada
  if (!guess) {
    displayMessage('⛔️ Nenhum número!');

    // Quando o jogador ganha
  } else if (guess === secretNumber) {
    displayMessage('🎉 Número correto!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Quando o palpite está errado
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Muito alto!' : '📉 Muito baixo!'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Você perdeu o jogo!');

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  displayMessage('Comece a adivinhar...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
