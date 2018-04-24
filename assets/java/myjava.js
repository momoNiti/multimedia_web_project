function scrolldown(main){
    $('html,body').animate({scrollTop: $("#main").offset().top},'slow');
}

function goBack(){
  	window.history.back();
}