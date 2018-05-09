var sound1 = new Howl({
  src: ['cooking.mp3'],
});

var sound2 = new Howl({
  src: ['serving.mp3']
});

var sound3 = new Howl({
  src: ['paying.mp3']
});

var sound4 = new Howl({
  src: ['eating.mp3']
});

$("#div1").click(function () {
	sound1.play();
});

sound1.on('end', function(){
  $("#div2").show();
});

$("#div2").click(function () {
	sound2.play();
});

sound2.on('end', function(){
  $("#div3").show();
});

$("#div3").click(function () {
	sound3.play();
});

sound3.on('end', function(){
  $("#div4").show();
});


$("#div4").click(function () {
	sound4.play();
});

