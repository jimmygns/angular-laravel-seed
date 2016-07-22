<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User;

class AdminController extends Controller
{
     public function __construct()
    {
        $this->middleware('admin');
    }


    public function getUsers(Request $request){
    	$users=User::with('group')->get();
    	return $users;
    }
}
