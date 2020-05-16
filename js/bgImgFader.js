$(document).ready(function () {
        
    var images = ["img/slider1.jpg",
                  "img/slider2.jpg",
                  "img/slider3.jpg",
                  "img/slider4.jpg"];
        
    var duration = 5000;
    var image = $("#fader");
        
    $(function () {
        var i = 0;
        image.css("background-image", "url(" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) i = 0;
            image.parent().css("background-image", "url(" + images[i] + ")");
            image.fadeOut(1500, function () {
                $(this).css("background-image", "url(" + images[i] + ")");
                $(this).fadeIn(1500);
            });
        }, duration);
    });
});