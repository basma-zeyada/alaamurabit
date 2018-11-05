$(window).load(function() {
    $("#preloader").fadeOut("slow", function() {
        $(this).remove();
        // new Typed("#home-icon", {
        //     strings: ["", "ALAA MURABIT"],
        //     typeSpeed: 50,
        //     backSpeed: 40
        // })
    })
})

$(document).ready(function(e) {
   $('.lazy').Lazy({
        scrollDirection: 'vertical',
        effect: 'show',
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        },
        onFinishedAll: function() {
            if( !this.config("autoDestroy") )
                this.destroy();
        }
    });
   $('.carousel').bcSwipe({ threshold: 50 });
  $("#featuredIcons").slick({
      infinite: !0,
      speed: 300,
      arrows: !1,
      slidesToShow: 4,
      responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              infinite: !0
          }
      }, {
          breakpoint: 600,
          settings: {
              slidesToShow: 2
          }
      }, {
          breakpoint: 480,
          settings: {
              slidesToShow: 1
          }
      }]
  })
});