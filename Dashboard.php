<?php
 header('Access-Control-Allow-Origin: http://localhost:3000');


$conn = new mysqli("localhost", "root", "", "obesity_silo");
$sql1 = "SELECT * FROM patientprofile";
$result1 = $conn->query($sql1);

if ($result1->num_rows > 0) {
    while ($row1 = $result1->fetch_assoc()) {

        $json['data'][]=array('Id'=> $row1["patientId"],'name'=> $row1["patientName"], 'gender'=>$row1["gender"], 'Registration_Date'=>$row1["dateOfRegistration"]);
    }
    $display= json_encode($json);
    echo $display;

    }
$conn->close();