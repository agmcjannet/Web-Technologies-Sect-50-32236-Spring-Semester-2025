// Set Froggy's starting location
let froggyLocation = "swamp";

// Function to change the story text, image, and background color
function updateStory(newText, imagePath) {
    document.getElementById("story-text").innerHTML = newText;
    document.querySelector(".image-container img").src = imagePath;

    let main = document.querySelector("main");

    if (imagePath === "imgs/flowerMeadow.png") {
        main.style.backgroundColor = "#aed8f2";
    } else if (imagePath === "imgs/titleScreen.png") {
        main.style.backgroundColor = "#efe8d4"; 
    } else if (imagePath === "imgs/shimmeringPond.png") {
        main.style.backgroundColor = "#a5d6a7"; 
    } else if (imagePath === "imgs/mossyCave.png") {
        main.style.backgroundColor = "#8e8e8e"; 
    } else if (imagePath === "imgs/enchantedFlower.png") {
        main.style.backgroundColor = "#f2dea2";
    } else if (imagePath === "imgs/butterflies.png") {
        main.style.backgroundColor = "#ffcc80";
    } else if (imagePath === "imgs/nectarGathering.png") {
        main.style.backgroundColor = "#d1c4e9";
    } else if (imagePath === "imgs/divingInPond.png") {
        main.style.backgroundColor = "#ffc5d3";
    } else if (imagePath === "imgs/goldenLilyPads.png") {
        main.style.backgroundColor = "#ffe68c";
    } else if (imagePath === "imgs/lilyPadGame.png") {
        main.style.backgroundColor = "#b3edfc";
    } else if (imagePath === "imgs/singingRaccoons.png") {
        main.style.backgroundColor = "#fac3b1";
    } else if (imagePath === "imgs/treasureMap.png") {
        main.style.backgroundColor = "#e8c3e3";
    } else {
        main.style.backgroundColor = "efe8d4"; 
    }
}

// Function to process the user's input
function makeChoiceFromInput() {
    let userInput = document.getElementById("user-choice").value.toLowerCase().trim();
    document.getElementById("user-choice").value = ""; 

    if (userInput === "") {
        updateStory("<p>Please enter a choice available to Froggy in the story.</p>", 
            "imgs/confusedFroggy.png");
        return;
    }

    let result = makeChoice(userInput); 
    
    if (result === "invalid choice") {
        console.log("Player made an invalid choice.");
    } else {
        console.log("Player is now at: " + result);
    }

    makeChoice(userInput);
}

// Function to update story based on user input
function makeChoice(choice) {

        // For Loop for possible choices
        let possibleChoices = ["meadow", "pond", "cave", "climb", "glowing", "flower", "befriend", 
            "butterflies", "gather", "nectar", "smaller", "ask", "hiding", "join", "lily", "lilypad","pad",
            "game",  "dive", "under", "water", "hidden", "secrets", "glittering", "pebbles", 
            "smells", "music", "soft", "echo"];
        let choiceFound = false;
    
        for (let i = 0; i < possibleChoices.length; i++) {
            if (choice.includes(possibleChoices[i])) {
                choiceFound = true;
                break;
            }
        }
    
        if (!choiceFound) {
            updateStory(
                `<p>Froggy tilts their head. That doesn't seem like an option that was presented. 
                Try again!</p>`,
                "imgs/confusedFroggy.png"
            );
            return "invalid choice";
        }
        
    if (choice.includes("meadow")) {
        updateStory(
            `<p>Froggy hops into a colorful meadow buzzing with bees and fluttering butterflies.
            They spot a huge, glowing flower in the center. </p> 
            <p>Should Froggy climb onto the glowing flower, befriend the butterflies, or gather nectar
            from the smaller flowers?</p>`,
            "imgs/flowerMeadow.png"
        );
        return "flower meadow";

    } else if (choice.includes("pond")) {
        updateStory(
            `<p>At the pond, Froggy meets Tommy the turtle and Quill the porcupine. 
            They're playing a game leaping between lily pads but seem to be hiding 
            something behind their backs.</p>
            <p>Should Froggy ask Tommy and Quill what they're hiding, join their lily pad game, or dive
            under the water to find hidden secrets?</p>`,
            "imgs/shimmeringPond.png" 
        );
        return "pond";

    } else if (choice.includes("cave")) {
        updateStory(
            `<p>The cave is cool and dark, but fireflies light up the walls like tiny stars. 
            Froggy notices three pathways leading deeper into the cave.</p>
            <p>Which path should Froggy go down? The path with glittering pebbles, that smells of flowers, 
            or where soft music seems to echo?</p>`,
            "imgs/mossyCave.png"
        );
        return "cave";

    } else if (choice.includes("climb") || choice.includes("glowing") || choice.includes("flower")) {
        updateStory(
            `<p>The flower is enchanted! A hidden path opens up that leads to the mossy cave.</p>
            <p>Froggy decides he should follow the path, but he waits for a sign that he's making
            the correct choice, please tell him to go to the mossy cave. </p>`,
            "imgs/enchantedFlower.png"
        );
        return "flower meadow";

    } else if (choice.includes("befriend") || choice.includes("butterflies")) {
        updateStory(
            `<p>The butterflies flutter and tell Froggy about some critters playing a game and
            that they may be hiding something.</p>
            <p>Froggy decides he should search for the critters, but he waits for a sign that he's 
            making the correct choice, please tell him to go to the pond. </p>`,
            "imgs/butterflies.png"
        );
        return "flower meadow";

    } else if (choice.includes("gather") || choice.includes("nectar") || choice.includes("smaller")) {
        updateStory(
            `<p>Froggy gathers nectar and happily hums a tune. The adventure ends peacefully with 
            Froggy returning to the swamp, enjoying a delicious nectar treat.</p>
            <p>Would you like Froggy to continue their adventure and restart the story?</p>`,
            "imgs/nectarGathering.png"
        );
        askContinueAdventure();  // Trigger the do-while loop for continuing the adventure
        return "flower meadow";

//Pond Choices
    
    } else if (choice.includes("ask") || choice.includes("hiding")) {
        updateStory(
            `<p>Tommy and Quill reveal they've found a map to a hidden treasure in the mossy cave.</p>
            <p>Froggy decides he should use the map, but he waits for a sign that he's 
            making the correct choice, please tell him to head to the cave.</p>`,
            "imgs/treasureMap.png"
        );   
        return "pond";

    } else if (choice.includes("join") || choice.includes("lily") || choice.includes("pad") || choice.includes("lilypad") || choice.includes("game")) {
        updateStory(
            `<p>Froggy wins the game, and Tommy and Quill reward them with a sparkling 
            pebble that lights the way to the flower meadow.</p>
            <p>Froggy decides he should follow the lights, but he waits for a sign that he's 
            making the correct choice, please tell him to go to the flower meadow.</p>`,
            "imgs/lilyPadGame.png"
        );  
        return "pond";

    } else if (choice.includes("dive") || choice.includes("under") || choice.includes("water") || choice.includes("hidden") || choice.includes("secrets")) {
        updateStory(
            `<p>Froggy dives under the water and finds shiny shells, 
            ending their day happily decorating their lily pad at home.</p>
            <p>Would you like Froggy to continue their adventure and restart the story?</p>`,
            "imgs/divingInPond.png"
        );
        askContinueAdventure();  // Trigger the do-while loop for continuing the adventure
        return "pond";

//Mossy Cave choices

    } else if (choice.includes("glittering") || choice.includes("pebbles")) {
        updateStory(
            `<p>The glittering pebbles lead to a hidden pond filled with golden lily pads. 
            Froggy relaxes and makes new frog friends, ending the day with a fun lily pad party.</p>
            <p>Would you like Froggy to continue their adventure and restart the story?</p>`,
            "imgs/goldenLilyPads.png"
        );
        askContinueAdventure();  // Trigger the do-while loop for continuing the adventure 
        return "cave";

    } else if (choice.includes("smells")) {
        updateStory(
            `<p>The flower-scented path leads to the flower meadow, where Froggy sees the
            rare glowing blossom.</p>
            <p>Should Froggy climb onto the glowing flower, befriend the butterflies, or gather nectar
            from the smaller flowers?</p>`,
            "imgs/flowerMeadow.png"
        );  
        return "flower meadow";

    } else if (choice.includes("music") || choice.includes("soft") || choice.includes("echo")) {
        updateStory(
            `<p>The musical path leads Froggy to a family of singing raccoons who invite 
            them to perform with them. Froggy's happy ribbit becomes the star of the show.</p>
            <p>Would you like Froggy to continue their adventure and restart the story?</p>`,
            "imgs/singingRaccoons.png"
        );
        askContinueAdventure();  // Trigger the do-while loop for continuing the adventure 
        return "raccoon family dwelling";

    } else {
        updateStory(
            `<p>Froggy tilts their head. That doesn't seem like an option that was presented. 
            Try again!</p>`,
            "imgs/confusedFroggy.png"
        );
        return "invalid choice";
    }
}

let gameRunning = true;

// Function to handle the continuation or end of the game
function continueAdventure() {
    
    updateStory("<p>Do you want to continue your adventure? (Type 'yes' or 'no' to decide)</p>", 
                "imgs/titleScreen.png");

    let userChoice = document.getElementById("user-choice").value.toLowerCase().trim();
    
    document.getElementById("user-choice").value = ""; 
    
    if (userChoice === "yes") {
        updateStory(
            `<p>Great! Froggy is ready to continue their adventure!</p> 
            <p>Should Froggy hop to the flower meadow, visit the shimmering pond, or explore the mossy cave?</p>`,
            "imgs/titleScreen.png"
        );
        gameRunning = true;
    } else if (userChoice === "no") {
        updateStory(
            "<p>Thanks for playing Froggy's Big Day! Goodbye!</p>",
            "imgs/titleScreen.png"
        );
        gameRunning = false; 
    } else {
        updateStory(
            "<p>Please enter 'yes' or 'no' to continue or end the adventure.</p>",
            "imgs/confusedFroggy.png"
        );
        continueAdventure();
    }
}

document.getElementById("user-choice").addEventListener("input", function() {
    let userChoice = document.getElementById("user-choice").value.toLowerCase().trim();
    if (userChoice === "yes" || userChoice === "no") {
        continueAdventure();
    }
});
