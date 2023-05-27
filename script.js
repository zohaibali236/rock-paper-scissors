const choices = ["rock", "paper", "scissors"];
const maxRounds = 5;

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

function playGame(input)
{    
    const computerChoice = getComputerChoice();

    const selections = document.querySelectorAll(".selected > div > img");

    selections[0].setAttribute("src", `./images/${input}.svg`);
    selections[0].style.marginTop = "20px";
    selections[0].style.width = "200px";
    selections[0].style.height = "200px";

    selections[1].setAttribute("src", `./images/${computerChoice}.svg`);
    selections[1].style.marginTop = "20px";
    selections[1].style.width = "200px";
    selections[1].style.height = "200px";

    
    const out = checkForWin(input, computerChoice);

    rounds++;
    
    const score = document.querySelectorAll(".selected > p:nth-child(odd)");
    if(out.includes("You Won"))
    {
        score[0].textContent = +score[0].textContent + 1;
    }
    else if(out.includes("You Lost")) 
    {
        score[1].textContent = +score[1].textContent + 1;
    }
    
    const roundsP = document.querySelector(".rounds > p");
    roundsP.textContent = `Round ${rounds}`;

    if(rounds === maxRounds)
    {
        // btns.forEach((btn) => {btn.disabled = true})


        if(+score[0].textContent > +score[1].textContent)
        {
            modalText.textContent = "You Win";
        }
        else modalText.textContent = "You Lose";

        modalDiv.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}
// MODAL START
const modalDiv = document.createElement("div");
const modalContent = document.createElement("div");

modalDiv.className = "modal";
modalContent.className = "modal-content";

const modalText = document.createElement("p");
const restart = document.createElement("button");
        
restart.textContent = "Restart Game?";

modalContent.appendChild(modalText);
modalContent.appendChild(restart);

modalDiv.appendChild(modalContent);

document.body.appendChild(modalDiv);
// MODAL END

const header = document.createElement("header");
const h1 = document.createElement("h1");


header.className = "text-glow flex center-both";
h1.textContent = "Rock, Paper, Scissors";
header.appendChild(h1);

const roundsDiv = document.createElement("div");
const roundsP = document.createElement("p");

roundsDiv.className = "rounds text-glow flex center-both";
roundsP.textContent = "Round 0";
roundsDiv.appendChild(roundsP);

const main = document.createElement("main");
main.appendChild(roundsDiv);


const humanSelectionDiv = document.createElement("div");
humanSelectionDiv.className = "selected";

const imageContainer = document.createElement("div");
imageContainer.style.width = "250px";
imageContainer.style.height = "250px";

const selectionImg = document.createElement("img");
selectionImg.setAttribute("src", "./images/questionmark.png");
imageContainer.appendChild(selectionImg);
humanSelectionDiv.appendChild(imageContainer);

const human = document.createElement("p");

human.textContent = "You";
human.className = "text-glow";
human.style.margin = 0;
humanSelectionDiv.appendChild(human);

const score = document.createElement("p");
score.textContent = "0";
score.className = "text-glow";
score.style.marginTop = "10px";
humanSelectionDiv.appendChild(score);


const computerSelectionDiv = document.createElement("div");

computerSelectionDiv.appendChild(imageContainer.cloneNode(true));
computerSelectionDiv.className = "selected";

const computer = document.createElement("p");
computer.className = "text-glow";
computer.textContent = "Computer";
computer.style.margin = 0;

computerSelectionDiv.appendChild(computer);
computerSelectionDiv.appendChild(score.cloneNode(true));


const selectionsContainer = document.createElement("div");
selectionsContainer.className = "flex center-both";
selectionsContainer.setAttribute("style", "gap: 50px");
selectionsContainer.appendChild(humanSelectionDiv);

selectionsContainer.appendChild(computerSelectionDiv);

main.appendChild(selectionsContainer);

const weaponChoices = document.createElement("div");
const weaponChoicesP = document.createElement("div");


weaponChoicesP.classList.add("text-glow")
weaponChoicesP.style.marginTop = "15vh";
weaponChoicesP.style.marginLeft = "15vw";
weaponChoicesP.style.fontSize = "32px";
weaponChoicesP.textContent = "Select your soldier"
weaponChoices.appendChild(weaponChoicesP);

optionsContainer = document.createElement("div");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.value = "rock";
paper.value = "paper";
scissors.value = "scissors";


const rockImg = document.createElement("img");
rockImg.src = "./images/rock.svg";

const paperImg = document.createElement("img");
paperImg.src = "./images/paper.svg";

const scissorsImg = document.createElement("img");
scissorsImg.src = "./images/scissors.svg";


rock.appendChild(rockImg);
paper.appendChild(paperImg);
scissors.appendChild(scissorsImg);

optionsContainer.className = "flex center-both";

optionsContainer.style.gap = "30px";

optionsContainer.appendChild(rock);
optionsContainer.appendChild(paper);
optionsContainer.appendChild(scissors);
weaponChoices.appendChild(optionsContainer);

main.appendChild(weaponChoices);


const footer = document.createElement("footer");
footer.className = "flex center-both";
footer.innerHTML = "Copyright &copy; Project by Zohaib Ali, 2023 "


document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);


const btns = document.querySelectorAll("button");



let rounds = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e)=>{
        playGame(btn.value);
    })
});

btns[0].disabled = false;

btns[0].addEventListener("click", () => {
    location.reload();
});