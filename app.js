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
        return `You lose! ${his} ${his === 'Scissors' ? 'beat' : 'beats'} ${mine}`;
    } else if (mine === his) {
        return `No one wins! ${mine} and ${his}`;
    } else if (mine !== 'Rock' && mine !== 'Paper' && mine !== 'Scissors') {
        return 'WRONG VALUE!';
    }
    return `You win! ${mine} ${mine === 'Scissors' ? 'beat' : 'beats'} ${his}`;
}

const game = (a) => {
    let score = 0;
    for (let i = 1; i <= 5; i++) {
        if (i === 5) {
            console.log('%cFinal round', 'font-size: 25px');
        } else {
            console.log(`%cRound number ${i}`, 'font-size: 20px');
        }
        const mine = prompt('Enter your choice: ');
        if (mine === null) {
            console.log('%cYou stopped the game!', 'font-size: 20px');
            return 1;
        }
        const choice = getComputerChoice();
        const result = playRound(mine, choice);
        console.log(result);
        setTimeout(500);
        if (result === 'WRONG VALUE!') {
            --i;
            continue;
        }
        if (result.includes('You win!')) score++;
        if (i !== 5) {
            console.log(`%cyour score is ${score}`,'font-size: 20px');
        }
        setTimeout(2000);
    }
    const machinesScore = 5 - score;
    const result = score > machinesScore ? `YOU WIN! ${score} : ${machinesScore}`
    : score === machinesScore ? `IT IS A TIE, ${mine} : ${his}` : `COMPUTER WINS! ${machinesScore} : ${score}`;
    console.log(`%c${result}`, 'font-size: 35px');
}

game();
