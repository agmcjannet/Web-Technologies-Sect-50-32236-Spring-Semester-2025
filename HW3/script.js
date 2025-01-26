// Initialize Froggy's starting location
let froggyLocation = "swamp"; // Froggy's starting location

// Update the image in the DOM
function updateImage(imagePath) {
    document.querySelector(".image-container img").src = imagePath;
}

// Reset the story to the starting point
function resetStory() {
    froggyLocation = "swamp"; // Reset Froggy's location
    document.getElementById("story-text").innerHTML = `
        <p>Froggy, a cheerful little green frog, wakes up to a sparkling morning in the swamp. The sun is warm, the lily pads are glowing, and the soft breeze tickles the cattails. Froggy feels today is a perfect day for an adventure. But where should they hop off to first?</p>
        <button onclick="makeChoice('flowerMeadow')">Hop to the flower meadow</button>
        <button onclick="makeChoice('pond')">Visit the shimmering pond</button>
        <button onclick="makeChoice('cave')">Explore the mossy cave</button>
    `;
    document.getElementById("choices").innerHTML = "";
    updateImage("imgs/titleScreen.png"); // Starting image
}

// Main function to handle choices
function makeChoice(location) {
    froggyLocation = location; // Update Froggy's location

    // Use an if statement to determine what happens next
    if (froggyLocation === "flowerMeadow") {
        document.getElementById("story-text").innerHTML = `
            <p>Froggy hops into a colorful meadow buzzing with bees and fluttering butterflies. 
            They spot a huge, glowing flower in the center.</p>
            <button onclick="makeChoice('climbFlower')">Climb onto the glowing flower</button>
            <button onclick="makeChoice('befriendButterflies')">Befriend the butterflies</button>
            <button onclick="makeChoice('gatherNectar')">Gather nectar from the smaller flowers</button>
        `;
        updateImage("imgs/flowerMeadow.png");

    } else if (froggyLocation === "pond") {
        document.getElementById("story-text").innerHTML = `
            <p>At the pond, Froggy meets Snippy the turtle and Quill the porcupine. 
            They're playing a game leaping between lily pads but seem to be hiding something behind their backs.</p>
            <button onclick="makeChoice('askWhatTheyreHiding')">Ask Tommy and Quill what they're hiding</button>
            <button onclick="makeChoice('joinLilyPadGame')">Join their lily pad game</button>
            <button onclick="makeChoice('diveInPond')">Dive under the water to find hidden secrets</button>
        `;
        updateImage("imgs/shimmeringPond.png");

    } else if (froggyLocation === "cave") {
        document.getElementById("story-text").innerHTML = `
            <p>The cave is cool and dark, but fireflies light up the walls like tiny stars. 
            Froggy notices three pathways leading deeper into the cave.</p>
            <button onclick="makeChoice('followPebbles')">Follow the path with glittering pebbles</button>
            <button onclick="makeChoice('followFlowers')">Take the path that smells of flowers</button>
            <button onclick="makeChoice('followMusic')">Choose the path where soft music seems to echo</button>
        `;
        updateImage("imgs/mossyCave.png");

    } else if (froggyLocation === "climbFlower") {
        document.getElementById("story-text").innerHTML = `
            <p>The flower is enchanted! A hidden path opens up that leads to the mossy cave.</p>
            <button onclick="makeChoice('cave')">Follow the path to the mossy cave</button>
        `;
        updateImage("imgs/enchantedFlower.png");

    } else if (froggyLocation === "befriendButterflies") {
        document.getElementById("story-text").innerHTML = `
            <p>The butterflies flutter and tell Froggy about some critters playing a game that may be hiding something.</p>
            <button onclick="makeChoice('pond')">Search for the critters by the pond</button>
        `;
        updateImage("imgs/butterflies.png");

    } else if (froggyLocation === "gatherNectar") {
        document.getElementById("story-text").innerHTML = `
            <p>Froggy gathers nectar and happily hums a tune. The adventure ends peacefully with Froggy returning to the swamp, enjoying a delicious nectar treat.</p>`;
        updateImage("imgs/nectarGathering.png");
        offerRestart();
    }

    // Pond choices
    else if (froggyLocation === "askWhatTheyreHiding") {
        document.getElementById("story-text").innerHTML = `
            <p>Tommy and Quill reveal they've found a map to a hidden treasure in the mossy cave.</p>
            <button onclick="makeChoice('cave')">Head to the cave to use the map</button>`;
        updateImage("imgs/treasureMap.png");

    } else if (froggyLocation === "joinLilyPadGame") {
        document.getElementById("story-text").innerHTML = `
            <p>Froggy wins the game, and Tommy and Quill reward them with a sparkling 
            pebble that lights the way to the flower meadow.</p>
            <button onclick="makeChoice('flowerMeadow')">Follow the lights to the flower meadow</button>`;
        updateImage("imgs/lilyPadGame.png");

    } else if (froggyLocation === "diveInPond") {
        document.getElementById("story-text").innerHTML = `
            <p>Froggy dives under the water and finds shiny shells, 
            ending their day happily decorating their lily pad at home.</p>`;
        updateImage("imgs/divingInPond.png");
        offerRestart();
    }

    // Mossy Cave choices
    else if (froggyLocation === "followPebbles") {
        document.getElementById("story-text").innerHTML = `
            <p>The glittering pebbles lead to a hidden pond filled with golden lily pads. 
            Froggy relaxes and makes new frog friends, ending the day with a fun lily pad party.</p>`;
        updateImage("imgs/goldenLilyPads.png");
        offerRestart();

    } else if (froggyLocation === "followFlowers") {
        document.getElementById("story-text").innerHTML = `
            <p>The flower-scented path leads to the flower meadow, where Froggy sees the
            rare glowing blossom.</p>`;
        updateImage("imgs/flowerMeadow.png");
        makeChoice("flowerMeadow"); // Go back to flower meadow choices

    } else if (froggyLocation === "followMusic") {
        document.getElementById("story-text").innerHTML = `
            <p>The musical path leads Froggy to a family of singing raccoons who invite 
            them to perform with them. Froggy's happy ribbit becomes the star of the show.</p>`;
        updateImage("imgs/singingRaccoons.png");
        offerRestart();
    }
}

// Offer to restart the game
function offerRestart() {
    document.getElementById("choices").innerHTML = `
        <button onclick="resetStory()">Start Over</button>
    `;
}


document.addEventListener("DOMContentLoaded", function() {
    resetStory(); 
});
