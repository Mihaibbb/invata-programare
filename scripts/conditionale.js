const nextLesson = document.querySelector('.next-lesson');
const failElement = document.querySelector('.fail_element');

const secondBoard = document.querySelector('.board.second');
const firstCell = secondBoard.querySelector('.cell.first');
const lastCell = secondBoard.querySelector('.cell.last');

const directions = {
    top: [-1, 0],
    right: [0, 1],
    bottom: [1, 0],
    left: [0, -1]
}

const secondKey = secondBoard.parentElement.querySelector('.key_container.first');
const secondChoppie = secondBoard.querySelector('img');
const secondKeyTextContent = secondKey.querySelector('.text');
const secondLight = secondBoard.querySelector('.cell .light');

setInterval(() => {
    secondLight.classList.toggle('green');
}, 5000);

const key = secondKey.querySelector('.key');

const secondReviewTextContent = secondBoard.parentElement.querySelector('.review');

let counter = 0, win = false;

secondKey.addEventListener('click', () => {
    if (failElement.innerHTML !== "" || win) return;
    if (counter === 1 && !secondLight.classList.contains('green')) {
        
        secondReviewTextContent.innerHTML += "☹️ ";
        failElement.innerHTML += "Choppie trebuie sa astepte la culoarea rosie!<br><div class='restart'>Resetare</div>"
        
        const restartButton = failElement.querySelector('.restart');

        restartButton.addEventListener('click', () => {
            failElement.innerHTML = "";
            secondReviewTextContent.innerHTML = "";
            secondChoppie.style.left = '0px';
            counter = 0;
        });
    }
    counter++;
    secondChoppie.style.left = `${counter * 100}px`;

    if (counter === 4) {
        secondReviewTextContent.innerHTML += "🙂 ";
        win = true;
        nextLesson.classList.add("show");
    }
   
});

document.addEventListener('keydown', e => {
    
    if (e.key !== "ArrowRight" || failElement.innerHTML !== "" || counter === 4) return;
    if (counter === 1 && !secondLight.classList.contains('green')) {
        
        secondReviewTextContent.innerHTML += "☹️ ";
        failElement.innerHTML += "Choppie trebuie sa astepte la culoarea rosie!<br><div class='restart'></div>"
        const restartButton = failElement.querySelector('.restart');
        restartButton.addEventListener('click', () => {
            failElement.innerHTML = "";
            secondReviewTextContent.innerHTML = "";
            secondChoppie.style.left = '0px';
            counter = 0;
        });
        
    }
    counter++;
    secondChoppie.style.left = `${counter * 100}px`;
    if (counter === 4) {
        secondReviewTextContent.innerHTML += "🙂 ";
        win = true;
        nextLesson.classList.add("show");
    }
});





