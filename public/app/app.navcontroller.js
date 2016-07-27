(function() {
    'use strict';

    angular
    .module('app')
    .controller('NavController', NavController);

    NavController.$inject = ['USER_ROLES','AUTH_EVENTS','authService','$state','$scope','data'];

    /* @ngInject */
    function NavController(USER_ROLES,AUTH_EVENTS,authService,$state,$scope,data) {
        var vm = this;
        vm.logout=logout;

        
        activate();

        ////////////////

        function activate() {
            console.log(data);
        	vm.isLoggedin=data.isLoggedin;
            vm.name=data.name;
            console.log(vm.isLoggedin);
        	
        }

        function logout() {
            authService.logout().then(function(response){
                $state.go('main.login');
            });
        }

        $scope.$on(AUTH_EVENTS.loginSuccess, function(){        
            authService.getUser().then(function(response){
                vm.name=response.name;
                vm.isLoggedin=true;
            });
        });

        $scope.$on(AUTH_EVENTS.logoutSuccess, function(){
            console.log('ishere');
            vm.name='';
            vm.isLoggedin=false;
        });

        
    }
})();