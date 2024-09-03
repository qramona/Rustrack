$(document).ready(function () {

        $("#filtrationSettings").click(function () {
            $(".modal_menu").css('width','100dvw');
            $('body').css('overflow','hidden');
            $('.modal_menu .close').css('display','flex');
        });

        $('.modal_menu .close').click(function () {
            $(".modal_menu").css('width','0dvw');
            $('body').css('overflow','auto');
        });


    $(".clickableCatalog").click(function(){
        $(this.nextElementSibling).css('display','flex');
        $(!this.nextElementSibling).css('display','none');
    });


    let swiper = new Swiper(".mySwiper", {
        breakpoints:{
            0:{
                slidesPerView: 2,
            },
            576:{
                slidesPerView: 2,
            },
            992:{
                slidesPerView: 3,
            }
        },
        spaceBetween: 30,
        loop: true,
        drag:true,
        pagination: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //price-filtration
    $( function() {
        $( ".slider-range" ).slider({
            range: true,
            min: 0,
            max: 500000,
            values: [ 0, 500000 ],
            slide: function( event, ui ) {
                $( ".amount" ).val("От "+ ui.values[ 0 ] + "₽ "+ "До "+ ui.values[ 1 ] + "₽"  );
            }
        });
        $( ".amount" ).val("От " + $( ".slider-range" ).slider( "values", 0 ) + "₽ " +
            "До "  + $( ".slider-range" ).slider( "values", 1 ) + "₽");
    } );
});

