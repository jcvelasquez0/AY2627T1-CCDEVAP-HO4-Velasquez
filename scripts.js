
   


generateQuestion()
{
    let num1,num2, operator, correctAnswer;
    let score = 0;
    const operators = ["+", "-", "*"];

for(let i=0; i<5; i++)
{
    let randOp = operators[(Math.random() * operators.length)];
    let numOne = operators[Math.floor(Math.random() * 10)+1];
    let numTwo = operators[Math.floor(Math.random() * 10)+1];

    console.log("")
    return numOne, randOp, numTwo;
}
}
checkAnswer()
{
 if(randOp == '+')
{
        correctAnswer = numOne + numTwo;
}
    
else if(randOp == '-')
{
        correctAnswer = numOne + numTwo;
}

else if(randOp == '*')
{
        correctAnswer = numOne + numTwo;
}

if (answer == correctAnswer)
{
    score++;
} 
}

playAgain()
{
    const initialGameState = {
        
        

    }
}

