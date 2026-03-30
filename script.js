$(function () {
    var $exploreToggle = $("#explore-toggle");
    var $container = $("#container");

    if ($exploreToggle.length && $container.length) {
        $container.hide();
        $exploreToggle.on("click", function () {
            var $btn = $(this);
            if ($container.is(":visible")) {
                $container.slideUp(200);
                $btn.text("Do you want to explore?").attr("aria-expanded", "false");
            } else {
                $container.slideDown(200);
                $btn.text("Hide the list").attr("aria-expanded", "true");
            }
        });
    }

    $(".link").on("click", function () {
        var $link = $(this);
        $link.addClass("is-pressed");
        window.setTimeout(function () {
            $link.removeClass("is-pressed");
        }, 180);
    });

    var $boxRow = $("#float-box-row");
    if ($boxRow.length) {
        var nextBoxNum = 1;
        var $addBoxBtn = $("#add-box-btn");
        var $subtractBoxBtn = $("#subtract-box-btn");

        function syncSubtractState() {
            $subtractBoxBtn.prop("disabled", $boxRow.children().length === 0);
        }

        $addBoxBtn.on("click", function () {
            $boxRow.append($("<div>").text(String(nextBoxNum)));
            nextBoxNum += 1;
            syncSubtractState();
        });

        $subtractBoxBtn.on("click", function () {
            $boxRow.children().last().remove();
            syncSubtractState();
        });

        syncSubtractState();
    }

    var $bigHeart = $("#big-heart");
    if ($bigHeart.length) {
        $bigHeart.on("mouseenter", function () {
            var winH = $(window).height();
            var winW = $(window).width();
            var count = 20;
            var i;

            for (i = 0; i < count; i += 1) {
                (function (index) {
                    window.setTimeout(function () {
                        var isBlush = index % 2 === 1;
                        var $heart = $("<div>")
                            .addClass("floating-mini-heart")
                            .addClass(isBlush ? "is-blush" : "is-ruby");
                        var left = Math.random() * Math.max(winW - 48, 8);

                        $heart.css({
                            left: left,
                            top: -56,
                            opacity: 0
                        });
                        $("body").append($heart);

                        $heart.animate(
                            { opacity: 1 },
                            200,
                            "swing",
                            function () {
                                $heart.animate(
                                    { top: winH + 64 },
                                    1200 + Math.floor(Math.random() * 900),
                                    "linear",
                                    function () {
                                        $heart.animate(
                                            { opacity: 0 },
                                            220,
                                            function () {
                                                $heart.remove();
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    }, index * 35);
                })(i);
            }
        });
    }

    if ($("body").is(".page3-scroll")) {
        $(window).one("scroll", function () {
            window.alert("https://youtu.be/dQw4w9WgXcQ");
        });
    }

    var $page3Photo = $("#page3-photo");
    if ($page3Photo.length) {
        var page3StaticSrc = "../images/page3-static.png";
        var page3AnimatedSrc = "../images/page3-animated.png";
        $page3Photo.on("click", function () {
            var $img = $(this);
            if ($img.data("showingAnimated")) {
                $img.attr("src", page3StaticSrc).data("showingAnimated", false);
            } else {
                $img.attr("src", page3AnimatedSrc).data("showingAnimated", true);
            }
        });
    }

    var $pageContent = $(".page-content");
    if ($pageContent.length) {
        $pageContent.hide().fadeIn(350);
    }
});
