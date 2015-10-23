'use strict';

angular.module('hearthstone.navbar', [])

.config(function() {

})

.controller('NavbarCtrl', ['$scope', 'Decks',
    function($scope, Decks) {
        $scope.toggleDeck = function() {
            Decks.toggleShowDeck();
        }
    }
]);
