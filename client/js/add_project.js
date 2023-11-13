// function per_add_proj() {
// jQuery(function ($) {
const isEdit = localStorage.getItem("isEdit")
const modID = localStorage.getItem("modID")
console.log('modID - ', modID)
// alert('modID')
// $(document).ready(function () {
jQuery(function ($) {
    if (isEdit == 'true') {
        $('#title').html("עידכון פרויקט:")
        receiving_the_information();
    }

    else if (isEdit == 'false') {
        var name = localStorage.getItem("name");
        document.getElementById('offer_id').value = name;
        document.getElementById('offer_id').innerHTML = name;
        // alert('before getfulldate')
        getFullDate_for_new();
        localStorage.clear()
        $('#title').html("הוספת פרוייקט:")
        // add_project();
    }
    // }

});

function per_add_proj() {
    console.log('in per_add_proj edit - isEdit - ', isEdit);
    alert('in per_add_proj')
    var statusSelect = document.querySelector('#status_id');
    var outputStatus = statusSelect.value;
    document.getElementById("input_status_id").setAttribute('value', outputStatus)

    var singleOrCoupleSelect = document.querySelector('#single_or_couple_id');
    var outputSingleOrCouple = singleOrCoupleSelect.value;
    document.getElementById("input_single_or_couple_id").setAttribute('value', outputSingleOrCouple)

    var email = document.getElementById('external_party_email_id').value;
    validateEmail(email)//check if email correct

    var update_or_add = document.getElementById('id_group_update')      //לבדוק מחר אם זה נותן את התאריך של של היום הנוכחי או את התאריך של ההוספה - לא תקין
    /* x.style.display = "none";*/
    // var y = localStorage.getItem("yyyy")     //to check why its null
    // console.log("edit - ", y)
    // alert("edit - ")
    if (isEdit == 'true') {
        update_or_add.style.display = 'block';          // Show
        var id = localStorage.getItem('proj_id')
        update_project(id);
    }
    else if (isEdit == 'false') {
        update_or_add.style.display = 'none';           // Hide
        add_project(outputStatus, outputSingleOrCouple);
    }
}


function getFullDate_for_new() {
    // alert('in getFullDate')
    const date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var day = date.getDate();

    var fullDate = day + '/' + month + '/' + year;
    // console.log('in getFullDate - ' + fullDate)
    // alert('fullDate')
    document.getElementById("add_time_id").value = fullDate;
    document.getElementById('add_time_id').innerHTML = fullDate;

    document.getElementById("update_time_id").value = fullDate;
    document.getElementById('update_time_id').innerHTML = fullDate;
}

function receiving_the_information() {
    var english_name = localStorage.getItem('english_name_proj')
    var hebrew_name = localStorage.getItem('hebrew_name_proj')
    var details = localStorage.getItem('details_proj')
    var project_type = localStorage.getItem('type_proj')
    var status = localStorage.getItem('status_proj')
    var offer = localStorage.getItem('offer_proj')
    var date = localStorage.getItem('add_time_proj')
    var single_or_couple = localStorage.getItem('single_or_couple_proj')
    var external_factor = localStorage.getItem('external_factor_proj')
    var external_party_email = localStorage.getItem('external_party_email_proj')
    var fullDate = getFullDate(date);

    document.getElementById("pjt_eng_id").setAttribute('value', english_name)
    document.getElementById("pjt_hbw_id").setAttribute('value', hebrew_name)
    document.getElementById("details_id").setAttribute('value', details)
    document.getElementById("project_type_id").setAttribute('value', project_type)
    document.getElementById("status_id").setAttribute('value', status)
    document.getElementById("offer_id").setAttribute('value', offer)
    document.getElementById("add_time_id").setAttribute('value', fullDate)
    document.getElementById("single_or_couple_id").setAttribute('value', single_or_couple)
    document.getElementById("external_factor_id").setAttribute('value', external_factor)
    document.getElementById("external_party_email_id").setAttribute('value', external_party_email)
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

const validateEmail = (email) => {
    // alert('in validateEmail')
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function update_project(id) {
    $.ajax({
        type: 'PUT', // define the type of HTTP verb we want to use (PUT for our form)
        url: '/updatProject/' + id, // the url where we want to PUT
        contentType: 'application/json',
        data: JSON.stringify({
            "name_english": $("#pjt_eng_id").val(),
            "name_hebrew": $("#pjt_hbw_id").val(),
            "details": $('#details_id').val(),
            "project_type": $('#project_type_id').val(),
            "status": $('#input_status_id').val(),
            "single_or_couple": $('#input_single_or_couple_id').val(),
            "external_factor": $('#external_factor_id').val(),
            "external_party_email": $('#external_party_email_id').val()
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

function add_project(outputStatus, outputSingleOrCouple) {
    alert('in add_project')
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addproject', // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "name_english": $("#pjt_eng_id").val(),
            "name_hebrew": $("#pjt_hbw_id").val(),
            "details": $('#details_id').val(),
            "project_type": $('#project_type_id').val(),
            "status": outputStatus,
            "offer": $('#offer_id').val(),
            "add_time": $('#add_time_id').val(),
            "update_time": $('#update_time_id').val(),
            "single_or_couple": outputSingleOrCouple,
            "external_factor": $('#external_factor_id').val(),
            "external_party_email": $('#external_party_email_id').val()
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            // console.log('data - ', data._id)
            // alert('data._id')

            add_pro_to_mod(data._id);
            // window.location.href = "/assigAndsubDats";
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function add_pro_to_mod(id_pjt) {
    // alert('in add_pro_to_mod')
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addProjectToModerator/' + modID, // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "projectID": id_pjt,
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            location.href = "/assigAndsubDats";
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}