jQuery(document).ready(function($){

    $('#menu').slicknav();

   
    $(".slicknav_nav a").on("click", function(){
        $(".slicknav_nav").addClass("slicknav_hidden");
    });
    $(".slicknav_nav a").on("click", function(){
        $(".slicknav_btn").addClass("slicknav_collapsed");
        $(".slicknav_btn").removeClass("slicknav_open");
    });
    $(".slicknav_nav a").on("click", function(){
        $("body").addClass("slk");
    });
 


});

