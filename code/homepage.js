// make an array of strings that has all of the image names.

var folderLocation = 'C:/Users/Hachimeroppi/Desktop/Project_Caelium/images/slideshow/'
var imageshow = ["1.png","2.png","3.png","4.png"];
for (var i = 0; i < imageshow.length; i++) {
	imageshow[i] = (folderLocation + imageshow[i]);
}
var index=0;


function changeImageL(){	
	var img = document.getElementById('carousel');
	if(index <= 0){
		index = imageshow.length-1;			
	}
	else{
		index--;
	}
	img.src=imageshow[index];
};
function changeImageR(){
	var img = document.getElementById('carousel');
	if(index >= imageshow.length-1){
		index = 0;		
	}
	else{
		index++;
	}
	img.src=imageshow[index];
};





