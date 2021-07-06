function Review(Name, Position, TextReview, Rating)
{
    this.name = Name;
    this.position = Position;
    this.textReview = TextReview;
    this.rating = Rating;
}

function OverlayText(Title, Text, ButtonText, ClassName)
{
    this.title = Title;
    this.text = Text;
    this.buttonText = ButtonText;
    this.clasName = ClassName;
}

let reviewArray = [];
reviewArray[0] = new Review('Helen Trent', 'Frontend designer', 'Zebras are African equines with distinctive black-and-white striped coats. There are three extant species: the Grévy zebra (Equus grevyi), plains zebra (E. quagga) and the mountain zebra (E. zebra). Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae.', 3);
reviewArray[1] = new Review('Max', 'Taxi Driver', 'This documentation is designed for people familiar with JavaScript programming and object-oriented programming concepts. You should also be familiar with Google Maps from a users point of view. There are many JavaScript tutorials available on the Web.', 3);
reviewArray[2] = new Review('Den', 'PR Manager', 'Great', 5);
reviewArray[3] = new Review('Ross Troy', 'Head Manager', 'In the crunchy, salty snacks category, popcorn is definitely one of the healthier options. That is, if you make popcorn on the stove with a reasonable amount of high-quality oil and don’t douse it in butter or caramel afterward.', 3);
reviewArray[4] = new Review('Mary Sue', "CEO of everything", "OMG This app almost so cool as I am", 5);
reviewArray[5] = new Review('Wayne', 'Student', 'Kinda Cool, but... dunno...', 4);
reviewArray[6] = new Review('Ulrick Ulrickson', 'Viking', 'I use this app for the name of Odin! But it is not so good for the name of Thor...', 4);
reviewArray[7] = new Review('Zoltan Nemeth', 'CEO of Pixler Lab', 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.', 5);

let overlayArray = [];
overlayArray[0] = new OverlayText('This is the start of free trial!', 'Your life will never be the same!', 'Great!', '.try');
overlayArray[1] = new OverlayText('Giraffes only sleep around 20 minutes or less per day', 'Now you have learned more!', 'Wonderfull!', '.learning');
overlayArray[2] = new OverlayText('Nobody can see all', 'So sad', 'Okay...', '.see');
overlayArray[3] = new OverlayText('This is the start of free trial!', 'Prepare for great month!', 'Yeah!', '.month_free');
overlayArray[4] = new OverlayText('This is the start of free trial!', 'Prepare for great year!', 'Yeah!', '.year_free');
overlayArray[5] = new OverlayText('Use this app like a pro!', 'But only for a month', 'Cool!', '.month_pro');
overlayArray[6] = new OverlayText('Use this app like a pro!', 'For the whole year!', 'Cool!', '.year_pro');

function starRating(rate)
{
    $('.icon-star-full').css('color','#000000');
    for (i=0; i<rate; i++)
    {
        $('.icon-star-full').eq(i).css('color','#ffcc00');
    }
}


$(document).ready(function()
{
    $('.prices_slider_button').click(function()
    {
        if ($(this).is('.monthly'))
        {
            $(this).toggleClass('monthly');
            $(this).text('Annually');
            $(this).css('transform', 'translateX(140px)');
            $('.price_date').text('year');
            $('.price_year').text('$1099');
            $('.month_free').addClass('year_free').removeClass('month_free');
            $('.month_pro').addClass('year_pro').removeClass('month_pro');
        }
        else
        {
            $(this).toggleClass('monthly');
            $(this).text('Monthly');
            $(this).css('transform', 'translateX(0)');
            $('.price_date').text('month');
            $('.price_year').text('$99');
            $('.year_free').addClass('month_free').removeClass('year_free');
            $('.year_pro').addClass('month_pro').removeClass('year_pro');
        }
    });

    $('.review_ava').click(function()
    {
        if (!$(this).is('.review_ava_active'))
        {
            $(this).addClass('review_ava_active');
            $(this).siblings().removeClass('review_ava_active');
            $('.review_foto').eq($(this).index()).addClass('review_foto_active');
            $('.review_foto').eq($(this).index()).siblings().removeClass('review_foto_active');
        }

        let a = reviewArray[$(this).index()];
        $('.review_name > .subtitle').text(a.name);
        $('.review_name > .text').text(a.position);
        $('.review_text').text(a.textReview);
        starRating(a.rating);
    });

    $('.review_arrow_right').click(function()
    {
        let activeReview = $('.review_ava_active').index();
        $('.review_ava_active').removeClass('review_ava_active');
        if (activeReview != 7)
        {
            $('.review_ava').eq(activeReview + 1).addClass('review_ava_active');
            let a = reviewArray[$('.review_ava_active').index()];
            $('.review_name > .subtitle').text(a.name);
            $('.review_name > .text').text(a.position);
            $('.review_text').text(a.textReview);
            starRating(a.rating);
            $('.review_foto').eq($('.review_ava_active').index()).addClass('review_foto_active');
            $('.review_foto').eq($('.review_ava_active').index()).siblings().removeClass('review_foto_active');
        }
        else
        {
            $('.review_ava').eq(0).addClass('review_ava_active');
            let a = reviewArray[$('.review_ava_active').index()];
            $('.review_name > .subtitle').text(a.name);
            $('.review_name > .text').text(a.position);
            $('.review_text').text(a.textReview);
            starRating(a.rating);
            $('.review_foto').eq($('.review_ava_active').index()).addClass('review_foto_active');
            $('.review_foto').eq($('.review_ava_active').index()).siblings().removeClass('review_foto_active');
        }
    })

    $('.review_arrow_left').click(function()
    {
        let activeReview = $('.review_ava_active').index();
        $('.review_ava_active').removeClass('review_ava_active');
        if (activeReview != 0)
        {
            $('.review_ava').eq(activeReview - 1).addClass('review_ava_active');
            let a = reviewArray[$('.review_ava_active').index()];
            $('.review_name > .subtitle').text(a.name);
            $('.review_name > .text').text(a.position);
            $('.review_text').text(a.textReview);
            starRating(a.rating);
            $('.review_foto').eq($('.review_ava_active').index()).addClass('review_foto_active');
            $('.review_foto').eq($('.review_ava_active').index()).siblings().removeClass('review_foto_active');
        }
        else
        {
            $('.review_ava').eq(7).addClass('review_ava_active');
            let a = reviewArray[$('.review_ava_active').index()];
            $('.review_name > .subtitle').text(a.name);
            $('.review_name > .text').text(a.position);
            $('.review_text').text(a.textReview);
            starRating(a.rating);
            $('.review_foto').eq($('.review_ava_active').index()).addClass('review_foto_active');
            $('.review_foto').eq($('.review_ava_active').index()).siblings().removeClass('review_foto_active');
        }
    })

    $('.faq_icon').click(function()
    {
        if($(this).is('.open'))
        {
            $(this).css('transform', 'rotate(0)');
        }
        else
        {
            $(this).css('transform', 'rotate(45deg)');
        }

        $(this).closest('.faq_question').next('.faq_answer').slideToggle('slow');
        $(this).toggleClass('open');
    });

    $('.button_overlay').click(function()
    {
        $('.overlay').fadeIn('slow');

        for (i=0; i<overlayArray.length; i++)
        {
            if($(this).is(overlayArray[i].clasName))
            {
                $('.modal > .subtitle').text(overlayArray[i].title);
                $('.modal > .text').text(overlayArray[i].text);
                $('.modal > .button').text(overlayArray[i].buttonText);
                break;
            }
        }
    });

    $('.overlay_close').click(function()
    {
        $('.overlay').fadeOut('slow');
    });

    $('.menu_open').click(function()
    {
        $('.menu_mobile').fadeIn('slow');
    });

    $('.menu_mobile_close').click(function()
    {
        $('.menu_mobile').fadeOut('slow');
    });
});