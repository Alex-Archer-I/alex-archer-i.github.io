function commentData(Text, Name)
{
    this.text = Text;
    this.name = Name;
}

function displayComment(textClass, nameClass, obj)
{
    $(textClass).text(obj.text);
    $(nameClass).text(obj.name);
}

function avaChange(number)
{
    $('.comment_second_img').eq(number).addClass('comment_second_img_active');
    $('.comment_second_img').eq(number).siblings().removeClass('comment_second_img_active');
    $('.comment_second_mobile').eq(number).addClass('comment_second_mobile_active');
    $('.comment_second_mobile').eq(number).siblings().removeClass('comment_second_mobile_active');
}

let firstCommentArray = [];
firstCommentArray[0] = new commentData('“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”', 'Jon Doe');
firstCommentArray[1] = new commentData('“Sea otters hold hands when they sleep so they don’t drift away from each other.This is a method mostly used by a mother and her pup to prevent them from separating.”', 'Don Joe');
firstCommentArray[2] = new commentData('“The first Starbucks was opened in Pike Place Market, Seattle, in 1971.”', 'Mary j.');
firstCommentArray[3] = new commentData('“Fruit is meant to be a good part of a balanced diet, so even if you do end up spending a few bucks more on your favorite fruit, at least it’s for a worthy cause.”', 'Trent Ray');

let secondCommentArray = [];
secondCommentArray[0] = new commentData('“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”', 'Joshua Earle');
secondCommentArray[1] = new commentData('"On a clear night, you can see into the depths of the universe, and this sometimes spurs on some deep thoughts."', 'The one cat');
secondCommentArray[2] = new commentData('"New words, such as slang and abbreviations are added to the dictionary once they start to appear across a substantial amount of sources and are regularly spoken."', 'Just a Cat');
secondCommentArray[3] = new commentData('"We always see the same side of the Moon, no matter where we stand on Earth.This is because the Moon rotates on its axis at the same rate that it rotates the Earth."', 'Another Cat');

$(document).ready(function()
{
    let firstCommentIndex = 0;
    let secondCommentIndex = 0;

    $('.header_learn').click(function()
    {
        $('.learn_window').fadeIn();
        $('.learn_subtitle').text('An adult koala eats about 1/2 - 1 kilogram of leaves each night.');
        $('.learn_text').text('You have learned something new!');
    });

    $('.footer_form').submit(function(event)
    {
        event.preventDefault();
        $('.learn_window').fadeIn();
        $('.learn_subtitle').text($('.email_input').val());
        $('.learn_text').text('Thans for the subscribing!');
    });

    $('.learn_close').click(function()
    {
        $('.learn_window').fadeOut();
    });

    $('.first_comment_arrowR').click(function()
    {
        if(firstCommentIndex < 3)
        {
            firstCommentIndex++;
            displayComment('.first_comment_text', '.first_comment_name', firstCommentArray[firstCommentIndex]);
        }
    });

    $('.first_comment_arrowL').click(function()
    {
        if(firstCommentIndex > 0)
        {
            firstCommentIndex -= 1;
            displayComment('.first_comment_text', '.first_comment_name', firstCommentArray[firstCommentIndex]);
        }
    });

    $('.second_comment_arrowR').click(function()
    {
        if(secondCommentIndex < 3)
        {
            secondCommentIndex++;
            displayComment('.second_comment_text', '.second_comment_name', secondCommentArray[secondCommentIndex]);
            avaChange(secondCommentIndex);
        }
    });

    $('.second_comment_arrowL').click(function()
    {
        if(secondCommentIndex > 0)
        {
            secondCommentIndex -= 1;
            displayComment('.second_comment_text', '.second_comment_name', secondCommentArray[secondCommentIndex]);
            avaChange(secondCommentIndex);
        }
    });

    $('.do_arrow').click(function()
    {
        if($(this).is('.open'))
        {
            $(this).css('transform', 'rotate(0)');
        }
        else
        {
            $(this).css('transform', 'rotate(180deg)');
        }

        $(this).closest('.do_sector').next('.do_explain').slideToggle('slow');
        $(this).toggleClass('open');
    });
});