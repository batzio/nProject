// function showPassword() {
//     var x = document.getElementById("sdt_pswd_id");
//     if (x.type === "password") {
//       x.type = "text";
//     } else {
//       x.type = "password";
//     }
//   }

// const upload = require("../../server/routes/upload");

function add_studen() {
    // var username = document.getElementById('sdt_username_id').value
    // var password = document.getElementById('sdt_pswd_id').value

    // $.ajax({
    //     type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
    //     url: '/students',
    //     success: function (result) {
    //         //adding all the options
    //         // projects_name = document.getElementById("projects_name")
    //         // index = 0;
    //         $.each(result, function (index, value) {
    //             if(result[0].username == username && result[0].password == password){
    //                 alert('יש לשנות סיסמה')
    //             }
    //             // console.log('value - ' , value)
    //             // console.log('resulr[0] - ', result[0])
    //             // console.log('index - ', index)
    //             // alert('wait')
    //         });
    //     },
    //     error: function (jqXhr, textStatus, errorThrown) {
    //         console.log(errorThrown);
    //     }
    // });
    // console.log('add_student - alfa_rpt -' + document.getElementById('id_alfa_file_hidden').value)
    // alert ('add_student')
    // document.getElementById('id_alfa_file').addEventListener('change', handleFileUpload)
    // console.log('check - ' + handleFileUpload);
    alert('check')

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
            "alfa_rpt_exm": upload.file.path,//$("#id_alfa_file").val(),
            "alfa_grd": 0,
            "beta_grd": 0,
            "finall_rpt_grd": 0,
            "finall_grd": 0
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            alert('in seccess of add student')
            location.href = "/assigAndsubDats"
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log('tring')

            console.log(errorThrown);
        }
    })
}

function handleFileUpload(event) {
    const fileInput = event.target;
    const uploadedFile = fileInput.files[0]; // Get the first uploaded file
    return uploadedFile;
    // if (uploadedFile) {
    //     console.log('Uploaded file name:', uploadedFile.name);
     //   // return 
    //     // You can perform further actions with the uploaded file here,
    //     // such as reading its content using the FileReader API.
    // }
}