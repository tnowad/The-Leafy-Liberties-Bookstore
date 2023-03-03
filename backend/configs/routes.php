<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

global $app;

$app->get('/hello/{name}', function (Request $request, Response $response, $args) {
  $name = $args['name'];
  $response->getBody()->write("Hello, $name");
  return $response;

});