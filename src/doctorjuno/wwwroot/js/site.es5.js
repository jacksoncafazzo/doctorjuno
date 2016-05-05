"use strict";

$(document).ready(function () {
    window.onscroll = function () {
        var speed = 3;
        document.body.style.backgroundPosition = -window.pageYOffset / speed + "px " + -window.pageXOffset / speed + "px";

        document.getElementById("mid_bg").style.backgroundPosition = -window.pageYOffset / (2 * speed) + "px " + -window.pageXOffset / (2 * speed) + "px";

        document.getElementById("near_bg").style.backgroundPosition = -window.pageYOffset / (5 * speed) + "px " + -window.pageXOffset / (5 * speed) + "px";
    };
    $("#contact_me").click(function () {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    $("#back_home").click(function () {
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    });
    $(".hello-ajax").click(function () {
        $.ajax({
            type: 'GET',
            url: '/Home/HelloAjax',
            success: function success(result) {
                $('#result1').html(result);
            }
        });
    });
    $('#goto_using').click(function () {
        document.getElementById("using_params").scrollIntoView({ behavior: "smooth" });
    });
    $('#goto_hello').click(function () {
        document.getElementById("hello_ajax").scrollIntoView({ behavior: "smooth" });
    });
    $('#goto_json_display').click(function () {
        document.getElementById("json_display").scrollIntoView({ behavior: "smooth" });
    });
    $(".sum").click(function () {
        $.ajax({
            type: 'GET',
            data: { firstNumber: 1, secondNumber: 2 },
            url: '/Home/Sum',
            success: function success(result) {
                $('#result2').html(result);
            }
        });
    });

    $('.display-object').click(function () {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            url: '/Home/DisplayObject',
            success: function success(result) {
                var resultString = 'Id: ' + result.Id + '<br>City: ' + result.City + '<br>Country: ' + result.Country;
                $('#result3').html(resultString);
            }
        });
    });
    $(".button-collapse").sideNav();
    $('.display-view').click(function () {
        $.ajax({
            type: 'GET',
            dataType: 'html',
            url: '/Home/DisplayViewWithAjax',
            success: function success(result) {
                $('#result4').html(result);
            }
        });
    });
});

