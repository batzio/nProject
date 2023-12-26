// const { data } = require("jquery")

function add_studen() {
    // var id_alfa_file = document.getElementById('id_alfa_file_hidden')
    // console.log('upload.file.path', id_alfa_file)
    alert('in add_student')
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addstudent', // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "username": $("#sdt_username_id").val(),
            "password": $("#sdt_pswd_id").val(),
            "sdt_firstName": $("#firstName_sdt_id").val(),
            "sdt_lastName": $("#lastName_sdt_id").val(),
            "sdt_ID": $("#id_sdt").val(),
            "sdt_email": $("#email_sdt_id").val(),
            "id_pjt": "",
            "grades": [
                {
                    "alfa_rpt_grd": 0,
                    "final_rpt_grd": 0,
                    "final_grd_pjt": 0
                },
            ]
            // "alfa_rpt_grd": 0,
            // // "beta_grd": 0,
            // "final_rpt_grd": 0,
            // "final_grd_pjt": 0
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            // alert('in seccess of add student')
            location.href = "/assigAndsubDats"
        },
        error: function (jqXhr, textStatus, errorThrown) {
            // alert('in error of add student')
            // console.log('tring')
            console.log(errorThrown);
        }
    })
    // alert('in add_student after ajax call')
}

// function handleFileUpload(event) {
//     const fileInput = event.target;
//     const uploadedFile = fileInput.files[0]; // Get the first uploaded file
//     return uploadedFile;
// }