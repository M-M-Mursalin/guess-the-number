
let randomNumber = Math.floor(Math.random() * 20 + 1);
let guessNumber = (document.getElementById("guess").textContent = randomNumber);

//status area
let rightMessage = document.querySelector("#message");
let wrongMessage = document.querySelector("#message");

//win emoji
let winEmoji = document.getElementById("win");

//hide image
let hideImage = document.getElementById('hide');

//reset button
let resetButton = document.querySelector('#again').addEventListener('click', () => {
    location.reload();
});

//attempt
let attemp = document.getElementById('score');
let attempCount = 0;

//verify Output
let inputBtn = document.getElementById("input");
let submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', () =>{

    //attemp
    attempCount ++;
    attemp.textContent = attempCount;

    let getOutput = inputBtn.value;
    if (getOutput == guessNumber) {
        rightMessage.textContent = "🤩Correct Number🥳";
        winEmoji.style.display= 'block';
    } else if(getOutput < guessNumber){
        wrongMessage.textContent = "☹️It's Low Number";
        hideImage.style.backgroundImage = "url('image\ 135.png')";
    } else{
        wrongMessage.textContent = "😒Its High Number";
        hideImage.style.backgroundImage = "url('image\ 85.png')";
    }
})
