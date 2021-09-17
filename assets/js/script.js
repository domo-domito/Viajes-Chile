$(function(){

    $('[data-toggle="tooltip"]').tooltip();

    $("a").click(function(event){
        if(this.hash !== "") {
          event.preventDefault();

          var gato = this.hash;

          $("html, body").animate({
            scrollTop: $(gato).offset().top
          }, "slow", function(){
            window.location.hash = gato;
          });
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 715){  
          $('nav').addClass("bg-info");
            } else {
                $('nav').removeClass("bg-info");
            }
        });

});