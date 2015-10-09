'use strict';

hearthstoneServices.factory('Sets', ['$http',
    function($http) {

        return {
            get: function() {
                return $http.get('/api/sets')
                    .success(function(response) {
                        return response;
                    })
                }
        }

    }
]);
