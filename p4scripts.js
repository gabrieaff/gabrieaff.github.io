
	$("#proj-button").hide();

	/*************************/
	//Initialize some variables
	/*************************/

	//Set the video link
	//Replace '&controls=0' to hide youtube player controls
	var theVideoLink = "https://www.youtube.com/watch?v=0-Rz3A8oDF4";
	var vidIsPlaying = false;
	var currentTime = 0;

	//Set the page element
	var theElement = "#video";

	//Create the Popcorn video object
	var myVideo = Popcorn.smart(theElement, theVideoLink);
	var volume = myVideo.volume();
	/*******************/
	//Trigger some events
	/*******************/

	//"ON" EVENTS
	myVideo.on("play", function(){
		$('body').css({"background":"#000000"}) ;
		$('.header').hide();
		$("#video").addClass("center-video");
		$("#controls").addClass("center-controls");
		$(".content-title").addClass("center-title");
		$(".steps").addClass("center-steps");
		$("#play").html("<i class='fas fa-pause'></i>");
		$(".control").css({"color":"#000", "background":"#fff"});
		vidIsPlaying = true;
	});
	myVideo.on("pause", function(){
		$('body').css({"background":"#FFFFFF"});
		$('.header').show();
		$(".content-title").removeClass("center-title");
		$("#controls").removeClass("center-controls");
		$(".steps").removeClass("center-steps");
		$("#video").removeClass("center-video");
		$(".control").css({"color":"#fff", "background":"#000"});
		$("#play").html("<i class='fas fa-play'></i>");
		vidIsPlaying = false;
	});

	myVideo.on("timeupdate", function(){
		currentTime = myVideo.currentTime();
		if(currentTime >= 183 && currentTime < 340){
			$(".vid-title").html("filming... a lot....");
			$(".countdown").html("2 days before the deadline");
		}else if (currentTime >= 340 && currentTime < 390){
			$(".vid-title").html("polishing up");
			$(".countdown").html("5 hours before the deadline");
		}else if(currentTime >= 390){
			myVideo.pause();
			$("#proj-button").fadeIn(1000);
		}
	});

	/*******************************/
	//Set some button event listeners
	/*******************************/

	$('#play').click(function(){
		//Trigger the video to play or pause
		if(vidIsPlaying){
			myVideo.pause();
		}else{
			myVideo.play();
		}
		vidIsPlaying = !vidIsPlaying;
	});


	$("#volume-up").click(function(){
		if(volume < 1){
			volume = volume + 0.1;
			myVideo.volume(volume);
			console.log("volume up");
		}
	});

	$("#volume-down").click(function(){
		if(volume > 0 ){
			volume = volume - 0.1;
			myVideo.volume(volume);
			console.log("volume down");
		}
	});
