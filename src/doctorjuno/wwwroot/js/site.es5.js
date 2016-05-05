"use strict";

$(document).ready(function () {
    window.onscroll = function () {
        var speed = 3;
        document.body.style.backgroundPosition = -window.pageYOffset / speed + "px " + -window.pageXOffset / speed + "px";

        document.getElementById("mid_bg").style.backgroundPosition = -window.pageYOffset / (2 * speed) + "px " + -window.pageXOffset / (2 * speed) + "px";

        document.getElementById("near_bg").style.backgroundPosition = -window.pageYOffset / (5 * speed) + "px " + -window.pageXOffset / (5 * speed) + "px";
    };
    $("#contact-me]").click(function () {
        $(parent).animate({ scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top }, { duration: 'slow', easing: 'swing' });
    });
    $("#contact-me").click(function () {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
    $(".hello-ajax").click(function () {
        $.ajax({
            type: 'GET',
            url: '@Url.Action("HelloAjax")',
            success: function success(result) {
                $('#result1').html(result);
            }
        });
    });
    $(".button-collapse").sideNav();
});

