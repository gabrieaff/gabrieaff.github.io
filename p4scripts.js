
$(".movie").show();
$(".control-buttons").show();
$(".countdown").show();
$(".steps").show();	
$(".about").hide();
$(".attempts").hide();

$("#work-button").click(function(){
	$(".movie").show();
	$(".about").hide();
	$(".attempts").hide();
	$(".control-buttons").show();
	$(".countdown").show();
	$(".steps").show();		
});

$("#team-button").click(function(){
	$(".movie").hide();
	$(".about").show();
	$(".attempts").hide();	
	$(".control-buttons").hide();
	$(".countdown").hide();
	$(".steps").hide();		
});

$("#proj-button").click(function(){
	$(".movie").hide();
	$(".about").hide();
	$(".attempts").show();
	$(".control-buttons").hide();	
	$(".countdown").hide();
	$(".steps").hide();		
});


	/*************************/
	//Initialize some variables
	/*************************/

	//Set the video link
	//Replace '&controls=0' to hide youtube player controls
	var theVideoLink = "https://www.youtube.com/raLP7DoZbxc?rel=0&controls=0";

	//Set the page element
	var theElement = "#video";

	//Create the Popcorn video object
	var myVideo = Popcorn.smart(theElement, theVideoLink);

	/*******************/
	//Trigger some events    
	/*******************/


	//Use 'cue' to make an event happen at a specific time in the video
	//In this case, the number 2 is the second at which the cue should happen
	//myVideo.cue(0,function(){
		//$('body').append('<div class="specialBox">FUNKY!!!!</div>');
	//});

	myVideo.cue(32, function(){
		$("body").append('<div class="steps">1. Accidental Procrastination</div>','<div class="countdown"><p>10 days before deadline</div>');
	});

	myVideo.cue(182, function(){
		$("body").append('<div class="steps">2. Panicked Working</div>','<div class="countdown"><p>2 days before deadline</div>');
	});

	myVideo.cue(330, function(){
		$("body").append('<div class="steps">3. Eventual Acceptance</div>','<div class="countdown"><p>1 day before deadline</div>');
	});

	myVideo.cue(379, function(){
		$("body").append('<div class="steps">3a. Cs Get Degrees</div>','<div class="countdown"><p>1 day before deadline</div>');
	});


	//"ON" EVENTS
	myVideo.on("play", function(){
		$("body").css({"background":"#000000"}) ;
		$(".title").hide();
		$(".control-buttons").show();
		$(".control-buttons").css({"background":"white"});
		$(".countdown").show();
		$(".steps").show();	
	});
	myVideo.on("pause", function(){
		$("body").css({"background":"#ffffff"}) ;
		$(".title").show();
		$(".countdown").hide();
		$(".steps").hide()
	});

	/*******************************/
	//Set some button event listeners
	/*******************************/

	$('#playButton').click(function(){
		//Trigger the video to play
		myVideo.play();
	});

	$('#pauseButton').click(function(){
		//Trigger the video to pause
		myVideo.pause();
	});
