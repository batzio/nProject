$(document).ready(function () {
    var username = document.getElementById('username_reset_pwd')
    var pwd_or_id = document.getElementById("pwd_or_ID")

    if (username.value != '' && pwd_or_id.value != '') {
        console.log('username - ', username)
        console.log('pwd_or_id - ', pwd_or_id)

        check_old_pwd_or_id(username, pwd_or_id)
    }

    // const headDivg = document.getElementById('headDivg');
    // headDivg.style.right = `${position}px`;
});

function check_old_pwd_or_id(username, pwd_or_id) {
    var is_sdt = false;
    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/student/' + pwd_or_id,
        contentType: 'application/json',
        success: function (result) {
            console.log('result - ', result[0])
            if (result[0].name == username.value && result[0].password == pwd_or_id) {
                is_sdt = true
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });


}

function submt() {
    // var id = localStorage.getItem('conference_id')
    // var id_lec = localStorage.getItem('id_lec')
    // $.ajax({
    //     type: 'PUT', // define the type of HTTP verb we want to use (POST for our form)
    //     url: '/addproject', // the url where we want to POST
    //     contentType: 'application/json',
    //     data: JSON.stringify({
    //         "name": $("#project_id").val(),
    //         "subject": $("#subject_id").val(),
    //         "details": $('#details_id').val(),
    //         "project_type": $('#project_type_id').val(),
    //         "status": $('#status_id').val(),
    //         "offer": $('#offer_id').val(),
    //         "add_time": $('#add_time_id').val()
    //     }),
    //     processData: false,
    //     encode: true,
    //     success: function (data, textStatus, jQxhr) {
    //         location.href = "/home";
    //     },
    //     error: function (jqXhr, textStatus, errorThrown) {
    //         console.log(errorThrown);
    //     }
    // })
}