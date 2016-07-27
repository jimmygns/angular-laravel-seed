<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use Auth;
use App\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticateController extends Controller
{

	public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['login','signup']]);
        $this->middleware('jwt.refresh',['only'=>'token']);

    }

    public function isAuthenticated(Request $request){
        return response()->json(['success'=>'isAuthenticated']);
    }

    public function isAuthorized(Request $request){
        $role = JWTAuth::parseToken()->authenticate()->group()->first()->group_name;
        return response()->json(['role'=>$role]);
    }

    public function index(){
    	$user = JWTAuth::parseToken()->authenticate();
    	return $user;
    }

    public function signup(Request $request){
       

        $credentials = $request->only('name','email','password');

        try {
           $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => bcrypt($credentials['password']),
            'group_id' => 2,
            ]);
        }catch (\Illuminate\Database\QueryException $e) {
           return response()->json(['error' => 'User already exists.'], 401);
        }
        $token = JWTAuth::fromUser($user);
        return response()->json(['success'=>['token'=>$token,'role'=>'user']]);

   }

    public function authenticate(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $current_user=Auth::User();
        $role=$current_user->group()->first()->group_name;
        
        // all good so return the token
        return response()->json(['success'=>['token'=>$token,'role'=>$role]]);
    }

    public function logout(Request $request){
        JWTAuth::parseToken()->invalidate();
        return response()->json(['success'=>'logged out']);
    }

    public function login(Request $request){
        return $this->authenticate($request);
    }
}
