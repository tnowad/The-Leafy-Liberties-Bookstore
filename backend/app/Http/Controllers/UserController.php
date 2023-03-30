<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
  public function __construct()
  {
    // $this->middleware('auth:api');
    // $this->middleware('permission:user-list|user-create|user-edit|user-soft-delete|user-delete', ['only' => ['index', 'show']]);
    // $this->middleware('permission:user-create', ['only' => ['store']]);
    // $this->middleware('permission:user-edit', ['only' => ['update']]);
    // $this->middleware('permission:user-soft-delete', ['only' => ['softDelete']]);
    // $this->middleware('permission:user-delete', ['only' => ['destroy']]);
  }

  public function index(Request $request): JsonResponse
  {
    $query = User::query();

    // Handle pagination
    $perPage = $request->get('per_page', 10);
    $page = $request->get('page', 1);

    // Handle sorting
    $sortField = $request->get('sort_field', 'id');
    $sortOrder = $request->get('sort_order', 'asc');
    // Handle filtering
    $filter = $request->get('filter', 'name');
    $filterValue = $request->get('filter_value', '');

    if ($filterValue) {
      // full name search
      if ($filter === 'name') {
        $query->orWhere('first_name', 'like', "%$filterValue%")
          ->orWhere('last_name', 'like', "%$filterValue%");
      } else {

        $query->where($filter, 'like', "%$filterValue%");
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
}