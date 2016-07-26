(function() {
    'use strict';

    angular
        .module('app.constants', [])
        .constant("AUTH_EVENTS",{
        	notAuthenticated: 'logout',
        	authenticated: 'login'
        })
        .constant("USER_ROLES",{
        	admin: 'admin',
        	user: 'user',
            public: 'public'
        });
})();