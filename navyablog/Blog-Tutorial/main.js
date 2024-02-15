// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})


// Filter and toggle post box
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box").not("." + value).hide(1000);
            $(".post-box").filter("." + value).show("1000");
        }
        // Remove the line below to prevent scrolling to the top
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Toggle post box height
    $(".category").click(function () {
        var category = $(this).text().trim().toLowerCase();
        $(".post-box." + category).toggleClass('expanded');
        // Remove the line below to prevent scrolling to the top
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Prevent default behavior of anchor tags inside post-box
    $(".post-box a").click(function (event) {
        event.preventDefault();
    });

    // Add and remove active class for filter items
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});