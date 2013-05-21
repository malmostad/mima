/*
+++++++++++++++++++++++++++++++++++++++++
-------------------------------------------------------------------------
SOLARIS -
A  somewhat correct Teeny Tiny Solar System Scale Model
By: Jakob Ebbinger
+++++++++++++++++++++++++++++++++++++++++
-------------------------------------------------------------------------
*/
/*
::::::::::::::::::Display planet names when mouseover on the sun::::::::::
*/
$(document).ready(function () {
        $('.name').css('display', 'none');
		$('.star_name').css('display', 'none');
});
$(document).ready(function () {
    $('#sun').mouseover(function () {
        $('.name').css('display', 'block');
		$('.star_name').css('display', 'block');
    });
    $('.sun').mouseleave(function () {
        $('.name').css('display', 'none');
		$('.star_name').css('display', 'none');
    });
});
/*
::::::::::Display planet names when click on the sun <smartphones/tablets>::::::::::
*/
$(document).ready(function () {
    $('#galaxy').click(function () {
        var id = 0;
        switch (id) {
        case '0':
            $('.name').css('display', 'block');
            $('.star_name').css('display', 'block');
            id = 1;
            break;
        case '1':
            $('.name').css('display', 'none');
            $('.star_name').css('display', 'none');
            id = 0
            break;
        }
    });
});
/*
::::::::::???????????????  ;-D   ???????????????????????::::::::::
*/
$(document).ready(function () {
    if (window.addEventListener) {
        var active = 0;
        var keys = [],
            konami = "38,38,40,40,37,39,37,39,66,65";
        window.addEventListener("keydown", function (e) {
            keys.push(e.keyCode);
            if (keys.toString().indexOf(konami) >= 0) {
                $('.x').css('display', 'block');
                keys = [];
            };
        }, true);
    };
});