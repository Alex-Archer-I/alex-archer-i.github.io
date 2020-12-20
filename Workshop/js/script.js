$(document).ready(function()
{
    $('.work').eq(0).addClass('one').removeClass('hide');
    $('.work').eq(1).addClass('two').removeClass('hide');
    $('.work').eq(2).addClass('three').removeClass('hide');
    $('.work').eq(3).addClass('four').removeClass('hide');

    $('.timer').fadeOut(1000, function()
    {
        $('.textblock').fadeIn(1000);
    });

    $('.contacts_link').click(function()
    {
        $('.contacts').css('top', '0');
    });

    $('.contacts_close').click(function()
    {
        $('.contacts').css('top', '-500px');
    });
});