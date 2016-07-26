(function(){
	'use strict';

	angular
	.module('app', ['admin','app.router','app.auth','app.constants','user'])
	.run(function ($rootScope, USER_ROLES, authService, $state, AUTH_EVENTS) {
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
			
			if(fromParams.skipSomeAsync){
				return;
			}
			
			var authorizedRoles = toState.data.role;
			event.preventDefault();
			authService.isAuthorized().then(function (response){
				if(response!=authorizedRoles){
					switch (response){
						case 'public':
							$state.go('login');
							break;
						case 'admin':
							$state.go('admindashboard');
							break;
						case 'user':
							$state.go('dashboard');
							break;
						default:
							$state.go('/');
							

					}
					return;
				}
				continueNavigation();
			});

			function continueNavigation(){		
				var params = angular.copy(toParams);
				fromParams.skipSomeAsync = true;
				$state.go(toState.name, params);			
			}
			
			
		});

	});


})();