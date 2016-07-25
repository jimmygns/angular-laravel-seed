(function() {
    'use strict';

    angular
        .module('admin.dashboard.controller',['admin.dashboard.service'])
        .controller('AdminDashboardController', AdminDashboardController);

    AdminDashboardController.$inject = ['$http','dataService'];

    /* @ngInject */
    function AdminDashboardController($http,dataService) {
        var vm=this;

        activate();

        function activate(){
        	dataService.getUsers().then(function (response){
        		vm.users=response;
        	});
        }
    }
})();