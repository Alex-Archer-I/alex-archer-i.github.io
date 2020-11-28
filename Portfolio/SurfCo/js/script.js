function elementActive(base, active)
{
    $(base).addClass(active);
    $(base).siblings().removeClass(active);
};

function changeClass(elem, oldclass, newclass)
{
    elem.addClass(newclass);
    elem.removeClass(oldclass);
}

function upAndDown()
{
    for (i=0; i<$('.team_member:last').index(); i++)
    {
        if($('.team_member').eq(i).is('.up'))
        {
            changeClass($('.team_member').eq(i), 'up', 'down');
        }
        else
        {
            changeClass($('.team_member').eq(i), 'down', 'up');
        }
    }
}

function modalContent(Title, Text, ButtonText, Class)
{
    this.title = Title;
    this.text = Text;
    this.buttonText = ButtonText;
    this.class = Class;
}

let descrArray = []
descrArray[0] = "Easy to ride, care free surfing craft that's fun for everyone, paddles well, super fast down the line and great for any level of surfing depending on who rides it. The Donny Stoker, a rework on design from stokesys first ever pro model. A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression."
descrArray[1] = "Cool and fun"
descrArray[2] = "This board from dimension of cool surfers, sun and ocean."

let modalArray = []
modalArray[0] = new modalContent("Thanks for buying!", "Now you are cool surfer!", "Cool", ".buy");
modalArray[1] = new modalContent("Look at all this boards!", "Just use your imagination!", "Wow", ".all-boards");
modalArray[2] = new modalContent("It's just more of strange Latin text...", "You really whant to read it?", "Nope", ".read");
modalArray[3] = new modalContent("All posts", "Now buy board!", "Okay", ".all-posts");

$(document).ready(function()
{
    $('.board_box').click(function()
    {
        elementActive($(this), 'board_box_active');
        elementActive($('.board_big').eq($(this).index()), 'board_big_active');
    });

    $('.board_tab').click(function()
    {
        elementActive($(this), 'board_tab_active');
        let index = $('<span>' + descrArray[$(this).index()] + '</span>');
        $('.board_text').empty().append(index);
    });

    $('.modal_show').click(function()
    {
        $('.overlay').fadeIn();
        let thisButton = $(this);
        for (i=0; i<4; i++)
        {
            if(thisButton.is(modalArray[i].class))
            {
                $(".modal_title").text(modalArray[i].title);
                $(".modal_text").text(modalArray[i].text);
                $(".modal_close").text(modalArray[i].buttonText);
                break;
            }
        }
    })

    $(".modal_close").click(function()
    {
        $('.overlay').fadeOut();
    });

    $('.right_arrow').click(function()
    {
        if($('.team_member:first').is('.hide_left'))
        {
            let activeArray = [$('.active_one'), $('.active_two'), $('.active_three'), $('.active_four')];
            let index = $('.active_one').index();

            changeClass($('.team_member').eq(index - 1), 'hide_left', 'active_one');
            changeClass(activeArray[0], 'active_one', 'active_two');
            changeClass(activeArray[1], 'active_two', 'active_three');
            changeClass(activeArray[2], 'active_three', 'active_four');
            changeClass(activeArray[3], 'active_four', 'hide_right');

            upAndDown();


        }

        if(!$('.team_member:last').is('.mobile-show'))
        {
            let mobileShow = $(".mobile-show");
            mobileShow.removeClass("mobile-show");
            $(".team_member").eq(mobileShow.index()+1).addClass("mobile-show");
        }
    });

    $('.left_arrow').click(function()
    {
        if($('.team_member:last').is('.hide_right'))
        {
            let activeArray = [$('.active_one'), $('.active_two'), $('.active_three'), $('.active_four')];
            let index = $('.active_four').index();

            changeClass($('.team_member').eq(index + 1), 'hide_right', 'active_four');
            changeClass(activeArray[0], 'active_one', 'hide_left');
            changeClass(activeArray[1], 'active_two', 'active_one');
            changeClass(activeArray[2], 'active_three', 'active_two');
            changeClass(activeArray[3], 'active_four', 'active_three');

            upAndDown();
        }

        if(!$('.team_member:first').is('.mobile-show'))
        {
            let mobileShow = $(".mobile-show");
            mobileShow.removeClass("mobile-show");
            $(".team_member").eq(mobileShow.index()-1).addClass("mobile-show");
        }
    });

    $(".footer_subscribe").submit(function(event)
    {
        event.preventDefault();
        $('.overlay').fadeIn();
        let email = $(".footer_input").val();
        $(".modal_title").text(email);
        $(".modal_text").text("You have cool mail!");
        $(".modal_close").text("I know!");

    });

    $(".mobile_menu_open").click(function()
    {
        changeClass($(".mobile_menu"), "mobile_menu_unactive", "mobile_menu_active");
    });

    $(".mobile_menu_close").click(function()
    {
        changeClass($(".mobile_menu"), "mobile_menu_active", "mobile_menu_unactive");
    });
});