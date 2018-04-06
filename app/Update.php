<?php
require_once('./helpers.php');
date_default_timezone_set('America/Sao_Paulo');
$_POST["dados"];
$data = $_POST["dados"];

$realpath = realpath('../store/');
$updateFile = "${realpath}".DIRECTORY_SEPARATOR."base.json";
$backupFile = "${realpath}".DIRECTORY_SEPARATOR."backup.json";


if(!file_exists($updateFile)) {
	file_put_contents($updateFile, $data);
} else {
	if(!is_file_equal($data, $updateFile)) {
		
		if(file_exists($backupFile)) { 
			unlink($backupFile); 
		}
		rename($updateFile, $backupFile);

		file_put_contents($updateFile, $data);
	}
}

