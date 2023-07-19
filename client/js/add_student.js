$(document).ready(function () {
    // var username = document.getElementById("name_id");
    // var password = document.getElementById("pswd_id");
    // username.value = ''
    // console.log("username - ", username.value)
    // console.log("password - ", password)


// const translate = require('google-translate-api');
});
function add_studen() {
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addstudent', // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "sdt_username": $("#sdt_username_id").val(),
            "sdt_password": $("#sdt_pswd_id").val(),
            "sdt_firstName": $("#firstName_sdt_id").val(),
            "sdt_lastName": $("#lastName_sdt_id").val(),
            "sdt_ID": $("#id_sdt").val(),
            "sdt_email":$("#email_sdt_id").val()
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