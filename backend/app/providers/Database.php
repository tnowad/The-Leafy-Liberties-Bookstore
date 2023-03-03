<?php
namespace App\Providers;

use PDO;
use Slim\App;
use Slim\Interfaces\CallableResolverInterface;
use Slim\Interfaces\RouteCollectorInterface;
use Slim\Psr7\Factory\ServerRequestFactory;
use Slim\Psr7\Factory\UriFactory;
use Slim\Psr7\Factory\StreamFactory;
use Slim\Psr7\Factory\ResponseFactory;
use Slim\Psr7\Factory\UploadedFileFactory;
use Slim\Views\TwigMiddleware;
use Dotenv\Dotenv;

class Database
{
  public function register(App $app)
  {
    $container = $app->getContainer();

    // Load environment variables
    $dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
    $dotenv->load();

    // Database connection
    $container->set('db', function($container){
      $pdo = new PDO('mysql:host=' . $_ENV['DB_HOST'] . ';dbname=' . $_ENV['DB_NAME'] . ';charset=utf8', $_ENV['DB_USER'], $_ENV['DB_PASS']);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
      $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
      return $pdo;
    });
    // Set up statement factory for PDO
    $container->set('statement', function($container){
      return $container->get('db')->prepare('');
    });
  }
}
?>
