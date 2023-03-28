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
            id_username: "Your osername must be at least 5 characters long",
            id_password: {
                minlength: "Your password must be at least 6 characters long"
            }
         }
    });


    /*
    submit function
    process the form
    */
    $('#id_login').submit(function (event) {
        if (!$("#id_login").valid()) return;
       
            $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url: '/login', // the url where we want to POST
                contentType: 'application/json',
                data: JSON.stringify({
                    "username": $("#id_username").val(),
                    "password": $("#id_password").val()
                }),
                processData: false,
                encode: true,
                success: function (data, textStatus, jQxhr) {
                    localStorage.setItem('username', data.username)
                    localStorage.setItem('password', data.password);
                    location.href = "/home";
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            })
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });
});