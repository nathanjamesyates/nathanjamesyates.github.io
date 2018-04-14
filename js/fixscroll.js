var $nav = $(".nav"),
	navPos = $nav.position().top;
$(window).on("scroll", function() {
    if ($(window).scrollTop() > navPos)
        $nav.css
            ("position", "fixed").css
            ("width", "232").css;
    else
        $nav.css
            ("position", "fixed").css
            ("width", "288").css;
});
