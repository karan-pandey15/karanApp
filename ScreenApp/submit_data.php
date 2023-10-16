<?php
$server = 'your-database-server';
$username = 'your-database-username';
$password = 'your-database-password';
$database = 'datacheck';

// Create a database connection
$connection = new mysqli($server, $username, $password, $database);

if ($connection->connect_error) {
    die('Connection failed: ' . $connection->connect_error);
}

// Get the data from the POST request
$data = json_decode(file_get_contents('php://input'));

$name = $data->name;
$email = $data->email;

// Insert data into the 'data' table
$sql = "INSERT INTO data (name, email) VALUES ('$name', '$email')";

if ($connection->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$connection->close();
?>
