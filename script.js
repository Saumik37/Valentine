const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const buttons = document.querySelector('.buttons');

function moveNoButton() {
    const container = buttons.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    const maxX = container.width - btnWidth - 20;
    const maxY = container.height - btnHeight - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseenter', moveNoButton);

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    page1.classList.remove('active');
    page2.classList.add('active');
});

moveNoButton();