'use strict';

angular.module('hearthstone.cards', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cards', {
        templateUrl: 'views/cards.html',
        controller: 'CardsCtrl'
    });
}])

.controller('CardsCtrl', ['$scope', 'Cards', 'Sets', 'Classes', 'Decks',
    function($scope, Cards, Sets, Classes, Decks) {

        Sets.get()
            .then(function(sets) {
                $scope.sets = sets.data;
            });

        Classes.get()
            .then(function(classes) {
                $scope.classes = classes.data;
            });

        Cards.get()
            .then(function(cards) {
                $scope.cards = cards.data;
            });

        $scope.orderBy = 'name';
        $scope.setOrder = function(field) {
            if ($scope.orderBy == field) {
                if (field[0] == "-") {
                    $scope.orderBy = field.slice(1);
                }
                else {
                    $scope.orderBy = "-" + field;
                }
            }
            else {
                $scope.orderBy = field;
            }
        }

        $scope.showDeck = Decks.getShowDeck;
        $scope.toggleDeck = function() {
            Decks.toggleShowDeck();
        }
    }
]);
