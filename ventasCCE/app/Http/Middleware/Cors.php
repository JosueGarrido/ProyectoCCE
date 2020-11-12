<?php

namespace App\Http\Middleware;

use Closure;

class Cors
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
        $request->header('Access-Control-Allow-Origin', 'http://localhost:3000');
        $request->header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        $request->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return $next($request);
    }
}
