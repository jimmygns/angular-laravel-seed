(function() {
    'use strict';

    angular
        .module('app.constants', [])
        .constant("AUTH_RESPONSE",{
        	notAuthenticated: 'authentication failed',
        	notAuthorized: 'not authorized',
        	authorized: 'authorized',
        	authenticated: 'authenticated'
        })
        .constant("USER_ROLES",{
        	admin: 'admin',
        	user: 'user',
            public: 'public'
        });
})();