'use strict';

// Declare app level module which depends on views, and components
angular.module('hearthstone', [
  'ngRoute',
  'hearthstone.cards',
  'hearthstone.view1',
  'hearthstone.view2',
  'hearthstone.version',
  'hearthstoneServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
directive('navbar', function() {
  return {
    templateUrl: 'views/navbar.html'
  }
});

var hearthstoneServices = angular.module('hearthstoneServices', ['ngResource']);
