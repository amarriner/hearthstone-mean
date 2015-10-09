'use strict';

hearthstoneServices.factory('Classes', ['$http',
    function($http) {

        return {
            get: function(query) {
                return $http({
                    method  : 'GET',
                    url     : '/api/classes',
                    data    : query
                })
                .success(function(response) {
                    return response;
                })
            }
        }

    }
]);
