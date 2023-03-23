<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
  /**
   * Get all users. GET / users.
   * Response Format: application/json
   * - 200 : Success
   * - 403 : User doesn't have permission to view users.
   *
   * @return list of users. Response Format : application / json { message : " You are not authorized to view users.
   */
  public function index(): JsonResponse
  {
    // If the user is not authorized to view users.
    if (!auth()->user()->can('users.access')) {
      return response()->json(['message' => 'You are not authorized to view users.'], 403);
    }

    $users = User::all();

    return response()->json($users, 200);
  }

  /**
   * Create a new user. Requires authentication.
   * Response Format: application/json
   * - 201 : User created.
   * - Failure 403 : User doesn't have permission to create users.
   *
   * @param $request
   *
   * @return $user The user that was created or an error message if something went wrong with the request
   */
  public function create(UserRequest $request): JsonResponse
  {
    // If the user is not authorized to create users.
    if (!auth()->user()->can('users.create')) {
      return response()->json(['message' => 'You are not authorized to create users.'], 403);
    }

    $user = User::create($request->all());

    return response()->json($user, 201);
  }

  /**
   * Return a single user Requires authentication.
   * Response Format: application/json
   * - 200 : Success
   * - 403 : User doesn't have permission to view users.
   *
   * @param $id
   *
   * @return $user The user that was found or an error message if something went wrong with the request
   */
  public function show(string $id): JsonResponse
  {
    // If the user is not authorized to view users.
    if (!auth()->user()->can('users.view')) {
      return response()->json(['message' => 'You are not authorized to view users.'], 403);
    }

    $user = User::findOrFail($id);

    return response()->json($user, 200);
  }

  /**
   * Update a user in the database.
   * Response Format: application/json
   * - 200 : Success
   * - 403 : User doesn't have permission to update users.
   * - 404 : User doesn't exist.
   *
   * @param $request
   * @param $id
   *
   * @return $user The user that was updated or an error message if something went wrong with the request
   */
  public function update(UserRequest $request, string $id): JsonResponse
  {
    // If the user is not authorized to update users.
    if (!auth()->user()->can('users.update')) {
      return response()->json(['message' => 'You are not authorized to update users.'], 403);
    }
    $user = User::findOrFail($id);

    $user->update($request->all());

    return response()->json($user, 200);
  }

  /**
   * Delete a user from the database. This is a DELETE request to / users / { id }.
   *
   * @param $id
   *
   * @return 204 if everything is fine 400 if there is a permission error. 404 if the user doesn't
   */
  public function destroy(string $id)
  {
    // If the user is not authorized to delete users.
    if (!auth()->user()->can('users.delete')) {
      return response()->json(['message' => 'You are not authorized to delete users.'], 403);
    }

    $user = User::findOrFail($id);

    $user->delete();

    return response()->json(null, 204);
  }
}