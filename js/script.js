$(document).ready(function()
{
    $('.contacts_link').click(function()
    {
        $('.contacts').css('top', '0');
    });

    $('.contacts_close').click(function()
    {
        $('.contacts').css('top', '-500px');
    });
});