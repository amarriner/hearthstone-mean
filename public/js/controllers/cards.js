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

    $scope.cards = Cards.getCards();

  }
]);
