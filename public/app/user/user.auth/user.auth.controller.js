(function() {
	'use strict';

	angular
	.module('user.auth.controller',['app.auth'])
	.controller('UserAuthController', UserAuthController);

	UserAuthController.$inject = ['authService'];

	/* @ngInject */
	function UserAuthController(authService) {
		var vm = this;
		vm.login = login;
		

		activate();

        ////////////////

        function activate() {
        	vm.email="what";
        }

        function login(){
        	console.log('here');
        	var data = {
        		email: vm.email,
        		password: vm.password
        	};

        	authService.login(data).then(function (response) {
        		if(response.data.success){
        			console.log(response.data);
        		}
        		else{
        			console.log(response.data.error);
        		}

        	});
        }
    }
})();