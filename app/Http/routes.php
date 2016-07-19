<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

Route::group(['prefix' => 'api/v1'], function () {

	Route::resource('user', 'AuthenticateController', ['only' => ['index']]);
    Route::post('login', 'AuthenticateController@login');
    Route::post('logout','AuthenticateController@logout');
    Route::post('signup','AuthenticateController@signup');

    Route::post('resetPasswordRequest','Auth\PasswordController@postEmail');
    Route::post('resetPassword','Auth\PasswordController@reset');
});
