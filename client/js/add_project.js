$(document).ready(function () {
    var isEdit = localStorage.getItem("isEdit")
    console.log("isEdit - ", isEdit)

    if (isEdit == 'true') {
        console.log(" in if isEdit - ", isEdit)

        $('#title').html("עידכון פרויקט:")
        // $('#offer_add_time_id').html("עודכן בתאריך:")

        receiving_the_information();
    }
    else if (isEdit == 'false') {
        console.log(" in else isEdit - ", isEdit)

        localStorage.clear()
        $('#title').html("הוספת פרוייקט:")
    }
});

function add_proj() {
    // console.log("in add_proj")
    var isEdit = localStorage.getItem("isEdit")
    if (isEdit == 'true') {
        // $('#title').html("עידכון פרויקט:")
        // receiving_the_information();
        var id = localStorage.getItem('proj_id')
        // console.log("add_roj - ", id)
        $.ajax({
            type: 'PUT', // define the type of HTTP verb we want to use (PUT for our form)
            url: '/updatProject/' + id, // the url where we want to PUT
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

    else if(isEdit == 'false'){
        console.log("in else - post")
        getFullDate();

        // var today = getFullDate();
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
                window.location.href = "/home";
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

}

function getFullDate() {
    const date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var day = date.getDate();

    var fullDate = day + '/' + month + '/' + year;
    document.getElementById("add_time_id").value = fullDate;
}

function receiving_the_information() {
    var name = localStorage.getItem('name_proj')
    // var localStorage.setItem('name_proj', data.name)
    var subject = localStorage.getItem('subject_proj')
    var details = localStorage.getItem('details_proj')
    var status = localStorage.getItem('status_proj')
    var project_type = localStorage.getItem('type_proj')
    var offer = localStorage.getItem('offer_proj')
    var date = localStorage.getItem('add_time_proj')
    var fullDate = getFullDate(date);
    console.log("date (add_proj) - ", fullDate)

    document.getElementById("project_id").setAttribute('value', name)
    document.getElementById("subject_id").setAttribute('value', subject)
    document.getElementById("details_id").setAttribute('value', details)
    document.getElementById("status_id").setAttribute('value', status)
    document.getElementById("project_type_id").setAttribute('value', project_type)
    document.getElementById("offer_id").setAttribute('value', offer)
    document.getElementById("add_time_id").setAttribute('value',  fullDate)

    // getFullDate();
}

function getFullDate(fulldate) {
    const date = new Date(fulldate);
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var day = date.getDate();

    var fullDate = day + '/' + month + '/' + year;
    return fullDate;
    // document.getElementById("add_time_id").value = fullDate;
}