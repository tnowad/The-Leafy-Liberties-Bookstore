<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
  public function __construct()
  {
    $this->middleware('guest');
  }


  protected function create(array $data)
  {
    $user = User::create([
      'first_name' => $data['first_name'],
      'last_name' => $data['last_name'],
      'username' => $data['username'],
      'phone' => $data['phone'],
      'email' => $data['email'],
      'password' => Hash::make($data['password']),
    ]);

    // $user->assignRole('user');

    return $user;
  }

  public function register(Request $request)
  {
    $request->validate([
      'first_name' => ['required', 'string', 'max:255'],
      'last_name' => ['required', 'string', 'max:255'],
      'phone' => ['required', 'string', 'max:255', 'unique:users'],
      'username' => ['required', 'string', 'max:255', 'unique:users'],
      'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
      'password' => ['required', 'string', 'min:8', 'confirmed'],
    ]);

    $user = $this->create($request->all());

    $token = auth()->login($user);

    return response()->json([
      'access_token' => $token,
      'token_type' => 'Bearer',
      'expires_in' => auth()->factory()->getTTL() * 60,
    ]);
  }
}