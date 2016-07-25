(function(){
	'use strict';

	angular
	.module('app.router',['ui.router','admin.router','user.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
	});

})();