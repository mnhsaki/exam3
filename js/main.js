
(function (a) {
    var f = a(window);
    a(document);
    var h = a("body"),
        n = "rtl" === a("html").attr("dir") ? !0 : !1,
        e = function (a, c) {
            return "undefined" === typeof a ? c : a
        };
    a(function () {
        a("[data-bg-img]").css("background-image", function () {
            return 'url("' + a(this).data("bg-img") + '")'
        }).addClass("bg--img").removeAttr("data-bg-img").attr("data-rjs", 2);
        a("img").attr("data-rjs", 2);
        retinajs();
        var d = a('[data-trigger="sticky"]');
        d.each(function () {
            d.sticky({
                zIndex: 999
            })
        });

        a(".owl-carousel").each(function () {
            var b = a(this);
            b.owlCarousel({
                rtl: n,
                items: e(b.data("owl-items"), 1),
                margin: e(b.data("owl-margin"), 0),
                loop: e(b.data("owl-loop"), !0),
                autoplay: e(b.data("owl-autoplay"), !0),
                smartSpeed: e(b.data("owl-speed"), 2500),
                autoplaySpeed: e(b.data("owl-speed"), 2500),
                mouseDrag: e(b.data("owl-drag"), !0),
                nav: e(b.data("owl-nav"), !1),
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                dots: e(b.data("owl-dots"), !1),
                responsive: e(b.data("owl-responsive"), {})
            })
        });
        a(".dropdown-menu").on("click", ".dropdown-toggle", function (b) {
            b.stopPropagation();
            b.preventDefault();
            a(this).parent(".dropdown").toggleClass("open").siblings().removeClass("open")
        });
        var p = a(".header--section");
        c = function () {
            p.next().css("padding-top", function (b, c) {
                var k = a(this),
                    d = k.data("padding-top");
                "undefined" === typeof d ? (k.data("padding-top", c), c = parseInt(c, 10) + p.outerHeight()) : c = d + p.outerHeight();
                return c
            })
        };
        c();
        f.on("resize", c);
        var q = a(".banner--section");
        c = function () {
            q.css("height", function (b, a) {
                b = f.outerHeight();
                a = parseInt(a, 10);
                return b > a ? b : a
            })
        };
        var v = a(".banner--item"),
            l = function () {
                v.css("padding-top", q.css("padding-top"));
                q.css("padding-top", 0)
            };
        c();
        f.on("resize", c);
        l();
        f.on("resize", l);
         a("#backToTop").on("click", "a", function (b) {
            b.preventDefault();
            a("html, body").animate({
                scrollTop: 0
            }, 1200)
        });
    });

})(jQuery);