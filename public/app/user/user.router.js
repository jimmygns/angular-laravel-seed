(function() {
    'use strict';

    angular
        .module('user.router', [
            'user.auth.router',
            'user.dashboard.router'
        ]);
})();