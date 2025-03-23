// Setup canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let score = 0;

// Create player
const player = new Shape(100, 100, 30, 30, '#d53e4f');
let objects = [];
let collectibles = [];

// Load objects and collectibles from JSON files
function loadGameData() {
    // Use $.getJSON() to load the objects and collectibles data
    $.getJSON('data/objects.json', function(objectsData) {
        $.getJSON('data/collectibles.json', function(collectiblesData) {
            // Populate arrays with objects and collectibles from the data
            objects = objectsData.map(data => new Shape(data.x, data.y, data.width, data.height, data.color));
            collectibles = collectiblesData.map(data => new Shape(data.x, data.y, data.width, data.height, data.color));

            // Start the game loop after loading data
            update();
        }).fail(function() {
            console.error('Error loading collectibles data.');
        });
    }).fail(function() {
        console.error('Error loading objects data.');
    });
}

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
        if (hasCollided(futurePlayer, objects[i])) {
            return false;
        }
    }

    return true;
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
                player.x -= 5;
            }
            break;
        case 38: // Up arrow
            if (canMoveInDirection(0, -5)) {
                player.y -= 5;
            }
            break;
        case 39: // Right arrow
            if (canMoveInDirection(5, 0)) {
                player.x += 5;
            }
            break;
        case 40: // Down arrow
            if (canMoveInDirection(0, 5)) {
                player.y += 5;
            }
            break;
    }
});

// Start the game by loading data
loadGameData();
