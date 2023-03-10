<?php

use Illuminate\Support\Facades\Route;
use Symfony\Component\Routing\RouteCollection;

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
    $route = [
      'http_method' => $value->methods()[0],
      'uri' => $value->uri(),
      'name' => $value->getName(),
      'action' => $value->getActionName(),
      'middleware' => $value->middleware(),
      'prefix' => $value->getPrefix()
    ];
    $routes[] = $route;
  }

  return response()->json(['routes' => $routes]);
});