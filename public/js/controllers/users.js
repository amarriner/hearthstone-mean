'use strict';

angular.module('hearthstone.users', [])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'views/login.html',
        controller: 'UserCtrl'
    });
}])


.controller('UserCtrl', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        $scope.submit = function() {
            $http.post('/login', {
                    username: $scope.user.username,
                    password: $scope.user.password
                })
                .success(function (data, status, headers, config) {
                    $window.sessionStorage.token = data.token;
                })
                .error(function (data, status, headers, config) {
                    delete $window.sessionStorage.token;
                });
        };
    }
]);
