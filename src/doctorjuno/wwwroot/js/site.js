$(document).ready(function () {
    window.onscroll = function () {
        var speed = 3;
        document.body.style.backgroundPosition = (-window.pageYOffset / (speed)) + "px " + (-window.pageXOffset / speed) + "px";

        document.getElementById("mid_bg").style.backgroundPosition = (-window.pageYOffset / (2 * speed)) + "px " + (-window.pageXOffset / (2 * speed)) + "px";

        document.getElementById("near_bg").style.backgroundPosition = (-window.pageYOffset / (5 * speed)) + "px " + (-window.pageXOffset / (5 * speed)) + "px";
    }

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $("#contact_me").click(function () {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
    $(".hello-ajax").click(function () {
        $.ajax({
            type: 'GET',
            url: '@Url.Action("HelloAjax")',
            success: function (result) {
                $('#result1').html(result);
            }
        });
    });
    $(".button-collapse").sideNav();
});