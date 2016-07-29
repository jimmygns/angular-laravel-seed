(function(){
	'use strict';

	angular
	.module('app', ['admin','app.router','app.auth','app.constants','user','LocalStorageModule','angular-jwt'])
	.config(function(jwtInterceptorProvider,$httpProvider) {
		jwtInterceptorProvider.tokenGetter =['jwtHelper', '$http','localStorageService', function(jwtHelper,$http,localStorageService){
			var currentToken = localStorageService.get('token');
			if(currentToken){
				if(jwtHelper.isTokenExpired(currentToken)){
					return $http({
						method: 'POST',
						url: 'api/v1/refreshToken',
						skipAuthorization: true,
						headers: { 'Authorization': 'Bearer ' + currentToken}
					}).then(function successCallback(response){
						localStorageService.remove('token');
						localStorageService.set('token',response.data.token);
						//console.log('token is refreshed');
						return response.data.token;
					}, function errorCallback(response) {
                		return currentToken;
            		});
				}
				else{
					//console.log('use old one');
					return currentToken;
				}
			}

		}];
		$httpProvider.interceptors.push('jwtInterceptor');
	})
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
							$state.go('main.home');
							

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