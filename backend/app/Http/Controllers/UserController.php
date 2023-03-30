<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\UserRequest;

class UserController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth:api');
    $this->middleware('permission:user-list|user-create|user-edit|user-delete', ['only' => ['index', 'show']]);
    $this->middleware('permission:user-create', ['only' => ['store']]);
    $this->middleware('permission:user-edit', ['only' => ['update']]);
    $this->middleware('permission:user-delete', ['only' => ['delete']]);
  }

  public function index(Request $request): JsonResponse
  {
    $query = User::query();
    $perPage = $request->get('per_page', 10);
    $page = $request->get('page', 1);
    $sortField = $request->get('sort_field', 'id');
    $sortOrder = $request->get('sort_order', 'asc');
    $filter = $request->get('filter', null);

    if (is_array($filter)) {
      foreach ($filter as $key => $value) {
        if ($value) {
          if ($key === 'name') {
            $query->where('first_name', 'like', "%$value%")
              ->orWhere('last_name', 'like', "%$value%");
          } else {
            $query->where($key, 'like', "%$value%");
          }
        }
      }
    }

    $query->orderBy($sortField, $sortOrder)
      ->skip(($page - 1) * $perPage)
      ->take($perPage);

    $users = $query->get();

    return response()->json([
      'data' => $users,
      'pagination' => [
        'total' => $users->count(),
        'per_page' => $perPage,
        'current_page' => $page,
        'last_page' => ceil(User::count() / $perPage),
        'from' => ($page - 1) * $perPage + 1,
        'to' => $page * $perPage > User::count() ? User::count() : $page * $perPage
      ]
    ], 200);
  }

  public function store(UserRequest $request): JsonResponse
  {
    $user = User::create($request->all());
    $user->assignRole('user');

    return response()->json([
      'data' => $user,
      'message' => 'User created successfully',
    ], 201);
  }

  public function show(User $user): JsonResponse
  {
    return response()->json([
      'data' => $user,
    ], 200);
  }

  public function update(UserRequest $request, User $user): JsonResponse
  {
    $user->update($request->all());

    return response()->json([
      'data' => $user,
      'message' => 'User updated successfully',
    ], 200);
  }

  public function delete(User $user): JsonResponse
  {
    if (!$user->deleted_at) {
      $user->delete();
      return response()->json([
        'data' => $user,
        'message' => 'User soft deleted successfully',
      ], 200);
    }
    $user->forceDelete();
    return response()->json([
      'data' => $user,
      'message' => 'User deleted permanently successfully',
    ], 200);
  }
}