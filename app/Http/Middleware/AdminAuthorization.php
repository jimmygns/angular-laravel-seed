<?php

namespace App\Http\Middleware;

use Closure;

class AdminAuthorization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = JWTAuth::parseToken()->authenticate();
        if($user->group()->first()->group_name!='admin'){
            return response->json('Unauthorized.', 401);
        }
        return $next($request);
    }
}
