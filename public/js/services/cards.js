'use strict';

hearthstoneServices.factory('Cards', ['$resource',
  function($resource) {

    var cards = "";

    if (cards == "") {
      cards = $resource('data/AllSets.json').get();
    }

    return {
      getCards: function() {
        return cards;
      }
    }
  }
]);
