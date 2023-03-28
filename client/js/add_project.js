
function add_proj() {
    // var id = localStorage.getItem('conference_id')
    // var id_lec = localStorage.getItem('id_lec')
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addproject', // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "name": $("#project_id").val(),
            "subject": $("#subject_id").val(),
            "details": $('#details_id').val(),
            "project_type": $('#project_type_id').val(),
            "status": $('#status_id').val(),
            "offer": $('#offer_id').val(),
            "add_time": $('#add_time_id').val()
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            location.href = "/home";
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}