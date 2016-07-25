(function() {
    'use strict';

    angular
        .module('admin.dashboard.service',['LocalStorageModule'])
        .factory('dataService', dataService);

    dataService.$inject = ['$http','localStorageService'];

    /* @ngInject */
    function dataService($http,localStorageService) {
        var service = {
            getUsers: getUsers
        };
        return service;

        ////////////////

        function getUsers() {

        	return $http({
                method: 'GET',
                url: '/api/v1/getUsers',
                headers: {
                    'Authorization': 'Bearer '+localStorageService.get('token')
                }
            }).then(function successCallback(response) {
                return response.data;

            }, function errorCallback(response) {
            	
            });
        }
    }
})();