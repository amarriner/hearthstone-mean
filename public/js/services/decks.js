'use strict';

hearthstoneServices.factory('Decks', ['$http',
    function($http) {

        var showDeck = false;

        return {
            getShowDeck: function() {
                return showDeck;
            },

            setShowDeck: function(value) {
                showDeck = value;
            },

            toggleShowDeck: function() {
                showDeck = !showDeck;
            }
        }

    }
]);
