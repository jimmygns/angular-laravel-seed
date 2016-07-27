(function() {
    'use strict';

    angular
        .module('app.constants', [])
        .constant("AUTH_EVENTS",{
        	logoutSuccess: 'logout',
        	loginSuccess: 'login'
        })
        .constant("USER_ROLES",{
        	admin: 'admin',
        	user: 'user',
            public: 'public'
        });
})();