(function() {
    'use strict';

    angular
        .module('app.auth',['LocalStorageModule','app.constants'])
        .factory('authService', authService);

    authService.$inject = ['$http','localStorageService','USER_ROLES','AUTH_EVENTS','$rootScope'];

    /* @ngInject */
    function authService($http,localStorageService,USER_ROLES,AUTH_EVENTS,$rootScope) {
        var service = {
            login: login,
            getUser: getUser,
            isAuthenticated: isAuthenticated,
            isAuthorized: isAuthorized,
            logout: logout
        };
        return service;

        ////////////////

        function login(data) {
            return $http({
                method: 'POST',
                url: '/api/v1/login',
                skipAuthorization: true,
                data: data
            }).then(function successCallback(response) {
                localStorageService.set('token',response.data.success.token);
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, 'loggedin');
                return response;

            }, function errorCallback(response) {
                return response;
            });

        }

        function getUser(){
            return $http({
                method: 'GET',
                url: '/api/v1/user'
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                return response.data;
            });
        }

        function isAuthenticated(){
            return $http({
                method: 'GET',
                url: '/api/v1/isAuthenticated'
            }).then(function successCallback(response) {
                return true;
            }, function errorCallback(response) {
                return false;
            });
        }

        function isAuthorized(){
            return $http({
                method: 'GET',
                url: '/api/v1/isAuthorized'
            }).then(function successCallback(response) {
                return response.data.role;

            }, function errorCallback(response) {
                return USER_ROLES.public;

            });
        }

        function logout(){
            return $http({
                method: 'POST',
                url: '/api/v1/logout'
            }).then(function (response) {
                localStorageService.remove('token');
                $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess, 'loggedout');
                return response;
            });
        }
    }
})();