var randomNumber = Math.floor(Math.random()*99)+1;
    var lossNum = 0;;
    var winNum = 0;
    var loss = document.querySelector('#loss');
    var win = document.querySelector('#win');
    
    var guesses = document.querySelector('#guesses');
    var lastResult = document.querySelector('#lastResult');
    var lowOrHi = document.querySelector('#lowOrHi');
            
    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');
            
    var guessCount = 1;
    var attempts = document.querySelector('#attempts');
    var resetButton = document.querySelector('#reset');
    resetButton.style.display = 'none';
    guessField.focus();
    
            
    function checkGuess() {
        var userGuess = Number(guessField.value);
        if (userGuess > 99 || Number.isNaN(userGuess)) {
            alert('Wrong Entry! Enter a number and a number that is less than 99');
        }
        else {
        
            if (guessCount === 1) {
                guesses.innerHTML = 'Previous guesses: ';
            }
            guesses.innerHTML += userGuess + ' ';
            
                if (userGuess === randomNumber) {
                    lastResult.innerHTML = 'Congratulations! You got it right!';
                    lastResult.style.backgroundColor = 'green';
                    winNum++;
                    win.innerHTML = winNum;
                    lowOrHi.innerHTML = '';
                    setGameOver();
                }
                else if (guessCount === 7) {
                    lastResult.innerHTML = 'Sorry. you lost!';
                    lossNum++;
                    loss.innerHTML = lossNum;
                    setGameOver();
                }
                else {
                    lastResult.innerHTML = 'Wrong!';
                    lastResult.style.backgroundColor = 'red';
                    if (userGuess < randomNumber) {
                        lowOrHi.innerHTML = 'Last guess was too low!';
                    }
                    else if (userGuess > randomNumber) {
                        lowOrHi.innerHTML = 'Last guess was too high!';
                    }
                }
                  
                attempts.innerHTML = guessCount;        
                guessCount++;
                guessField.value = '';
                guessField.focus();    
        }    
    }
            
    guessSubmit.addEventListener('click', checkGuess);
            
    function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton.style.display = 'inline';
        resetButton.addEventListener('click', resetGame);
    }
            
    function resetGame() {
        guessCount = 1;
                
        var resetParas = document.querySelectorAll('.resultParas p');
        for (var i = 0; i < resetParas.length; i++) {
            resetParas[i].textContent = '';
        }
                
        resetButton.style.display = 'none';
                
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
                
        lastResult.style.backgroundColor = 'white';
                
        randomNumber = Math.floor(Math.random() * 99)+1;
    }