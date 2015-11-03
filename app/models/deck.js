var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var DeckSchema      = new Schema({
    _id         : String,
    name        : String,
    cards       : []
});

module.exports      = mongoose.model('Deck', DeckSchema);
