<?php
date_default_timezone_set('America/Sao_Paulo');

$realpath = realpath('../store/');
$updateFile = "${realpath}".DIRECTORY_SEPARATOR."base.json";
$backupFile = "${realpath}".DIRECTORY_SEPARATOR."backup.json";

if(file_exists($backupFile)){
	if(file_exists($updateFile)){
		unlink($updateFile);
	}
	copy($backupFile, $updateFile);
}