(function() {
	'use strict';

	angular
	.module('user.dashboard.router', [
		'ui.router','app.constants'
		])
	.config(function($stateProvider, $urlRouterProvider,USER_ROLES) {
		$stateProvider
		.state('dashboard', {
			url: "/dashboard",
			templateUrl: "app/user/user.dashboard/dashboard.html",
			controller: "UserDashboardController",
			controllerAs: "vm",
			data: {
				role: USER_ROLES.user
			}
		});
	});

})();