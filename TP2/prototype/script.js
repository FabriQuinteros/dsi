$(function () {
    $("#sidebar").load("sidebar.html", function() {
        var currentPath = window.location.pathname;
        var sidebarLinks = document.querySelectorAll(".sidebar a");

        sidebarLinks.forEach(function (link) {
            if (currentPath.includes(link.getAttribute("href"))) {
                link.classList.add("active");
            }
        });

        $(".config-toggle").click(function() {
            $(".submenu").slideToggle();
        });
    });
});
