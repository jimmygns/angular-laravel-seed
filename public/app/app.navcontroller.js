(function() {
    'use strict';

    angular
    .module('app')
    .controller('NavController', NavController);

    NavController.$inject = ['USER_ROLES','AUTH_EVENTS','authService','$state'];

    /* @ngInject */
    function NavController(USER_ROLES,AUTH_EVENTS,authService,$state) {
        var vm = this;
        vm.name = '';
        vm.logout=logout;



        activate();

        ////////////////

        function activate() {
        	authService.isAuthenticated().then(function(response){
        		vm.isLoggedin=response;
                if(response){
                    authService.getUser().then(function(response){
                        vm.name=response.name;
                    });
                }

            });
        	
        }

        function logout() {
            console.log('here');
            authService.logout().then(function(response){
                vm.isLoggedin=false;
                $state.go('login');
            });
        }

        
    }
})();