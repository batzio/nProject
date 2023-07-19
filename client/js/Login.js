$(document).ready(function () {
    $("form[name='keness_details']").validate({
        // Specify validation rules
        rules: {
            "id_username": {
                required: true
            },
            "id_password": {
                required: true
            }
        },
        // Specify validation error messages
        messages: {
            id_username: "Your username must be at least 5 characters long",
            id_password: {
                minlength: "Your password must be at least 6 characters long"
            }
        }
    });
});

function sub() {
    var username = document.getElementById("id_username")
    var password = document.getElementById("id_password")

    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/student/' + password.value,
        contentType: 'application/json',
        success: function (result) {
            if (result[0].name == username.value && result[0].password == password.value) {
                localStorage.setItem("data", "student");
                window.location.href = "/assigAndsubDats";

            }
            else{
                add_mod();
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });

    // $.ajax({
    //     type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
    //     url: '/moderator/' + password.value,
    //     contentType: 'application/json',
    //     success: function (result) {
    //         if (result[0].name == username.value && result[0].password == password.value) {
    //             localStorage.setItem("data", "moderator");
    //             window.location.href = "/assigAndsubDats";

    //         }
    //     },
    //     error: function (jqXhr, textStatus, errorThrown) {
    //         console.log(errorThrown);
    //     }
    // });
}

function add_mod(){
     $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/moderator/' + password.value,
        contentType: 'application/json',
        success: function (result) {
            if (result[0].name == username.value && result[0].password == password.value) {
                localStorage.setItem("data", "moderator");
                window.location.href = "/assigAndsubDats";

            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}
function resetPassword(){

    window.location.href = '/password';
}
