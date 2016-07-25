(function(){
	'use strict';

angular
.module('admin.auth.controller',['app.auth','ui.router','LocalStorageModule'])
.controller('AdminLoginController',AdminLoginController);

AdminLoginController.$inject=['authService','$location','localStorageService','$state'];

function AdminLoginController(authService,$location,localStorageService,$state){
	var vm=this;
	vm.login=login;
	function login(){
		var data = {
			email: vm.email,
			password: vm.password
		};
		
		authService.login(data).then(function (response) {
			if(response.data.success){
				$state.go('admindashboard');
			}
			else{
				console.log(response.data.error);
			}
 
 		});
	}

}


})();