(function () {
   'use strict';
}());

// Declare app level module which depends on views, and components
angular.module('hearthstone', [
    'ngDragDrop',
    'ngRoute',
    'hearthstone.cards',
    'hearthstone.decks',
    'hearthstone.navbar',
    'hearthstone.users',
    'hearthstone.version',
    'hearthstoneServices'
])
.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/cards'
        });
    }
])
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

angular.module('hearthstone').factory('authInterceptor', ['$window', '$location',
    function($window, $location) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.authorization = $window.sessionStorage.token;
                }

                return config;
            },
            response: function(response) {
                if (response.status === 401) {
                    $location.path('/login');
                }
                return response;
            }
        }
    }
]);

angular.module('hearthstone').config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }
]);
