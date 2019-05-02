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

    function mounted() {
        $('#select1').multipleSelect()
        $('#select2').multipleSelect()
        $('#select3').multipleSelect()
        $('#select4').multipleSelect()
        $('#select5').multipleSelect()
    }
    mounted();



    //Add Input Fields
    var max_fields = 5;
    var wrapper = $(".wrapper");
    var add_button = $(".add_fields");
    var x = 1;
    $(add_button).click(function (e) {
        e.preventDefault();

        if (x < max_fields) {
            x++;
            $(wrapper).append('<div class="addinput"><input class="form-control" type="text" name="input_array_name[]" placeholder="შეიყვანეთ ფრაგმენტი ტექსტიდან" /> <a href="javascript:void(0);" class="remove_field"><img src="assets/images/error.png"> </a></div>');
        }
        if (x === 5) {
            document.getElementById("InputHide").style.display = "none";
        }
    });
    $(wrapper).on("click", ".remove_field", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});


// modal
var modal = document.getElementById('simpleModal');
var modalBtn = document.querySelectorAll('.modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
for (i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', openModal);
}

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}



// scroll top button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topScrollFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


