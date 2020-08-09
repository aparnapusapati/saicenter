var slideIndex = 1;

$(document).ready(function(){
	if($(".bannerSlides").length){
		showSlides();
		showDivs(1);
	}
    if ($(window).width() < 500) {
        $(".navbar-collapse").removeClass('d-flex');
        $(".navbar-collapse").hide();
    }
    else{
    	$(".navbar-collapse").addClass('d-flex');
    }
});
$(window).resize(function resize(){
    if ($(window).width() < 500) {
        $(".navbar-collapse").removeClass('d-flex');
    }
    else{
    	$(".navbar-collapse").addClass('d-flex');
    }
});
function plusDivs(n) {
	var x = document.getElementsByClassName("bannerSlides");
	slideIndex += n;
	if (slideIndex > x.length) 
		slideIndex = 1;
	else if (slideIndex < 1) 
		slideIndex = x.length;
	
	showDivs(slideIndex);
}

function showDivs(n) {
  var i = 1;
  $(".bannerSlides").each(function(){
	  if(i==n){
		  $(this).css("display","block"); 
	  }
	  else{
		  $(this).css("display","none");
	  }
	  i++;
  });
  
}
var slideIndex1 = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
var slideIndex4 = 0;

function showBurgerMenu(){
	if($(".navbar-collapse").css('display') == 'none'){
		$(".navbar-collapse").css('display', 'flex');		
	}
	else{
		$(".navbar-collapse").css('display', 'none');
	}
	
}
function showSlides() {
  var i;
  var bannerSlides = document.getElementsByClassName("bannerSlides");
  for (i = 0; i < bannerSlides.length; i++) {
	  bannerSlides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > bannerSlides.length) {slideIndex = 1}
  bannerSlides[slideIndex-1].style.display = "block";
  
  if(jQuery(window).width() > 500)
  {
	  var slides1 = document.getElementsByClassName("gallery1");
	  for (i = 0; i < slides1.length; i++) {
		  slides1[i].style.display = "none";
	  }
	  slideIndex1++;
	  if (slideIndex1 > slides1.length) {slideIndex1 = 1}
	  slides1[slideIndex1-1].style.display = "block";
	  
	  var slides2 = document.getElementsByClassName("gallery2");
	  for (i = 0; i < slides2.length; i++) {
	    slides2[i].style.display = "none";
	  }
	  slideIndex2++;
	  if (slideIndex2 > slides2.length) {slideIndex2 = 1}
	  slides2[slideIndex2-1].style.display = "block";
  }
  
  if(jQuery(window).width() <= 500)
  {
	  var slides3 = document.getElementsByClassName("mobilegallery1");
	  for (i = 0; i < slides3.length; i++) {
		  slides3[i].style.display = "none";
	  }
	  slideIndex3++;
	  if (slideIndex3 > slides3.length) {slideIndex3 = 1}
	  slides3[slideIndex3-1].style.display = "block";
	  
	  var slides4 = document.getElementsByClassName("mobilegallery2");
	  for (i = 0; i < slides4.length; i++) {
	    slides4[i].style.display = "none";
	  }
	  slideIndex4++;
	  if (slideIndex4 > slides4.length) {slideIndex4 = 1}
	  slides4[slideIndex4-1].style.display = "block";
  }
  
 /* var slides3 = document.getElementsByClassName("gallery3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1}
  slides3[slideIndex3-1].style.display = "block";
  
  /*var slides4 = document.getElementsByClassName("gallery4");
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > slides4.length) {slideIndex4 = 1}
  slides4[slideIndex4-1].style.display = "block";
  */
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
