(function() {
    'use strict';

    angular
        .module('user.dashboard.controller',[])
        .controller('UserDashboardController', UserDashboardController);

    UserDashboardController.$inject = ['data'];

    /* @ngInject */
    function UserDashboardController(data) {
        var vm = this;
        
        activate();

        ////////////////

        function activate() {
        }
    }
})();