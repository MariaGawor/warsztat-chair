
document.addEventListener('DOMContentLoaded', function() {
var wyslij = document.getElementById("button-send");
wyslij.addEventListener("click", function(event){
	alert("Message was sent");
});
});
var sliderImages = document.querySelectorAll(".slide");
 var arrowRight = document.getElementById("arrow-right");
 var arrowLeft = document.getElementById("arrow-left");
 current = 0;

function reset () {
	for(var i = 0; i<sliderImages.length; i++) {
		sliderImages[i].style.display = "none";
	}
}
function startSlide(){
	reset();
	sliderImages[0].style.display="block";
}
function slideLeft(){
	reset();
	sliderImages[current - 1].style.display ="block";
	current --;
}
function slideRight(){
	reset();
	sliderImages[current + 1].style.display = "block";
    current ++;
}

arrowLeft.addEventListener("click", function(event){
	if(current === 0){
		current = sliderImages.length;
	};
	slideLeft();
});

arrowRight.addEventListener("click", function( ){
	if(current === sliderImages.length - 1){
		current = -1;
	}
	slideRight();
});
startSlide();
