// Back of Card Array
const backArray = Array(12).fill('imgs/blank.png');

// Front of Card Array
const frontCard = [
  'imgs/dancingBear1.png', 'imgs/dancingBear1.png',
  'imgs/dancingCat1.png', 'imgs/dancingCat1.png',
  'imgs/dancingGator1.png', 'imgs/dancingGator1.png',
  'imgs/dancingFox1.png', 'imgs/dancingFox1.png',
  'imgs/dancingGiraffe1.png', 'imgs/dancingGiraffe1.png',
  'imgs/dancingRaccoon1.png', 'imgs/dancingRaccoon1.png'
];

// Randomize the front card array
frontCard.sort(() => Math.random() - 0.5);

// Form 
document.getElementById('userForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = document.getElementById('age').value;


  const userData = {
    firstName,
    lastName,
    age,
    attempts: 0 
  };


  localStorage.setItem('userData', JSON.stringify(userData));


  window.location.href = 'HW6mainpage.html';
});


let flippedCards = [];
let matchedCards = [];

window.addEventListener('load', function() {
  const container = document.querySelector('.container');


  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData) {
    document.getElementById('attempts').textContent = userData.attempts;


    if (window.location.pathname.includes('HW6end.html')) {
      document.getElementById('firstName').textContent = userData.firstName;
      document.getElementById('lastName').textContent = userData.lastName;
      document.getElementById('age').textContent = userData.age;
    }
  }


  for (let i = 0; i < 12; i++) {
    let imgElement = document.createElement('img');
    imgElement.src = backArray[i];
    imgElement.dataset.index = i;
    imgElement.classList.add('grid-item');
    imgElement.addEventListener('click', revealCard);
    container.appendChild(imgElement);
  }
});


function revealCard(event) {
  let card = event.target;
  let index = card.dataset.index;


  if (flippedCards.includes(card) || matchedCards.includes(card)) {
    return;
  }

  card.src = frontCard[index];
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}


function checkMatch() {
  const [card1, card2] = flippedCards;
  const index1 = card1.dataset.index;
  const index2 = card2.dataset.index;


  if (frontCard[index1] === frontCard[index2]) {
    matchedCards.push(card1, card2); 
    flippedCards = [];
  } else {

    setTimeout(() => {
      card1.src = backArray[index1];
      card2.src = backArray[index2];
      flippedCards = [];


      const userData = JSON.parse(localStorage.getItem('userData'));
      userData.attempts++;
      localStorage.setItem('userData', JSON.stringify(userData));
      document.getElementById('attempts').textContent = userData.attempts;
    }, 1000);
  }


  if (matchedCards.length === frontCard.length) {
    endGame();
  }
}


function endGame() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  localStorage.setItem('playerData', JSON.stringify(userData));

  window.location.href = 'HW6end.html';
}
