$('.page-scroll').on('click', function (e) {
        var tujuan = $(this).attr('href');
        var elemenTujuan = $(tujuan);
        $('body,html').animate({
                scrollTop: elemenTujuan.offset().top - 50
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
});

$(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        // console.log(wScroll / 1000);
        $('.jumbotron img').css({
                'transform': 'translate(0px, ' + wScroll / 2.5 + '%)'
        });

        $('.jumbotron h1').css({
                'transform': 'translate(0px, ' + wScroll / 0.5 + '%)',
                'opacity': 1 - (wScroll / 500) * 2
        });

        $('.jumbotron p').css({
                'transform': 'translate(0px, ' + wScroll / 0.4 + '%)',
                'opacity': 1 - (wScroll / 500) * 2
        });
});
