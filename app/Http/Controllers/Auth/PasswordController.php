<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class PasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Create a new password controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware($this->guestMiddleware());
    }

    /**
     * Overidden
     * Reset the given user's password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function reset(Request $request)
    {
        $this->validate(
            $request,
            $this->getResetValidationRules(),
            $this->getResetValidationMessages(),
            $this->getResetValidationCustomAttributes()
        );
        $credentials = $this->getResetCredentials($request);
        $broker = $this->getBroker();
        
        $response = Password::broker($broker)->reset($credentials, function ($user, $password) {
            $this->resetPassword($user, $password);
        });
        return $response;
        switch ($response) {
            case Password::PASSWORD_RESET:
                return response()->json(['success'=>'password reset successfully']);
            default:
                return response()->json(['error'=>'reset failed']);
        }
    }

     /**
     * overidden method
     *
     * @return void
     */
    public function postEmail(Request $request){
        $this->validateSendResetLinkEmail($request);

        $broker = $this->getBroker();
        
        $response = Password::broker($broker)->sendResetLink(
            $this->getSendResetLinkEmailCredentials($request),
            $this->resetEmailBuilder()
        );
        switch ($response) {
            case Password::RESET_LINK_SENT:
                return response()->json(['success'=>'email sent successfully']);
            case Password::INVALID_USER:
            default:
                return response()->json(['error' => 'invalid_user'], 401);;
        }
    }
}
