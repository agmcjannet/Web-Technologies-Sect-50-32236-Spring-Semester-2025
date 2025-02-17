// Back of Card Array
const backArray = Array(12).fill('imgs/blank.png');

// Front of Card Array
const frontCard = [
    'imgs/dancingBear1.png', 'imgs/dancingBear2.png',
    'imgs/dancingCat1.png', 'imgs/dancingCat2.png',
    'imgs/dancingGator1.png', 'imgs/dancingGator2.png',
    'imgs/dancingFox1.png', 'imgs/dancingFox2.png',
    'imgs/dancingGiraffe1.png', 'imgs/dancingGiraffe2.png',
    'imgs/dancingRaccoon1.png', 'imgs/dancingRaccoon2.png'
];

// Randomize
frontCard.sort(() => Math.random() - 0.5);

const container = document.querySelector('.container');

// Grid to Display Cards
for (let i = 0; i < 12; i++) {
    let imgElement = document.createElement('img');
    imgElement.src = backArray[i];
    imgElement.dataset.index = i;
    imgElement.addEventListener('click', revealCard);
    imgElement.classList.add('grid-item');
    container.appendChild(imgElement);
}

// Reveal Front of Card
function revealCard(event) {
    let index = event.target.dataset.index; 
    event.target.src = frontCard[index]; 
}
