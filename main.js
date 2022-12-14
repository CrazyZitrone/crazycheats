$('.navbarTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#navbarList").toggleClass("show_list");
    $("#navbarList").fadeIn();

});
