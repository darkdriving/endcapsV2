$(function() {
    console.log( "BAD JAVASCRIPT GOOOO!" );

    function endcapTrack() {
        var width = 0;

        $('.mt-endcap-track > div').each(function() {
                width += 240; // this needs to be calculated based on endcap width/# of endcap items
        });

        $('.mt-endcap-track').css({
            "width": width
        });
    }

    endcapTrack();


    $('.mt-endcap-next').click(function(){
        if($('.mt-endcap-track').hasClass('first-set')){

            $('.mt-endcap-track').css({
                "transform": "translate3d(-960px, 0px, 0px)"
            }).removeClass('first-set').addClass('second-set');

            $('.mt-endcap-prev').removeAttr('disabled');

        } else if ($('.mt-endcap-track').hasClass('second-set')){

            $('.mt-endcap-track').css({
                "transform": "translate3d(-1920px, 0px, 0px)"
            }).removeClass('second-set').addClass('third-set');

            $('.mt-endcap-next').attr('disabled', 'disabled');

        } else {

            return false;

        }
    });

    $('.mt-endcap-prev').click(function(){
        if($('.mt-endcap-track').hasClass('third-set')){

            $('.mt-endcap-track').css({
                "transform": "translate3d(-960px, 0px, 0px)"
            }).removeClass('third-set').addClass('second-set');

            $('.mt-endcap-next').removeAttr('disabled');

        } else if ($('.mt-endcap-track').hasClass('second-set')){

            $('.mt-endcap-track').css({
                "transform": "translate3d(0px, 0px, 0px)"
            }).removeClass('second-set').addClass('first-set');

            $('.mt-endcap-prev').attr('disabled', 'disabled');

        } else {

            return false;

        }
    });

});
