const board = document.querySelector('.board_total');
const rows = board.querySelectorAll('.row');
const allCells = board.querySelectorAll('.cell');
const choppie = board.querySelector('img');
const reviewContainer = document.querySelector('.review');
const orangeImg = board.querySelector('img.orange');

const allKeys = board.parentElement.querySelectorAll('.key_container');

const directions = {
    Dreapta: {
        x: 0,
        y: 1
    },
    Stanga: {
        x: 0,
        y: -1
    },
    Sus: {
        x: -1,
        y: 0
    },
    Jos: {
        x: 1,
        y: 0
    }
}

const arrowDirections = {
    right: {
        x: 0,
        y: 1
    },
    left: {
        x: 0,
        y: -1
    },
    up: {
        x: -1,
        y: 0
    },
    down: {
        x: 1,
        y: 0
    }
}


let finish = false;

allKeys.forEach(keyContent => {
    keyContent.addEventListener('click', () => {
        if (finish) return;
        const currentCoords = getCoords();
        const currDirection = keyContent.innerText;
        let newCoords = [currentCoords[0] + directions[currDirection].x, currentCoords[1] + directions[currDirection].y];
        
        if (newCoords[0] < 0 || newCoords[1] < 0 || newCoords[0] > 4 || newCoords[1] > 4) return;

        console.log(newCoords);

        choppie.style.top = `${newCoords[0] * 100}px`;
        choppie.style.left = `${newCoords[1] * 100}px`;
        const newHighlightedCell = highlightCell(newCoords[0], newCoords[1]);
        newHighlightedCell.classList.add('highlight');

        if (newCoords[0] === 4 && newCoords[1] === 4) {
            finish = true;
            orangeImg.style.zIndex = '-1';
            reviewContainer.innerText += 'Rezultat: 🙂';
        }
    });

    // document.addEventListener('keydown', e => {
    //     if (!e.key.includes('Arrow')) return;
    //     console.log(e.key);
    //     const currentCoords = getCoords();
    //     const currDirection = e.key.slice(5, e.key.length).toLowerCase();
    //     console.log(currDirection);
    //     let newCoords = [currentCoords[0] + arrowDirections[currDirection].x, currentCoords[1] + arrowDirections[currDirection].y];
        
    //     if (newCoords[0] < 0 || newCoords[1] < 0 || newCoords[0] > 4 || newCoords[1] > 4) return;

    //     console.log(newCoords);

    //     choppie.style.top = `${newCoords[0] * 100}px`;
    //     choppie.style.left = `${newCoords[1] * 100}px`;
    //     const newHighlightedCell = highlightCell(newCoords[0], newCoords[1]);
    //     newHighlightedCell.classList.add('highlight');
    // });
});



const getCoords = () => {

    const highlightCell = [...allCells].find(cell => {
        return cell.classList.contains('highlight');
    });

    let coords = [];

    rows.forEach((row, rowIdx) => {
        const cellsInRow = row.querySelectorAll('.cell');
        cellsInRow.forEach((cell, cellIdx) => {
            if (cell === highlightCell) {
                coords.push(rowIdx);
                coords.push(cellIdx);
            }
        });
    });

    return coords;
}; 

const highlightCell = (x, y) => {
    const oldHighlightedCell = board.querySelector('.cell.highlight');
 
    oldHighlightedCell.classList.remove('highlight');

    const rowHighlight = rows[x];
    const cellHighlight = rowHighlight.querySelectorAll('.cell')[y];

    return cellHighlight;
}