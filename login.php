<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "Registration";

$conn = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
/*if($conn->connect_error){
    echo "ERROR 404";
}else{
    echo "connected";
}*/

$email = $_POST['email'];
$passwrd = $_POST['password'];

//echo $email;
//echo $passwrd;

$sql = "SELECT * FROM Registration WHERE email='$email' AND passwrd='$passwrd'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_array($result);
if($row['email']== $email && $row['passwrd']== $passwrd){
    $name=$row['firstName'];
    echo "Welcome '$name', you are succesfully logged In";
}else{
    echo "<script>alert('Wrong \"Email\" \"Password\" Combination')</script>";
    echo "<script>location.replace('index.html')</script>";
}



?>
