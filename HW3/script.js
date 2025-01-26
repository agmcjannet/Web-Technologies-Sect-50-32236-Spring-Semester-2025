function updateImage(imagePath) {
    document.querySelector(".image-container img").src = imagePath;
}

// Reset the story to the starting point
function resetStory() {
    document.getElementById("story-text").innerHTML = `
        <p>Froggy, a cheerful little green frog, wakes up to a sparkling morning in the swamp. The sun is warm, the lily pads are glowing, and the soft breeze tickles the cattails. Froggy feels today is a perfect day for an adventure. But where should they hop off to first?</p>
        <button onclick="goToFlowerMeadow()">Hop to the flower meadow</button>
        <button onclick="goToPond()">Visit the shimmering pond</button>
        <button onclick="goToCave()">Explore the mossy cave</button>
    `;
    document.getElementById("choices").innerHTML = "";
    updateImage("imgs/titleScreen.png"); // Starting image
}

// Starting point
function goToFlowerMeadow() {
    document.getElementById("story-text").innerHTML = `
      <p>Froggy hops into a colorful meadow buzzing with bees and fluttering butterflies. 
      They spot a huge, glowing flower in the center.</p>
      <button onclick="climbFlower()">Climb onto the glowing flower</button>
      <button onclick="befriendButterflies()">Befriend the butterflies</button>
      <button onclick="gatherNectar()">Gather nectar from the smaller flowers</button>
    `;
    document.getElementById("choices").innerHTML = ""; // Remove previous choices
    updateImage("imgs/flowerMeadow.png");
}

function goToPond() {
    document.getElementById("story-text").innerHTML = `
      <p>At the pond, Froggy meets Snippy the turtle and Quill the porcupine. 
      They're playing a game leaping between lily pads but seem to be hiding something behind their backs.</p>
      <button onclick="askWhatTheyreHiding()">Ask Tommy and Quill what they're hiding</button>
      <button onclick="joinLilyPadGame()">Join their lily pad game</button>
      <button onclick="diveInPond()">Dive under the water to find hidden secrets</button>
    `;
    document.getElementById("choices").innerHTML = "";
    updateImage("imgs/shimmeringPond.png");
}

function goToCave() {
    document.getElementById("story-text").innerHTML = `
      <p>The cave is cool and dark, but fireflies light up the walls like tiny stars. 
      Froggy notices three pathways leading deeper into the cave.</p>
      <button onclick="followPebbles()">Follow the path with glittering pebbles</button>
      <button onclick="followFlowers()">Take the path that smells of flowers</button>
      <button onclick="followMusic()">Choose the path where soft music seems to echo</button>
    `;
    document.getElementById("choices").innerHTML = "";
    updateImage("imgs/mossyCave.png");
}

// Flower Meadow choices
function climbFlower() {
    document.getElementById("story-text").innerHTML = 
        `<p>The flower is enchanted! 
        A hidden path opens up that leads to the mossy cave.</p>
        <button onclick="goToCave()">Follow the path to the mossy cave</button>`;
    updateImage("imgs/enchantedFlower.png");
}

function befriendButterflies() {
    document.getElementById("story-text").innerHTML = 
        `<p>The butterflies flutter and tell Froggy about some critters playing a game that may be hiding something.</p>
        <button onclick="goToPond()">Search for the critters by the pond</button>`;
    updateImage("imgs/butterflies.png");

}

function gatherNectar() {
    document.getElementById("story-text").innerHTML = 
        `<p>Froggy gathers nectar and happily hums a tune. The adventure ends
        peacefully with Froggy returning to the swamp, enjoying a delicious 
        nectar treat.</p>`;
    updateImage("imgs/nectarGathering.png");
    offerRestart();
}

// Pond choices
function askWhatTheyreHiding(){
    document.getElementById("story-text").innerHTML = 
        `<p>Tommy and Quill reveal they've found a map to a hidden treasure in the mossy cave.</p>
        <button onclick="goToCave()">Head to the cave to use the map</button>`;
    updateImage("imgs/treasureMap.png");
}

function joinLilyPadGame() {
    document.getElementById("story-text").innerHTML = 
        `<p>Froggy wins the game, and Tommy and Quill reward them with a sparkling 
        pebble that lights the way to the flower meadow.</p>
        <button onclick="goToFlowerMeadow()">Follow the lights to the flower meadow</button>`;
    updateImage("imgs/lilyPadGame.png");
}

function diveInPond() {
    document.getElementById("story-text").innerHTML = 
        `<p>Froggy dives under the water and finds shiny shells, 
        ending their day happily decorating their lily pad at home.</p>`;
    updateImage("imgs/divingInPond.png");
    offerRestart();
}

// Mossy Cave choices
function followPebbles() {
    document.getElementById("story-text").innerHTML = 
        `<p>The glittering pebbles lead to a hidden pond filled with golden lily pads. 
        Froggy relaxes and makes new frog friends, ending the day with a fun lily pad party.</p>`;
    updateImage("imgs/goldenLilyPads.png");
    offerRestart();
}

function followFlowers() {
    document.getElementById("story-text").innerHTML = 
        `<p>The flower-scented path leads to the flower meadow, where Froggy sees the
        rare glowing blossom.</p>`;
    updateImage("imgs/flowerMeadow.png");
    goToFlowerMeadow();
}

function followMusic() {
    document.getElementById("story-text").innerHTML =  
        `<p>The musical path leads Froggy to a family of singing raccoons who invite 
        them to perform with them. Froggy's happy ribbit becomes the star of the show.</p>`;
    updateImage("imgs/singingRaccoons.png");
    offerRestart();
}

// Offer to restart the game
function offerRestart() {
    document.getElementById("choices").innerHTML = `
        <button onclick="resetStory()">Start Over</button>
    `;
}
