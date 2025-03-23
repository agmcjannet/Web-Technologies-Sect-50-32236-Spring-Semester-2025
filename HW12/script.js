// Setup canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let score = 0;

// Create player and objects
const player = new Shape(100, 100, 30, 30, '#d53e4f');
let objects = [];
let collectibles = [];

const objectsData = [
    {"x": 0, "y": 200, "width": 250, "height": 30, "color": "#81C784"},
    {"x": 400, "y": 300, "width": 400, "height": 30, "color": "#388E3C"},
    {"x": 0, "y": 400, "width": 600, "height": 30, "color": "#2C6B2F"},
    {"x": 250, "y": 100, "width": 550, "height": 30, "color": "#6B8E23"},
    {"x": 100, "y": 500, "width": 700, "height": 30, "color": "#1B5E20"}
];

const collectiblesData = [
    {"x": 300, "y": 300, "width": 20, "height": 20, "color": "#B39DDB"},
    {"x": 500, "y": 200, "width": 20, "height": 20, "color": "#7B1FA2"},
    {"x": 300, "y": 550, "width": 20, "height": 20, "color": "#4A148C"}
];

// Populate arrays with objects and collectibles from the data
objects = objectsData.map(data => new Shape(data.x, data.y, data.width, data.height, data.color));
collectibles = collectiblesData.map(data => new Shape(data.x, data.y, data.width, data.height, data.color));

// Collision detection function
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

// Check if the player can move in the desired direction without colliding with objects
function canMoveInDirection(dx, dy) {
    const futurePlayer = new Shape(player.x + dx, player.y + dy, player.width, player.height, player.color);

    for (let i = 0; i < objects.length; i++) {
        // Check for collision in the direction of movement
        if (hasCollided(futurePlayer, objects[i])) {
            // Block movement if there’s a collision in the direction of the move
            return false;
        }
    }

    return true; // No collision, can move
}

// Update the game state
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw(ctx);
    objects.forEach(obj => obj.draw(ctx));
    collectibles.forEach((collectible, index) => {
        collectible.draw(ctx);
        if (hasCollided(player, collectible)) {
            collectibles.splice(index, 1);
            score++;
            $('#score').text(score); // Update the score on the screen
        }
    });

    requestAnimationFrame(update);
}

// Event listener for keydown (arrow keys for player movement)
$(document).keydown(function(e) {
    switch (e.which) {
        case 37: // Left arrow
            if (canMoveInDirection(-5, 0)) {
                player.x -= 5; // Move left
            }
            break;
        case 38: // Up arrow
            if (canMoveInDirection(0, -5)) {
                player.y -= 5; // Move up
            }
            break;
        case 39: // Right arrow
            if (canMoveInDirection(5, 0)) {
                player.x += 5; // Move right
            }
            break;
        case 40: // Down arrow
            if (canMoveInDirection(0, 5)) {
                player.y += 5; // Move down
            }
            break;
    }
});

// Start the game loop
update();
