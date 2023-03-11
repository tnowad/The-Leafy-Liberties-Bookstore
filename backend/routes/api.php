<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

// Group all routes that do not require authentication here
Route::group(['middleware' => 'guest:api'], function () {
  Route::post('/register', [AuthController::class, 'register']);
  Route::post('/login', [AuthController::class, 'login']);
});

// Group all routes that require authentication here
Route::group(['middleware' => 'auth:api'], function () {
  Route::get('/user', [AuthController::class, 'user']);
});