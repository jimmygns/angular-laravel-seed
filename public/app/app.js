(function(){
	'use strict';

	angular
	.module('app', ['admin','app.router','app.auth','app.constants'])
	.run(function ($rootScope, USER_ROLES, authService, $state) {
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
			
			if(fromParams.skipSomeAsync){
				return;
			}
			
			var authorizedRoles = toState.data.role;
			event.preventDefault();
			authService.isAuthorized().then(function decide(response){
				if(response!=authorizedRoles){
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