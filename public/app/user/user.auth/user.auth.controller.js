(function() {
	'use strict';

	angular
	.module('user.auth.controller',['app.auth','ui.router'])
	.controller('UserAuthController', UserAuthController);

	UserAuthController.$inject = ['authService','$state'];

	/* @ngInject */
	function UserAuthController(authService,$state) {
		var vm = this;
		vm.login = login;
		

		activate();

        ////////////////

        function activate() {
        	
        }

        function login(){
        	
        	var data = {
        		email: vm.email,
        		password: vm.password
        	};

        	authService.login(data).then(function (response) {
        		if(response.data.success){
        			$state.go('main.dashboard');
        		}
        		else{
        			console.log(response.data.error);
        		}

        	});
        }
    }
})();