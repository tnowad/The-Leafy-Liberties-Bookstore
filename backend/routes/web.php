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
  return view('welcome');
});

Route::get('/api', function () {
  $routeCollection = Route::getRoutes();
  echo "<table style='width:100%'>";
  echo "<tr>";
  echo "<td ><h4>HTTP Method</h4></td>";
  echo "<td ><h4>Route</h4></td>";
  echo "<td ><h4>Name</h4></td>";
  echo "<td ><h4>Corresponding Action</h4></td>";
  echo "<td ><h4>Middleware</h4></td>";
  echo "<td ><h4>Prefix</h4></td>";
  echo "</tr>";
  foreach ($routeCollection as $value) {
    echo "<tr>";
    echo "<td>" . $value->methods()[0] . "</td>";
    echo "<td>" . $value->uri() . "</td>";
    echo "<td>" . $value->getName() . "</td>";
    echo "<td>" . $value->getActionName() . "</td>";
    echo "<td>" . implode(", ", $value->middleware()) . "</td>";
    echo "<td>" . $value->getPrefix() . "</td>";
    echo "</tr>";
  }
  echo "</table>";
});