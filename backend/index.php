<?php
$host = 'database'; // The hostname or IP address of the MySQL server
$database = 'bookstore'; // The name of the MySQL database
$username = 'admin'; // The MySQL username
$password = 'admin123'; // The MySQL password

// Create a connection to the MySQL server
$connection = mysqli_connect($host, $username, $password, $database);

// Check if the connection was successful
if (!$connection) {
    die('Failed to connect to the MySQL server: ' . mysqli_connect_error());
}

echo 'Connected to the MySQL server successfully!';

// Close the MySQL connection
mysqli_close($connection);
?>