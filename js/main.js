$(window).on('scroll', function(e) {

	var pixelsToMove = $(window).scrollTop();
	console.log(pixelsToMove);
 

 	$('.hills').css('left', "-" + pixelsToMove + 'px');

 	//Superhero characters is rolling!!
 	$('.hero').css('transform', 'rotate('+ pixelsToMove + 'deg)');


});


$(window).on('resize', function(e) {

	var h = $(window).height();
	var w = $(window).width();

	var s = "The width is "+ w +" px wide";

	console.log(w + " * " + h)

});