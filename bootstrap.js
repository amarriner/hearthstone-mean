// Pull Hearthstone card data from the HearthSim hs-data repository
// and put it into Mongo

var _ = require('underscore');
var fs = require('fs');
var mongoose = require('mongoose');
var request = require('request');
var xml2js = require('xml2js');

var db = require('./config/db');
var Card = require('./app/models/card.js');

// Uses underscore to find the correct tag in an entity given the 'name' attribute
function getTagValue(tag, name, key) {
    var retVal;

    var result = _.where(tag, {
        'name': name
    })[0];
    if (result && result[key]) {
        retVal = result[key];
    }

    return retVal;
}

function updateMongo(j) {
    mongoose.connect(db.url);

    console.log('Truncating cards collection');
    Card.remove({}, function(err) {
        if (err) {
            console.log('Error removing collection: ' + err);
        }

        // Loop through each "Entity" which should map to an individual card
        console.log('Inserting cards');
        for (var i = 0; i < j['CardDefs']['Entity'].length; i++) {
            var entity = j['CardDefs']['Entity'][i];
            var card = new Card();

            card._id = entity['CardID'];
            card.name = getTagValue(entity['Tag'], 'CardName', 'enUS');
            card.cardSet = getTagValue(entity['Tag'], 'CardSet', 'value');
            card.collectible = getTagValue(entity['Tag'], 'Collectible', 'value');
            card.rarity = getTagValue(entity['Tag'], 'Rarity', 'value');
            card.cardType = getTagValue(entity['Tag'], 'CardType', 'value');
            card.cost = getTagValue(entity['Tag'], 'Cost', 'value');
            card.flavorText = getTagValue(entity['Tag'], 'FlavorText', 'enUS');
            card.health = getTagValue(entity['Tag'], 'Health', 'value');
            card.atk = getTagValue(entity['Tag'], 'Atk', 'value');
            card.faction = getTagValue(entity['Tag'], 'Faction', 'value');
            card.race = getTagValue(entity['Tag'], 'Race', 'value');
            card.gold = getTagValue(entity['Tag'], 'HowToGetThisGoldCard', 'enUS');

            card.save(function(err) {
                if (err) {
                    console.log('Error saving ' + card.name + ': ' + err);
                }
            });
        }

        console.log('Done!');
    });
}

function processHearthstoneXML(xml) {

    console.log('Saving xml file to disk');
    var f = fs.openSync('./data/CardDefs.xml', 'w');
    fs.writeSync(f, xml);
    fs.closeSync(f);

    console.log('Converting xml to json');
    xml2js.parseString(xml, {
        explicitArray: false,
        mergeAttrs: true
    }, function(err, result) {
        console.log('Saving json to disk');
        f = fs.openSync('./data/CardDefs.json', 'w');
        fs.writeSync(f, JSON.stringify(result, null, '\t'));
        fs.closeSync(f);

        updateMongo(result);
    });
}

console.log('Downloading CardDefs.xml from https://github.com/HearthSim/hs-data');
request('https://raw.githubusercontent.com/HearthSim/hs-data/master/CardDefs.xml',
    function(error, response, body) {
        if (!error && response.statusCode == 200) {
            processHearthstoneXML(body);
        }
    }
);

//var j = JSON.parse(fs.readFileSync('./data/CardDefs.json'));
//updateMongo(j);
