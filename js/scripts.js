$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000});
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});
$('#times').click(function() {
    $('#loginModal').modal('toggle');
});
$('#times2').click(function() {
    $('#reserveModal').modal('toggle');
});
$('#cancelButton').click(function() {
    $('#loginModal').modal('toggle');
});
$('#cancelButton2').click(function() {
    $('#reserveModal').modal('toggle');
});
$('#reserve-table-button').click(function() {
    $('#reserveModal').modal('toggle');
});
$('#loginButton').click(function() {
    $('#loginModal').modal('toggle');
});