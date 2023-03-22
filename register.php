<?php

$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$passwrd = $_POST["password"];
$sex = $_POST["sex"];


$host = "localhost";
$dbname = "Registration";
$username = "root";
$passwd = "";
          //connect to database(where database name = 'Registration')
$conn = mysqli_connect('localhost','root','','Registration');

          // insert data into database
$sql = "INSERT INTO Registration (firstName,lastName,email,passwrd,sex) VALUES ('$firstName','$lastName','$email','$passwrd','$sex')";

          //
$run=mysqli_query($conn, $sql);

if ( false===$run ) {
    printf("error: %s\n", mysqli_error($conn));
  }
  else {
    echo 'You are successfully registered .';
  }
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privac
