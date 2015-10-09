var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var CardSchema      = new Schema({
    _id         : String,
    name        : String,
    cardSet     : Number,
    collectible : Boolean,
    rarity      : Number,
    cardType    : Number,
    cost        : Number,
    flavorText  : String,
    health      : Number,
    atk         : Number,
    faction     : Number,
    race        : Number,
    gold        : String
});

module.exports      = mongoose.model('Card', CardSchema);
