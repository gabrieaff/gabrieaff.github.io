function begin() {
	$('html, body').animate({scrollTop: $("#panel-1").offset().top}, 800);	
}

function back() {
	$('html, body').animate({scrollTop: $("#titlePage").offset().top}, 800);
}

function climb() {
	var elem = document.getElementById("man");   
  	var initPos = 161.9;
  	var pos = initPos;
  	var id = setInterval(frame, 200);
  	function frame() {
    	if (pos >= initPos + 46) {
      		clearInterval(id);
      		document.getElementById("man").style.animation = "";
    	} else {
      		pos++; 
      		elem.style.left = 0.21*pos + 'vw'; 
      		elem.style.top = 636.9- pos + 'vh'; 
      		document.getElementById("man").style.animation = "shake 2s infinite";
    	}
  	}
}
/*after click the icon, the screen goes down and plane audio */
function one() {
	$('html, body').animate({scrollTop: $("#panel-2").offset().top}, 800);
	var audio = document.getElementById("plane");
	audio.play();

	
}

function two() {
	$('html, body').animate({scrollTop: $("#panel-3").offset().top}, 800);
	var audio = document.getElementById("plane");
	audio.pause();

}

function three() {
	$('html, body').animate({scrollTop: $("#panel-4").offset().top}, 800);	 
}

function four() {
	$('html, body').animate({scrollTop: $("#panel-5").offset().top}, 800);
	var audio = document.getElementById("bubble");
	/*loop the sound of bubbling.*/
	// audio.addEventListener('ended', function() {
 //    	this.currentTime = 0;
 //    	this.play();
	// 	}, false);
	audio.play();

	/*after clicking the button 4, the man climbing the mountain*/
	
}
function five() {
	$('html, body').animate({scrollTop: $("#panel-6").offset().top}, 800);
	var audio = document.getElementById("bubble");
	audio.pause();
}

