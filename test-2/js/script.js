$(document).ready(function() {
    $('.slider').slider({
        range: 'min',
        max: 255,
        value: 230,
        slide: getRGB   
    }
    );

    let key = 'background-color';
    let bgc = [230, 230, 230];
    let txc = [0, 0, 0];

    $('.toggle-bg').on('click', () => {
        if (key == 'color') {
            key = 'background-color';
            setValue(bgc);
            $('.toggle-bg').toggleClass('active');
            $('.toggle-tx').toggleClass('active');
        }
    });

    $('.toggle-tx').on('click', () => {
        if (key == 'background-color') {
            key = 'color';
            setValue(txc);
            $('.toggle-tx').toggleClass('active');
            $('.toggle-bg').toggleClass('active');
        }
    });

    function setValue(arr) {
        $('.slider-1').slider('value', arr[0]);
        $('.slider-2').slider('value', arr[1]);
        $('.slider-3').slider('value', arr[2]);
    }

    function getRGB() {
        if (key === 'background-color') {
            bgc[0] = $('.slider-1').slider('value');
            bgc[1] = $('.slider-2').slider('value');
            bgc[2] = $('.slider-3').slider('value');

            $('.color').css(`${key}`, `rgb(${bgc[0]}, ${bgc[1]}, ${bgc[2]})`);
        } else {
            txc[0] = $('.slider-1').slider('value');
            txc[1] = $('.slider-2').slider('value');
            txc[2] = $('.slider-3').slider('value');

            $('.color').css(`${key}`, `rgb(${txc[0]}, ${txc[1]}, ${txc[2]})`);
        }
    }

    getRGB();
});