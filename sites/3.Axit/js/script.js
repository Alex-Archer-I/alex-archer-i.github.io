$(document).ready(function()
{
    $('.download').click(function()
    {
        $('.overlay').fadeIn();
        $('.modal').fadeIn();
        $('.progress_fill').animate({
            width: '100%'
        }, 3000, function()
        {
            $('.modal_title').text('downloading complete!');
        });
    });

    $('.close').click(function()
    {
        $('.modal').fadeOut();
        $('.overlay').fadeOut(function()
        {
            $('.modal_title').text('downloading in progress');
            $('.progress_fill').css('width', '0%');
        });
    });

    $('.small_form').submit(function(event)
    {
        event.preventDefault();

        let request = {
            name: $('.small_form_name').val(),
            email: $('.small_form_email').val(),
            password: $('.small_form_password').val(),
        }

        $('.modal_subtitle').text('Thanks for the request');
        $('.overlay').fadeIn();
        $('.modal_message').fadeIn();
        $('.name_text').text(request.name);
        $('.email_text').text(request.email);
        $('.password_text').text(request.password);
        $('.modal_text').eq(3).css('display', 'none');
    });

    $('.big_form').submit(function(event)
    {
        event.preventDefault();

        let request = {
            name: $('.big_form_name').val(),
            email: $('.big_form_email').val(),
            password: $('.big_form_password').val(),
            message: $('.big_form_message').val(),
        }

        $('.modal_text').eq(3).css('display', 'block');
        $('.modal_subtitle').text('Thanks for your message');
        $('.overlay').fadeIn();
        $('.modal_message').fadeIn();
        $('.name_text').text(request.name);
        $('.email_text').text(request.email);
        $('.password_text').text(request.password);
        $('.message_text').text(request.message);
    });

    $('.close_message').click(function()
    {
        $('.overlay').fadeOut();
        $('.modal_message').fadeOut();
    });

    $('.tabs_tab').click(function()
    {
        $(this).addClass('tabs_tab_active');
        $(this).siblings().removeClass('tabs_tab_active');

        switch ($(this).index())
        {
            case 0:
                $('.tabs_main').css('align-items', 'start');
                break;
            case 1:
                $('.tabs_main').css('align-items', 'center');
                break;
            case 2:
                $('.tabs_main').css('align-items', 'flex-end');
                break;
        }
    })
});