/* GAME FUNCTION
    -PLAYER MUST GUESS  A NUMBER BETWEEN MIN AND MAX
    -PLAYER GETS A CERTAIN  AMOUNT  OF GUSSES
    -NOTIFY  PLAYER OF GUSSES  REMAINING 
    - NOTIFY  THE PLAYER OF THE CORRECT  ANSWER IF LOSE
    -LET PLAYE CHOOSE  TO PLAY AGAIN
*/

// we need to parse some value bcuz black output (number) in display are some string
// that's we need to parse it into integer using parseInt.
let min=15,
    max=20,
    winningNumber=getRandomNum(min,max),
    guessesLeft=3;
    const   UIgame=document.querySelector('#game');
            minNum=document.querySelector('.min-num');
            maxNum=document.querySelector('.max-num');
            guessBtn=document.querySelector('#guess-btn');
            guessInput=document.querySelector('#guess-input');
            message=document.querySelector('.message');
            // assign UI min and max;
            minNum.textContent=min;
            maxNum.textContent=max;

            // play again event listner
            game.addEventListener('mousedown',function(e){
                if(e.target.className==='play-again'){
                    window.location.reload();
                }
            })
            // listen for guess
            guessBtn.addEventListener('click',    function (){
                let guess=parseInt(guessInput.value);
                // validate 
                if(isNaN(guess)||guess<min||guess>max){
                    setMessage(`please enter the  number between ${min}and ${max}`, 'red');
                }
                // check if won
                if(guess === winningNumber){
                    gameOver(true,`${winningNumber}is correct  , YOU WIN!`);
                    // disabled input
                    guessInput.disabled=true;
                    // change border color
                    guessInput.style.borderColor='green';
                    // set message 
                    setMessage(`${winningNumber} is  correct! you win`,'green');
                }else{
                    // wrong number
                   guessesLeft-=1;
                   if(guessesLeft===0){
                     // game over: lost
                    gameOver(false, `gameOver , you lost  , the correct number was ${winningNumber}`)
                     // disabled input
                    guessInput.disabled=true;
                    // change border color
                    guessInput.style.borderColor='green';
                    // set message 
                    setMessage(`${winningNumber} is  correct! you lost  game over`,'red');
                   }else{
                       //game continues - answer wrong
                       
                       // change border color
                       guessInput.style.borderColor='red';
                       // clear input
                       guessInput.value='';
                       // tell user  its the wrong number
                       setMessage(`${guess} is not correct, ${guessesLeft} guessesLeft `, 'red');
                   }

                }
            });

            // Game over
            function gameOver(won, msg){
                let color;
                 won===true?color='green': color='red';
                     // disabled input
                     guessInput.disabled=true;
                     // change border color
                     guessInput.style.borderColor='color';
                     // set text color
                     message.style.color=color;
                     // set message 
                     setMessage(msg);

                     // play again?
                     guessBtn.value='play Again';
                     guessBtn.className +='play-again';
            }
            
            // get winning number
            function getRandomNum(min,max){
               return (Math.floor(Math.random()*(max-min+1)+min));
            }
         
            // set message;
            function setMessage(msg ,color){
                message.textContent=msg;
                message.style.color=color;
            }
        