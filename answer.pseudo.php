
<?php
/*
The function generateName takes name as parameter generates a randomn number between 6 and 15 and returns the result
*/
	function generateName($name){
		//Generate Random Number
		$randomNUmber=rand(6,15);
		echo $name+" "+$randomNUmber;
	}
?>