'use strict';

hearthstoneServices.factory('Cards', ['$http',
    function($http) {

        return {
            get: function() {
                return $http.get('/api/cards')
                    .success(function(response) {
                        return response;
                    })
                }
        }

    }
]);
