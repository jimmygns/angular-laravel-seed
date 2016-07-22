(function() {
    'use strict';

    angular
        .module('app.auth',['LocalStorageModule','app.constants'])
        .factory('authService', authService);

    authService.$inject = ['$http','localStorageService','AUTH_RESPONSE','USER_ROLES'];

    /* @ngInject */
    function authService($http,localStorageService,AUTH_RESPONSE,USER_ROLES) {
        var service = {
            login: login,
            isAuthenticated: isAuthenticated,
            isAuthorized: isAuthorized
        };
        return service;

        ////////////////

        function login(data) {
            return $http.post('/api/v1/login',data).then(function successCallback(response) {
                localStorageService.set('token',response.data.success.token);
                return response;

            }, function errorCallback(response) {
                return response;
            });

        }

        function isAuthenticated(){
            return $http({
                method: 'GET',
                url: '/api/v1/isAuthenticated',
                headers: {
                    'Authorization': 'Bearer '+localStorageService.get('token')
                }
            }).then(function successCallback(response) {
                return true;
            }, function errorCallback(response) {
                return false;
            });
        }

        function isAuthorized(){
            return $http({
                method: 'GET',
                url: '/api/v1/isAuthorized',
                headers: {
                    'Authorization': 'Bearer '+localStorageService.get('token')
                }
            }).then(function successCallback(response) {
                return response.data.role;

            }, function errorCallback(response) {
                return USER_ROLES.public;

            });
        }
    }
})();