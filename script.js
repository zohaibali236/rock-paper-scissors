const choices = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    return choices[Math.floor(Math.random()*choices.length)];
}

function checkForWin(userInput, computerInput)
{
    userInput = userInput.toLowerCase();

    if(userInput === computerInput)
    {
        return "Round tied!";
    }
    else if (userInput === "rock")
    {
        if(computerInput === "scissors")
        {
            return `You Won the round! ${userInput} beats ${computerInput}`;
        }
        else return `You Lost the round! ${computerInput} beats ${userInput}`;
    }
    else if(userInput === "paper")
    {
        if(computerInput === "rock")
        {
            return `You Won the round! ${userInput} beats ${computerInput}`;
        }
        else return `You Lost the round! ${computerInput} beats ${userInput}`;
    }
    else if(userInput === "scissors")
    {
        if(computerInput === "paper")
        {
            return `You Won the round! ${userInput} beats ${computerInput}`;
        }
        else return `You Lost the round! ${computerInput} beats ${userInput}`;
    }
}

function playGame()
{
    
    let winsComputer = 0;
    let winsUser = 0;
    
    for(let i = 0; i < 5; i++)
    {
        let input = prompt("Enter rock, paper or scissors");
        
        while(input != choices.at(0) && input != choices.at(1) && input != choices.at(2))
        {
            input = prompt("Wrong input!\nOnly enter rock, paper or scissors");
        }

        const out = checkForWin(input, getComputerChoice());

        console.log(out);

        if(out.includes("You Won"))
        {
            winsUser++;
        }
        else if(out.includes("You Lost")) 
        {
            winsComputer++;
        }
    }

    if(winsUser > winsComputer)
    {
        console.log("You won the game");
    }
    else console.log("You lost the game");
}

playGame();