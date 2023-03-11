<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

Route::post('/login', function (Request $request) {
  $credentials = $request->only('email', 'password');
  if (!$token = auth()->attempt($credentials)) {
    return response()->json(['error' => 'Unauthorized'], 401);
  }
  return response()->json(
    [
      'data' => [
        'token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL() * 60
      ]
    ]
  );
});

Route::post('/register', function (Request $request) {
  $request->validate([
    'name' => 'required|string',
    'email' => 'required|string|email|unique:users',
    'password' => 'required|string'
  ]);

  $user = User::factory()->create([
    'name' => $request->name,
    'email' => $request->email,
    'password' => Hash::make($request->password)
  ]);

  $token = auth()->attempt($request->only('email', 'password'));

  return response()->json([
    'data' => [
      'token' => $token,
      'token_type' => 'bearer',
      'expires_in' => auth()->factory()->getTTL() * 60
    ]
  ]);
});