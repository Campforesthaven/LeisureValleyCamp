<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['emailaddress'];
$number= $_POST['phone'];
$message= $_POST['message'];


$to = "kumarorlewicz@gmail.com";


$subject = "New Submission from Leisure Valley Contact Us Form";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Phone = " . $number . "\r\n Message =" . $message;

$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>