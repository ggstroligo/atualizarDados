<?php 
function is_file_equal($initial_data, $comparing_data) {
	if(is_file($initial_data)) $initial_data = copyFileContent($initial_data);
	if(is_file($comparing_data)) $comparing_data = copyFileContent($comparing_data);
	
	if($initial_data == $comparing_data) {
		return true;
	} else {
		return false;
	}
}

function copyFileContent($file){
	$fp = fopen($file, "r");
	$buffer = "";
	while (!feof($fp)) $buffer .= fgetc($fp);
	fclose($fp);
	return $buffer;
}