(function(){
	'use strict';

	angular
	.module('app', ['admin','app.router','app.auth','app.constants','user','LocalStorageModule'])
	.run(function ($rootScope, USER_ROLES, authService, $state, AUTH_EVENTS,localStorageService) {
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
			
			var authorizedRoles = toState.data.role;
			
			if(fromParams.skipSomeAsync){
				return;
			}
			
			
			event.preventDefault();
			authService.isAuthorized().then(function (response){
				
				if(response!=authorizedRoles){
					switch (response){
						case 'public':
							if(localStorageService.get('token')!=null){
								localStorageService.remove('token');
								$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess, 'loggedout');
							}
							$state.go('main.login');
							break;
						case 'admin':
							$state.go('main.admindashboard');
							break;
						case 'user':
							$state.go('main.dashboard');
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