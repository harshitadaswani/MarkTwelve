<?php
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "triangle_login";

$v1 = $_POST["email"];
$v2 = $_POST["password"];

// Create connection
$conn = new mysqli($servername, $username, $password, $databasename);
// Check connection
if ($conn->connect_error) 
{
  die("Connection failed: " . $conn->connect_error);
}

$result = mysqli_query($conn, "INSERT INTO `login` (`E_mail`,`password`) VALUES ('$v1','$v2')");

if ($result) 
{
  echo "Record added successfully!";
}
else 
{
  echo "Couldn't add record. Reason: " . mysqli_error($conn) . "<br>";
}
?>
