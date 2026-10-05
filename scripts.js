    let numOne,numTwo, randOp, correctAnswer;
    let score = 0;
    const operators = ["+", "-", "*"];


function generateQuestion()
{

    randOp = operators[Math.floor(Math.random() * operators.length)];
    numOne = Math.floor(Math.random() * 11);
    numTwo = Math.floor(Math.random() * 11);

document.getElementById('question').textContent = `${numOne} ${randOp} ${numTwo}`;
document.getElementById('answer').value = "";

    if(randOp === '+')
{
        correctAnswer = numOne + numTwo;
}
    
else if(randOp === '-')
{
        correctAnswer = numOne - numTwo;
}

else if(randOp === '*')
{
        correctAnswer = numOne * numTwo;
}


}

function checkAnswer()
{
    const answer = Number(document.getElementById('answer').value);
    const messageElement = document.getElementById('message');
    const scoreElement = document.getElementById('score');


if (answer === correctAnswer)
{
    
    messageElement.textContent = "Correct!";
    messageElement.style.color = "green";
    score++;
    scoreElement.textContent = score;
} 

else {
        messageElement.textContent = `Wrong! Correct answer is ${correctAnswer}.`;
        messageElement.style.color = "red";
    }
if (score === 5) {
        document.getElementById('div-questions').style.display = "none";
        document.getElementById('div-success').style.display = "block";
    }
generateQuestion();


}

function playAgain()
{
    score = 0;
    document.getElementById('score').textContent = "0";
    document.getElementById('message').textContent = "";
    document.getElementById('div-questions').style.display = "block";
    document.getElementById('div-success').style.display = "none";

    generateQuestion();
}
generateQuestion();