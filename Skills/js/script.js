$(document).ready(function()
{
    $('.line').css('width', '100%');
    $('.timer').fadeOut(2000, function()
    {
        $('.elem').css('opacity', '1');
    })

    $('.contacts_link').click(function()
    {
        $('.contacts').css('top', '0');
    });

    $('.contacts_close').click(function()
    {
        $('.contacts').css('top', '-500px');
    });
});