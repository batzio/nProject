// $(document).ready(function () {
//     process.env["NODE_OPTIONS"] = "--enable-source-maps --trace-uncaught --trace-warnings --max-old-space-size=4096 --expose-gc --icu-data-dir=node_modules/full-icu";
//     require('dotenv').config();
//     process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// });

function add_mod(){
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addmoderator', // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "mod_username": $("#mod_username_id").val(),
            "mod_password": $("#mod_pswd_id").val(),
            "mod_firstName": $("#firstName_mod_id").val(),
            "mod_lastName": $("#lastName_mod_id").val(),
            "mod_ID": $("#id_mod").val(),
            "mod_email": $("#email_mod_id").val(),
            "mod_isCoordinator": $("#is_coordinator_id").val()
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            location.href = "/home";
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log('tring')

            console.log(errorThrown);
        }
    })
}