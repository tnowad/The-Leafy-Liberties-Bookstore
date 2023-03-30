<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::group(['prefix' => 'auth'], function () {
  Route::post('register', [RegisterController::class, 'register']);
  Route::post('login', [LoginController::class, 'login']);
  Route::post('logout', [LoginController::class, 'logout']);
  Route::post('refresh-token', [LoginController::class, 'refresh']);
  Route::get('user-profile', [LoginController::class, 'userProfile']);
});

Route::group([
  'prefix' => 'users',
  // 'middleware' => 'auth:api'
], function () {
  Route::get('/', [UserController::class, 'index']);
  Route::post('/', [UserController::class, 'create']);
  Route::get('/{id}', [UserController::class, 'show']);
  Route::put('/{id}', [UserController::class, 'update']);
  Route::delete('/{id}', [UserController::class, 'delete']);
});