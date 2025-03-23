const objectsDataFallback = [
    {"x": 0, "y": 200, "width": 250, "height": 30, "color": "#81C784"}, 
    {"x": 400, "y": 300, "width": 400, "height": 30, "color": "#388E3C"}, 
    {"x": 0, "y": 400, "width": 600, "height": 30, "color": "#2C6B2F"}, 
    {"x": 250, "y": 100, "width": 550, "height": 30, "color": "#6B8E23"}, 
    {"x": 100, "y": 500, "width": 700, "height": 30, "color": "#1B5E20"}
];

const collectiblesDataFallback = [
    {"x": 300, "y": 300, "width": 20, "height": 20, "color": "#B39DDB"}, 
    {"x": 500, "y": 200, "width": 20, "height": 20, "color": "#7B1FA2"}, 
    {"x": 300, "y": 550, "width": 20, "height": 20, "color": "#4A148C"}
];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let score = 0;

const player = new Shape(100, 100, 30, 30, '#d53e4f');
let objects = [];
let collectibles = [];

function loadGameData() {
    $.getJSON('data/objects.json', function(objectsData) {
        objects = objectsData.map(data => new Shape(data.x, data.y, data.width, data.height, data.color));
    }).fail(function() {
        console.error('Error loading objects data. Using fallback data.');
        objects = objectsDataFallback.map(data => new Shape(data.x, data.y, data.width, data.height, data.color));
    });

    $.getJSON('data/collectibles.json', function(collectiblesData) {
        collectibles = collectiblesData.map(data => new Shape(data.x, data.y, data.width, data.height, data.color));
        update();
    }).fail(function() {
        console.error('Error loading collectibles data. Using fallback data.');
        collectibles = collectiblesDataFallback.map(data => new Shape(data.x, data.y, data.width, data.height, data.color));
        update();
    });
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

function canMoveInDirection(dx, dy) {
    const futurePlayer = new Shape(player.x + dx, player.y + dy, player.width, player.height, player.color);

    for (let i = 0; i < objects.length; i++) {
        if (hasCollided(futurePlayer, objects[i])) {
            return false;
        }
    }

    return true;
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw(ctx);
    objects.forEach(obj => obj.draw(ctx));
    collectibles.forEach((collectible, index) => {
        collectible.draw(ctx);
        if (hasCollided(player, collectible)) {
            collectibles.splice(index, 1);
            score++;
            $('#score').text(score);
        }
    });

    requestAnimationFrame(update);
}

$(document).keydown(function(e) {
    switch (e.which) {
        case 37:
            if (canMoveInDirection(-5, 0)) {
                player.x -= 5;
            }
            break;
        case 38:
            if (canMoveInDirection(0, -5)) {
                player.y -= 5;
            }
            break;
        case 39:
            if (canMoveInDirection(5, 0)) {
                player.x += 5;
            }
            break;
        case 40:
            if (canMoveInDirection(0, 5)) {
                player.y += 5;
            }
            break;
    }
});

loadGameData();
