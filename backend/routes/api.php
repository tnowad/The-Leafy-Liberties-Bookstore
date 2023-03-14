<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::group(['prefix' => 'auth'], function () {
  Route::post('register', [RegisterController::class, 'register']);
  Route::post('login', [LoginController::class, 'login']);
  Route::post('logout', [LoginController::class, 'logout']);
  Route::post('refresh-token', [LoginController::class, 'refresh']);
  Route::get('user-profile', [LoginController::class, 'userProfile']);
});

// Routes for user management
Route::group(['prefix' => 'user'], function () {
  Route::get('index', [UserController::class, 'index']);
  Route::get('show/{id}', [UserController::class, 'show']);
  Route::post('store', [UserController::class, 'store']);
  Route::put('update/{id}', [UserController::class, 'update']);
  Route::delete('delete/{id}', [UserController::class, 'destroy']);
});