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

    var $appendixRoot = $("#appendix-2-root");
    if ($appendixRoot.length) {
        $appendixRoot.append(
            $("<h2>").addClass("appendix-heading").text("Appendix 2")
        );
        $appendixRoot.append(
            $("<p>").addClass("appendix-text").text(
                "This block was inserted with two separate jQuery append calls."
            )
        );
    }

    var $pageContent = $(".page-content");
    if ($pageContent.length) {
        $pageContent.hide().fadeIn(350);
    }
});
