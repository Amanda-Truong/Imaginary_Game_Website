window.onload = function () {

	var homebtn = document.getElementById("homeb");
	var aboutbtn = document.getElementById("aboutb");
	var charbtn = document.getElementById("characterb");
	var downloadbtn = document.getElementById("downloadb");

	homebtn.addEventListener("click", function(){
		window.location.href='C:/Users/Hachimeroppi/Desktop/Project_Caelium/code/home.html';
	});
	aboutbtn.addEventListener("click", function(){
		window.location.href='C:/Users/Hachimeroppi/Desktop/Project_Caelium/code/about.html';
	});
	charbtn.addEventListener("click", function(){
		window.location.href='C:/Users/Hachimeroppi/Desktop/Project_Caelium/code/characters.html';
	});
	downloadbtn.addEventListener("click", function(){
		window.location.href='C:/Users/Hachimeroppi/Desktop/Project_Caelium/code/download.html';
	});

}