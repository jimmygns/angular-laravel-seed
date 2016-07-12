<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticateController extends Controller
{

	 public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['login','signup']]);

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
            ]);
        }catch (\Illuminate\Database\QueryException $e) {
           return response()->json(['error' => 'User already exists.']);
        }
        $token = JWTAuth::fromUser($user);
        return response()->json(compact('token'));

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

        // all good so return the token
        return response()->json(compact('token'));
    }

    public function logout(Request $request){
        JWTAuth::parseToken()->invalidate();
        return response()->json(['success'=>'logged out']);
    }

    public function login(Request $request){
        return $this->authenticate($request);
    }
}
