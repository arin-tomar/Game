let userScore = 0;
let systemScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const systemScorePara = document.querySelector("#system-score");

const genSystemChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, systemChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${systemChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        systemScore++;
        systemScorePara.innerText = systemScore;
        msg.innerText = `You Lost. ${systemChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const systemChoice = genSystemChoice();
    console.log("System choice = ", systemChoice);

    if (userChoice === systemChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = systemChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = systemChoice === "scissor" ? false : true;
        } else {
            userWin = systemChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, systemChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
