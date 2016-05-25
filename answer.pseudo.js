/*
The function generateName takes name as parameter generates a randomn number between 6 and 15 and returns the result
*/
var generateName=function(name){
	//Generate Random Number berween 6 and 15 both inclusive
	var randomNumber=Math.floor(Math.random() * 10 + 6);
	return name + " "+randomNumber;
}