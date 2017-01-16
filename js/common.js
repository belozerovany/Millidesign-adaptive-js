$(document).ready(function() {
  var $container = $(".masonry-container");
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: ".item",
            itemSelector: ".item"
        });
    });  

    $(".item").imagefill();   

    jQuery('.item').hover(
        function(){
            $(this).find(".cover-portfolio").fadeIn();
        },
        function(){
            $(this).find(".cover-portfolio").fadeOut();
        }
    );
    $('.sl').slick({
        prevArrow:'.slider .prev',
        nextArrow:'.slider .next',
    });

    $(".header-form").click( function(){
        $('.pop-outer').fadeIn('slow');
    });
    $(".close").click( function(){
        $('.pop-outer').fadeOut('slow');
    });
});

