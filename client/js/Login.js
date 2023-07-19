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
    // alert('sub  ')


    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/student/' + password.value,
        contentType: 'application/json',
        success: function (result) {

            // alert('getPasswordSdt - ')
            console.log('getPasswordSdt - '+ JSON.stringify(result[0]))
            if (result[0].sdt_username == username.value && result[0].sdt_password == password.value) {
                localStorage.setItem("data", "student")
                window.location.href = "/assigAndsubDats"
                // alert('getPasswordSdt - ' + result[0].sdt_username)
            } // alert('getPasswordSdt - '+ username.value)
            else {
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

function add_mod() {
    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/moderator/' + password.value,
        contentType: 'application/json',
        success: function (result) {
            if (result[0].mod_username == username.value && result[0].mod_password == password.value) {
                localStorage.setItem("data", "moderator")
                window.location.href = "/assigAndsubDats"
            }
            else{
                alert('שם משתמש ו/או הסיסמה שגויים')
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function resetPassword() {

    window.location.href = '/password';
}
