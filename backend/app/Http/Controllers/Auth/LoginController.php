<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Login Controller
 * This controller handles authenticating users for the application and redirecting them to your home screen.
 */
class LoginController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth:api', ['except' => ['login']]);
  }
  /**
   * Get a JWT via given credentials.
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function login(Request $request): JsonResponse
  {
    $request->validate([
      'email' => 'required|string|email',
      'password' => 'required|string',
      'remember_me' => 'boolean',
    ]);

    $credentials = request(['email', 'password']);

    if (!$token = auth()->attempt($credentials)) {
      return response()->json(['message' => 'Unauthorized'], 401);
    }

    return response()->json([
      'message' => 'Successfully logged in',
      'data' => [
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL() * 60,
      ]
    ]);
  }

  /**
   * Log the user out (Invalidate the token).
   * @return \Illuminate\Http\JsonResponse
   */
  public function logout(): JsonResponse
  {
    auth()->logout();

    return response()->json([
      'message' => 'Successfully logged out'
    ]);
  }

  /**
   * Refresh a token.
   * @return \Illuminate\Http\JsonResponse
   */
  public function refresh(): JsonResponse
  {
    return response()->json([
      'message' => 'Successfully refreshed',
      'data' => [
        'access_token' => auth()->refresh(),
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL() * 60,
      ]
    ]);
  }

  /**
   * Get the authenticated User.
   * @return \Illuminate\Http\JsonResponse
   */
  public function userProfile(): JsonResponse
  {
    return response()->json(auth()->user());
  }
}