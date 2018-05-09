$(".overlay").css("visibilty","hidden");
$(".header-nav").css("visibilty", "hidden");

$("#cast-button").click(function(){
	console.log("You clicked the cast button!");
	$(".button-container").hide();
	$(".header-container").hide();
	$(".header-nav").show();
	$("#cast-text").css("visibility", "visible");
	$(".header-nav").css("visibility", "visible");
});

$("#bts-button").click(function(){
	console.log("You clicked the bts button!");
	$(".button-container").hide();
	$(".header-container").hide();
	$("#bts-text").css("visibility", "visible");
	$(".header-nav").css("visibility", "visible");

});

$("#script-button").click(function(){
	console.log("You clicked the script button!");
	$(".button-container").hide();
	$(".header-container").hide();
	$("#script-text").css("visibility", "visible");
	$(".header-nav").css("visibility", "visible");

});

$("#play-button").click(function(){
	console.log("Here's the video!");
	$(".button-container").hide();
	$(".header-container").hide();
	$("#video-text").css("visibility", "visible");
	$(".header-nav").css("visibility", "visible");

});