const nextLesson = document.querySelector('.next-lesson');

const firstBoard = document.querySelector('.board.first');
const firstCell = firstBoard.querySelector('.cell.first');
const lastCell = firstBoard.querySelector('.cell.last');

const directions = {
    top: [-1, 0],
    right: [0, 1],
    bottom: [1, 0],
    left: [0, -1]
}

const firstKey = firstBoard.parentElement.querySelector('.key_container.first');
const firstChoppie = firstBoard.querySelector('img');
const firstKeyTextContent = firstKey.querySelector('.text');

const key = firstKey.querySelector('.key');
const solve = "Dreapta Dreapta Dreapta Dreapta";
const firstReviewTextContent = firstBoard.parentElement.querySelector('.review');

let counter = 0;
let level2 = false, level3 = false, level4 = false;
firstKey.addEventListener('click', () => {
    if (level2) return;
    if (counter === 4) {
        return;
    }
    counter++;
    firstChoppie.style.left = `${counter * 100}px`;

    if (counter === 4) {
        firstReviewTextContent.innerHTML += "🙂 ";
        levelTwo();
    }
   
});

document.addEventListener('keydown', e => {
    if (level2) return;
    if (e.key !== "ArrowRight") return;
    if (counter >= 4) {
        return;
    }
    counter++;
    console.log(counter);
    firstChoppie.style.left = `${counter * 100}px`;
    if (counter === 4) {
        firstReviewTextContent.innerHTML += "🙂 ";
        counter++;
        levelTwo();
    }
    
   
});

const levelTwo = () => {
    level2 = true;
    lastCell.innerHTML = '';
    firstCell.innerHTML = '<i class="fas fa-apple-alt"></i>';
    firstKeyTextContent.innerText = "Stanga";
    key.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    firstKey.addEventListener('click', () => {
        if (level3) return;
        if (counter === 0) {
            return;
        }
        counter--;
        firstChoppie.style.left = `${counter * 100}px`;
    
        if (counter === 0) {
            firstReviewTextContent.innerHTML += "🙂 ";
            levelThree();
        }
       
    });
    
    document.addEventListener('keydown', e => {
        if (level3) return;
        if (e.key !== "ArrowLeft") return;
        if (counter === 0) {
            return;
        }
        counter--;
        
        firstChoppie.style.left = `${counter * 100}px`;
        if (counter === 0) {
            firstReviewTextContent.innerHTML += "🙂 ";
            levelThree();
        }
        
       
    });
};

const levelThree = () => {
    level3 = true;
    firstBoard.style.display = 'block';
    firstKeyTextContent.innerText = "Jos";
    lastCell.innerHTML = '<i class="fas fa-apple-alt"></i>';
    key.innerHTML = '<i class="fas fa-chevron-down"></i>';
    firstCell.innerHTML = '';
    
    
    
    firstKey.addEventListener('click', () => {
        if (level4) return;
        if (counter === 4) {
            return;
        }
        counter++;
        firstChoppie.style.top = `${counter * 100}px`;
    
        if (counter === 4) {
            firstReviewTextContent.innerHTML += "🙂 ";
            levelFour();
        }
       
    });
    
    document.addEventListener('keydown', e => {
        if (level4) return;
        if (e.key !== "ArrowDown") return;
        if (counter === 4) {
            return;
        }
        counter++;
        
        firstChoppie.style.top = `${counter * 100}px`;
        if (counter === 4 ) {
            firstReviewTextContent.innerHTML += "🙂 ";
            levelFour();
        }
        
        
    });
};

const levelFour = () => {
    level4 = true;
    
    lastCell.innerHTML = '';
    firstCell.innerHTML = '<i class="fas fa-apple-alt"></i>';
    key.innerHTML = '<i class="fas fa-chevron-up"></i>';
    firstKeyTextContent.innerText = "Sus";
    
    firstKey.addEventListener('click', () => {
        
        if (counter === 0) {
            return;
        }
        counter--;
        firstChoppie.style.top = `${counter * 100}px`;
    
        if (counter === 0) {
            firstReviewTextContent.innerHTML += "🙂 ";
        }
       
    });
    
    document.addEventListener('keydown', e => {
        
        if (e.key !== "ArrowUp") return;
        if (counter === 0) {
            return;
        }
        counter--;
        
        firstChoppie.style.top = `${counter * 100}px`;
        if (counter === 0) {
            firstReviewTextContent.innerHTML += "🙂 ";
            
        }
        
        
    });
};





