(function(){
	'use strict';

	angular
	.module('app.router',['ui.router','admin.router','user.router','app.constants'])
	.config(function($stateProvider, $urlRouterProvider, USER_ROLES) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
		.state('home', {
			url: "/",
			template: '<h1>Home</h1>',
			data: {
				role: USER_ROLES.public
			}
		});
	});

})();