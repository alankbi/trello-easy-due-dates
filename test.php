<?php
$myfile = fopen("test.txt", "w");
$txt = $_GET["test"];//file_get_contents('php://input');
fwrite($myfile, $txt);
fclose($myfile);
?>