const play = document.querySelector('.play');
const buttons = document.querySelectorAll('.button');
const btns = document.querySelector('.buttons');

const texts = document.querySelector('.texts');
const myScore = document.querySelector('.user-score');
const pcScore = document.querySelector('.computer-score');

const myChoice = document.querySelector('.my-choice');
const hisChoice = document.querySelector('.his-choice');

const output = document.querySelector('.output');

const popup = document.querySelector('.popup');
const playAgain = document.querySelector('.play-again');
const finalResult = document.querySelector('.final-result');
const finalScore = document.querySelector('.final-score');

play.addEventListener('click', () => {
    play.style.display = 'none';
    texts.style.display = 'block';
    buttons.forEach((button) => button.style.display = 'block');
});

let my = 0;
let him = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const choice = e.target.getAttribute('data-name');
        myChoice.textContent = choice;
        myChoice.style.color = 'green';
        hisChoice.textContent = getComputerChoice();
        hisChoice.style.color = 'red';
        output.textContent = playRound(myChoice.textContent, hisChoice.textContent);
        pcScore.textContent = him;
        myScore.textContent = my;
        if (him === 5 || my === 5) showResult();
    });
});

const getComputerChoice = () => {
    const values = ['Rock', 'Paper', 'Scissors']
    const index = Math.floor(Math.random() * values.length);
    return values[index];
};

const playRound = (mine, his) => {
    mine = mine[0].toUpperCase().concat(mine.slice(1).toLowerCase());
    if (mine === 'Rock' && his === 'Paper' || 
    mine === 'Paper' && his === 'Scissors' || 
    mine === 'Scissors' && his === 'Rock') {
        ++him;
        return `You lose! ${his} ${his === 'Scissors' ? 'beat' : 'beats'} ${mine}`;
    } else if (mine === his) {
        return `No one wins! ${mine} and ${his}`;
    } else if (mine !== 'Rock' && mine !== 'Paper' && mine !== 'Scissors') {
        return 'WRONG VALUE!';
    }
    ++my;
    return `You win! ${mine} ${mine === 'Scissors' ? 'beat' : 'beats'} ${his}`;
}

const showResult = () => {
    btns.style.display = 'none';
    texts.style.display = 'none';
    popup.style.display = 'block';
    finalScore.textContent = `FINAL SCORE: ${my} ${him}`;
    if (my == 5) {
        finalResult.textContent = 'YOU WIN!';
        finalResult.style.color = 'green';
    } else if (him === 5) {
        finalResult.textContent = 'YOU LOSE!';
        finalResult.style.color = 'red';
    }
    my = 0;
    him = 0;
    playAgain.addEventListener('click', () => {
        popup.style.display = 'none';
        btns.style.display = 'flex';
        texts.style.display = 'block';
        myScore.textContent = my;
        pcScore.textContent = him;
        myChoice.textContent = '';
        hisChoice.textContent = '';
        output.textContent = '';
    });
}
