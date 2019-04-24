$(document).ready(function () {
    $('nav .toggle').click(function () {
        $('nav .toggle').toggleClass('nav-active')
    });
    $('.toggle').click(function () {
        $('.menu_list').toggleClass('active');
    });
    // end burger script




    $(".active_tab").click(function () {
        $(this).addClass("active_class");
        $(".active_tab").not(this).removeClass("active_class");
    })
    //  end tab style

});