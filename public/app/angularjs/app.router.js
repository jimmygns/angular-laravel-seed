(function(){
	'use strict';

angular
.module('app.router',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "app/login/login.html",
      controller: "LoginController",
      controllerAs: "vm"
    });
});

})();