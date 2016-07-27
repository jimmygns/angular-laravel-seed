(function(){
	'use strict';

angular
.module('user.auth.router',['ui.router','app.constants'])
.config(function($stateProvider, $urlRouterProvider,USER_ROLES) {
	$stateProvider
    .state('main.login', {
      url: "/login",
      templateUrl: "app/user/user.auth/login.html",
      controller: "UserAuthController",
      controllerAs: "vm",
      data: {
      	role: USER_ROLES.public
      }
    })
    .state('main.signup', {
      url: "/signup",
      templateUrl: "app/user/user.auth/signup.html",
      controller: "UserAuthController",
      controllerAs: "vm",
      data: {
        role: USER_ROLES.public
      }
    });
});

})();