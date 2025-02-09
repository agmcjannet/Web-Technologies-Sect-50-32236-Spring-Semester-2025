// Array for blank card
const blankArray = Array(12).fill('blank.jpg');

// Array for cards
const actualImages = ['HW5/imgs/dancingBear1.png', 'HW5/imgs/dancingBear2.png', 'HW5/imgs/dancingCat1.png', 'HW5/imgs/dancingCat2.png', 
                        'HW5/imgs/dancingFox1.png', 'HW5/imgs/dancingFox2.png', 'HW5/imgs/dancingGator1.png', 'HW5/imgs/dancingGator2.png', 
                        'HW5/imgs/dancingGiraffe1.png', 'HW5/imgs/dancingGiraffe2.png', 'HW5/imgs/dancingRaccoon1', 'HW5/imgs/dancingRaccoon2.png'];

// Randomize the actual images array
actualImages.sort(() => Math.random() - 0.5);

// Select the container div
const container = document.querySelector('.container');

// Create and display the grid of blank images
for (let i = 0; i < 12; i++) {
    let imgElement = document.createElement('img');
    imgElement.src = blankArray[i];
    imgElement.dataset.index = i; 
    imgElement.addEventListener('click', revealImage); 
    container.appendChild(imgElement);
}

// Function to reveal the actual image
function revealImage(event) {
    let index = event.target.dataset.index;
    event.target.src = actualImages[index]; 
}
