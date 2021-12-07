





$(function(){
$('.navbar__toggleBtn').click(function(){
  $('.navbar__menu').slideToggle();
});
});

$(window).resize(function(){
  if(window.innerWidth>700){
    $('.navbar__menu').show();
    $('.navbar__toogleBtn').hide();
  }
});
$(window).resize(function(){
  if(window.innerWidth<700){
    $('.navbar__menu').hide();
}  
 
});