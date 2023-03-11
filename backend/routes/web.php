<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
  return redirect('/api');
});

Route::get('/api', function () {
  $routeCollection = Route::getRoutes();
  $routes = [];

  foreach ($routeCollection as $value) {
    $routes[] = [
      "HTTP Method" => $value->methods()[0],
      "Route" => $value->uri(),
      "Name" => $value->getName(),
      "Corresponding Action" => $value->getActionName(),
      "Middleware" => $value->middleware(),
      "Prefix" => $value->getPrefix(),
    ];
  }

  $prefixHide = array(
    '_ignition',
    'sanctum'
  );

  foreach ($routes as $key => $value) {
    if (in_array($value['Prefix'], $prefixHide)) {
      unset($routes[$key]);
    }
  }

  usort(
    $routes,
    function ($a, $b) {
      return strcmp($a['Prefix'], $b['Prefix']);
    }
  );

  return response()->json($routes);
});