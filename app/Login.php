<?php 
if($_POST["user"] != '123' && $_POST["pass"] != '123' ){
	header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404);
	echo json_encode(array('status' => 'failed'));
} else {
	header('Content-Type: application/json');
	echo json_encode(array('status' => 'success'));
}
