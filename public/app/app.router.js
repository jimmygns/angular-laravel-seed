(function(){
	'use strict';

	angular
	.module('app.router',['ui.router','admin.router','user.router','app.constants','app.auth'])
	.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
		.state('main', {
			url: "",
			abstract: true,
			templateUrl: "app/shared/layout/layout.html",
			controller: "NavController",
			controlleras: "vm",
			resolve: {
				data: function(authService) {
					// return authService.isAuthenticated().then(function(res){
					// 	if(res){
					// 		return authService.getUser().then(function(response){
					// 			var data={
					// 				isLoggedin: res,
					// 				name: response.name
					// 			};
								
					// 			return data;
					// 		});
					// 	}
					// 	else{
					// 		var data={
					// 			isLoggedin: false,
					// 			name: ''
					// 		};
					// 		return data;
					// 	}


					// });
					return {isLoggedin: true, name: 'tester1'};

				}
			}

		})
		.state('main.home', {
			url: "/",
			template: '<h1>Home</h1>',
			data: {
				role: USER_ROLES.public
			}
		});
	});

})();