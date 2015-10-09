var fs = require('fs'), json;

// http://stackoverflow.com/questions/12703098/how-to-get-a-json-file-in-express-js-and-display-in-view
function readJsonFileSync(filepath, encoding) {
    if (typeof (encoding) == 'undefined') {
        encoding = 'utf-8';
    }

    var file = fs.readFileSync(filepath, encoding);

    return JSON.parse(file);
}

// Read the JSON file from disk
var allSets = readJsonFileSync(__dirname + '/AllSets.json');

// Strip out the sets from the top-level keys
var sets = [];

// Excluding ones we don't want to include as "sets"
var excludeSets = ['Credits', 'Debug', 'Hero Skins', 'Missions', 'System', 'Tavern Brawl'];
for (var key in allSets) {
    if (excludeSets.indexOf(key) == -1) {
        sets.push(key);
    }
}

// All the cards in the "good" sets
var cards = {};
for (var i = 0; i < sets.length; i++) {
    for (var j = 0; j < allSets[sets[i]].length; j++) {
        cards[allSets[sets[i]][j].id] = allSets[sets[i]][j];
    }
}

module.exports = {
    cards: cards,
    sets: sets,
    cardsBySet: allSets
}
