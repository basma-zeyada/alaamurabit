$(window).load(function() {
    var e = $(".portfolio-filter li a");
    if ("undefined" != e) {
        var o = $(".portfolio-items");
        o.isotope({
            itemSelector: "li",
            layoutMode: "fitRows",
            filter: ".year18"
        }),
        e.on("click", function() {
            e.removeClass("active"),
            $(this).addClass("active");
            var t = $(this).attr("data-filter");
            return o.isotope({
                filter: t
            }),
            !1
        })
    }
}),
jQuery(function(e) {
    e(".tile-progress .tile-header").matchHeight();
    var t = jQuery(window).height()
      , a = t - jQuery("navbar-fixed-top").outerHeight() + 30;
    //jQuery("#main-slider").css("height", a + "px"),
    //jQuery("#single-page-slider").css("min-height", t / 3 + "px"),
    e(".gototop").click(function(o) {
        o.preventDefault(),
        e("html, body").animate({
            scrollTop: e("body").offset().top
        }, 500)
    }),
    jQuery(".prevbg").click(function(e) {
        e.preventDefault(),
        jQuery("body").data("backstretch").prev()
    }),
    jQuery(".nextbg").click(function(e) {
        e.preventDefault(),
        jQuery("body").data("backstretch").prev()
    })
}),
$(window).scroll(function() {
    var e = 0;
    $(document).scroll(function() {
        (e = $(this).scrollTop()) > 100 ? $(".navbar-fixed-top").removeClass("opaqued") : $(".navbar-fixed-top").addClass("opaqued"),
        $(".backstretch").css("top", e / -5 + "px"),
        $(".divider-section").css("background-position", e + "px  " + e + "px"),
        $(".currentInternContent").animate("top", -2 * e + "px")
    }),
    $(document).height() - $(window).height() - $(window).scrollTop() < 1e3 ? $("#footer-wrapper").css("z-index", "4") : $("#footer-wrapper").css("z-index", "1")
}),
jQuery(document).ready(function(e) {
    
    var o = e(window).height();
    scroll_pos = e(this).scrollTop(),
    scroll_pos > o ? e(".navbar-fixed-top").removeClass("opaqued") : e(".navbar-fixed-top").addClass("opaqued"),
    e(document).height() - e(window).height() - e(window).scrollTop() < 1e3 ? e("#footer-wrapper").css("z-index", "4") : e("#footer-wrapper").css("z-index", "1"),
    e("#backToPortfolioTop").on("click", function(o) {
        o.preventDefault();
        var t = e("#portfolio").offset().top;
        e("html,body").animate({
            scrollTop: t
        }, 1e3)
    }),
    e(".dropdown-menu > li > a").on("click", function() {
        e(".dropdown").removeClass("active open")
    })
}),
$(function() {
    $("a[href*=#]:not([href=#], .carousel-control)").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length)
                return $("html,body").animate({
                    scrollTop: e.offset().top
                }, 1e3),
                $(".navbar-collapse.collapse.in").slideUp(function(e) {
                    $(".navbar-collapse.collapse.in").removeClass("in").removeAttr("style")
                }),
                !1
        }
    })
}),
$(document).ready(function() {
    if ($('.carousel').length > 0) {
       $('.carousel').bcSwipe({ threshold: 50 });
    }
    $("#quote-carousel").carousel(),
    $(".carousel-control").on("click", function(e) {
        e.preventDefault()
    }),
    $("#scroller").carousel({
        pause: !0,
        interval: 4e3
    })
}),
jQuery(document).ready(function(e) {
    e(window).load(function() {
        e("#preloader").fadeOut("slow", function() {
            e(this).remove()
        })
    })
});
