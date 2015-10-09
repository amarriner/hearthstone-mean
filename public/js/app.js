'use strict';

// Declare app level module which depends on views, and components
angular.module('hearthstone', [
    'ngRoute',
    'hearthstone.cards',
    'hearthstone.version',
    'hearthstoneServices'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cards'
    });
}]).
directive('navbar', function() {
    return {
        templateUrl: 'views/navbar.html'
    }
});

var hearthstoneServices = angular.module('hearthstoneServices', []);
