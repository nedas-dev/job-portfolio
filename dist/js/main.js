$(document).ready(function () {
    $('.nav-hamburger').click(function () {
        if ($('.menu-content').css('display') == 'none') {
            $('.menu-content').css('display', 'block');
            $('.line1').css('transform', 'translate(0px, 11px) rotate(45deg)');
            $('.line2').css('display', 'none');
            $('.line3').css('transform', 'translate(0px, -4px) rotate(-45deg)');
        } else {
            $('.menu-content').css('display', 'none');
            $('.line1').css('transform', 'rotate(0deg) translate(0px, 0px)');
            $('.line2').css('display', 'block');
            $('.line3').css('transform', 'translate(0px, 0px) rotate(0deg)');
        };
    });
});