function goToFlowerMeadow() {
    document.getElementById("story-text").innerHTML = `
      <p>Froggy hops into a colorful meadow buzzing with bees and fluttering butterflies. 
      They spot an huge, glowing flower in the center.</p>
      <button onclick="climbFlower()">Climb onto the glowing flower</button>
      <button onclick="befriendButterflies()">Befriend the butterflies</button>
      <button onclick="gatherNectar()">Gather nectar from the smaller flowers</button>
    `;
    document.getElementById("choices").innerHTML = ""; // Remove previous choices
  }
  
  function goToPond() {
    document.getElementById("story-text").innerHTML = `
      <p>At the pond, Froggy meets Tommy the turtle and Quill the porcupine. 
      They're playing a game leaping between lily pads but seem to be hiding something behind their backs.</p>
      <button onclick="askWhatTheyreHiding()">Ask Tommy and Quill what they're hiding</button>
      <button onclick="joinLilyPadGame()">Join their lily pad game</button>
      <button onclick="diveInPond()">Dive under the water to find hidden secrets</button>
    `;
    document.getElementById("choices").innerHTML = "";
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
  }
  
  function climbFlower() {
    document.getElementById("story-text").innerHTML = 
        `<p>The flower is enchanted! 
        A hidden path opens up that leads to the mossy cave.</p>`;
  }
  
  function befriendButterflies() {
    document.getElementById("story-text").innerHTML = 
        `<p>The butterflies flutter and warn Froggy about a squirrel who's 
        been stealing nectar. Froggy decides to find the squirrel, which leads 
        them to the shimmering pond.</p>`;
  }
  
  function gatherNectar() {
    document.getElementById("story-text").innerHTML = 
        `<p>Froggy gathers nectar and happily hums a tune. The adventure ends
        peacefully with Froggy returning to the swamp, enjoying a delicious 
        nectar treat.</p>`;
  }
  
  function askWhatTheyreHiding(){
    document.getElementById("story-text").innerHTML = 
        `<p>Tommy and Quill reveal they've found a map to a hidden treasure in the mossy cave.</p>`;
  }
  
  function joinLilyPadGame() {
    document.getElementById("story-text").innerHTML = 
        `<p>Froggy wins the game, and Tommy and Quill reward them with a sparkling 
        pebble that lights the way to the flower meadow.</p>`;
  }
  
  function diveInPond() {
    document.getElementById("story-text").innerHTML = 
        `<p>Froggy dives under the water and finds shiny shells that make a perfect necklace, 
        ending their day happily decorating their lily pad at home.</p>`;
  }
  
  function followPebbles() {
    document.getElementById("story-text").innerHTML = 
        `<p>The glittering pebbles lead to a hidden pond filled with golden lily pads. 
        Froggy relaxes and makes new frog friends, ending the day with a fun lily pad party.</p>`;
  }
  
  function followFlowers() {
    document.getElementById("story-text").innerHTML = 
        `<p>The flower-scented path leads back to the flower meadow, where Froggy discovers 
        a rare glowing blossom.</p>`;
  }
  
  function followMusic() {
    document.getElementById("story-text").innerHTML =  
        `<p>The musical path leads Froggy to a family of singing crickets who invite 
        them to perform with them. Froggy's happy ribbit becomes the star of the show.</p>`;
  }
  