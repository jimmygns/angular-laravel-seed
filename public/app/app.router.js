(function(){
	'use strict';

angular
.module('app.router',['ui.router','admin.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
});

})();