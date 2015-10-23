'use strict';

// Declare app level module which depends on views, and components
angular.module('hearthstone', [
    'ngDragDrop',
    'ngRoute',
    'hearthstone.cards',
    'hearthstone.decks',
    'hearthstone.navbar',
    'hearthstone.version',
    'hearthstoneServices'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cards'
    });
}])
.directive('navbar', function() {
    return {
        templateUrl: 'views/navbar.html'
    };
})
.directive('deck', function() {
    return {
        templateUrl: 'views/decks.html'
    };
});

var hearthstoneServices = angular.module('hearthstoneServices', []);
