(function() {
	'use strict';

	angular
	.module('admin.dashboard.router',['ui.router','app.constants'])
	.config(function($stateProvider, $urlRouterProvider,USER_ROLES) {
		$stateProvider
		.state('dashboard', {
			url: "/dashboard",
			templateUrl: "app/admin/admin.dashboard/dashboard.html",
			controller: "AdminDashboardController",
			controllerAs: "vm",
			data: {
				role: USER_ROLES.admin
			}
		});
	});
})();