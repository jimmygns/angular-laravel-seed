(function(){
	'use strict';

angular
.module('admin.auth.router',['ui.router','app.constants'])
.config(function($stateProvider, $urlRouterProvider,USER_ROLES) {
	$stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "app/admin/admin.auth/login.html",
      controller: "AdminLoginController",
      controllerAs: "vm",
      data: {
      	role: USER_ROLES.public
      }
    });
});

})();