'use strict';

angular.module('hearthstone.cards', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cards', {
        templateUrl: 'views/cards.html',
        controller: 'CardsCtrl'
    });
}])

.controller('CardsCtrl', ['$scope', 'Cards',
    function($scope, Cards) {

        Cards.get()
            .then(function(cards) {
                    $scope.cards = cards.data;
                }
            )
    }
]);
