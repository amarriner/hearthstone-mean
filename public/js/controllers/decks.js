'use strict';

angular.module('hearthstone.decks', [])

.config(function() {

})

.controller('DecksCtrl', ['$scope', 'Decks',
    function($scope, Decks) {
        $scope.showDeck = Decks.getShowDeck;

        $scope.dropCard = function(e) {
            console.log(e.toElement.id);
            console.log(e.toElement.innerText);
        }
    }
]);
