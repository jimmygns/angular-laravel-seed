(function() {
    'use strict';

    angular
        .module('user.dashboard.controller',[])
        .controller('UserDashboardController', UserDashboardController);

    UserDashboardController.$inject = [];

    /* @ngInject */
    function UserDashboardController() {
        var vm = this;
        

        activate();

        ////////////////

        function activate() {
        }
    }
})();