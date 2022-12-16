/* --Navbar-Click-menu-- */
$('.navbarTrigger').click(function () {
    $(this).toggleClass('active');
    console.log('click');
    $("#navbarList").toggleClass("show_list");
    $("#navbarList").fadeIn();

});
/* --Navbar-Scrollbar-- */
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('affix');
    } else {
        $('.navbar').removeClass('affix');
    }
});
