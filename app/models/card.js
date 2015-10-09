var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var CardSchema      = new Schema({
    _id         : String,
    name        : String,
    cardSet     : String,
    cardClass   : String,
    collectible : Boolean,
    rarity      : String,
    cardType    : String,
    cost        : Number,
    flavorText  : String,
    health      : Number,
    atk         : Number,
    faction     : String,
    race        : String,
    gold        : String
});

module.exports      = mongoose.model('Card', CardSchema);
