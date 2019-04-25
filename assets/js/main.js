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

// add infut fields
function addInput() {
    var i = 1;
    if ($(".exampler").length < 4) my_div.innerHTML = my_div.innerHTML + "<input type='text' class='form-control exampler' placeholder='შეიყვანეთ ფრაგმენტი ტექსტიდან' name='mytext'+ i>"
}