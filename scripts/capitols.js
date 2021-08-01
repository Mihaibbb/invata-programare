const capitolButton = document.querySelector('nav i');
const capitolsList = document.querySelector('.capitols');

capitolButton.addEventListener('click', () => {
    capitolsList.classList.toggle('show');
    
    if (capitolsList.classList.contains('show')) {
        
        capitolButton.classList.remove('fa-bars');
        capitolButton.classList.add('fa-times');
    } else {
        capitolButton.classList.add('fa-bars');
        capitolButton.classList.remove('fa-times');
    }
});