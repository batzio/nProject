const isEdit = localStorage.getItem("isEdit")
const modID = localStorage.getItem("modID")
// console.log('modID - ', modID)

jQuery(function ($) {
    var data = localStorage.getItem("data");
    localStorage.setItem("data", data);

    getFullDate();


    if (isEdit == 'true') {
        $('#title').html("עידכון פרויקט:")
        receiving_the_information();
    }

    else if (isEdit == 'false') {
        var name = localStorage.getItem("name");
        document.getElementById('offer_id').value = name;
        document.getElementById('offer_id').innerHTML = name;

        var update_or_add = document.getElementById('id_group_update')      //לבדוק מחר אם זה נותן את התאריך של של היום הנוכחי או את התאריך של ההוספה - לא תקין
        update_or_add.style.visibility = "hidden";

        localStorage.clear()
        $('#title').html("הוספת פרוייקט:")
    }
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

    console.log('outputStatus - ', outputStatus)
    console.log('outputSingleOrCouple - ', outputSingleOrCouple)
    alert('outputStatus, outputSingleOrCouple')


    var email = document.getElementById('external_party_email_id').value;
    validateEmail(email)//check if email correct

    if (isEdit == 'true') {
        var id = localStorage.getItem('proj_id')
        update_project(id);
    }
    else if (isEdit == 'false') {
        add_project(outputStatus, outputSingleOrCouple);
    }
}


function getFullDate() {
    const date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var day = date.getDate();

    var fullDate = day + '/' + month + '/' + year;

    if (isEdit == 'true') {
        document.getElementById("update_time_id").value = fullDate;
        document.getElementById("update_time_id").innerHTML = fullDate;
    }

    if (isEdit == 'false') {
        document.getElementById("add_time_id").value = fullDate;
        document.getElementById('add_time_id').innerHTML = fullDate;
    }



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


    // console.log('status - ', status)
    // console.log('single_or_couple - ', single_or_couple)
    // alert('status, single_or_couple')


    document.getElementById("pjt_eng_id").setAttribute('value', english_name)
    document.getElementById("pjt_hbw_id").setAttribute('value', hebrew_name)
    document.getElementById("details_id").setAttribute('value', details)
    document.getElementById("project_type_id").setAttribute('value', project_type)
    // document.getElementById("status_id").setAttribute('value', status)
    document.getElementById('status_id').value = status;
    document.getElementById("offer_id").setAttribute('value', offer)
    document.getElementById("add_time_id").setAttribute('value', date)
    // document.getElementById("single_or_couple_id").setAttribute('value', single_or_couple)
    document.getElementById('single_or_couple_id').value = single_or_couple;
    document.getElementById("external_factor_id").setAttribute('value', external_factor)
    document.getElementById("external_party_email_id").setAttribute('value', external_party_email)
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
            "update_time": $('#update_time_id').val(),
            "single_or_couple": $('#input_single_or_couple_id').val(),
            "external_factor": $('#external_factor_id').val(),
            "external_party_email": $('#external_party_email_id').val()
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            var status = document.getElementById('input_status_id').value;
            var single_or_couple = document.getElementById('input_single_or_couple_id').value;
            // console.log('status - ', status)
            // alert('status')
            if (status == 'open') {
                location.href = "/home";
            }
            else {
                add_project_id_to_students(id, single_or_couple);
            }
            // location.href = "/home";
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
            "single_or_couple": outputSingleOrCouple,
            "external_factor": $('#external_factor_id').val(),
            "external_party_email": $('#external_party_email_id').val(),
            "mod_id": ""
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            add_pro_to_mod(data._id);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function add_pro_to_mod(id_pjt) {
    alert('in add_pro_to_mod')
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
            add_mod_to_pro(id_pjt);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

function add_mod_to_pro(id_pjt) {
    // console.log('add_mod_to_pro - ', id_pjt)
    // console.log(modID)
    // alert('add_mod_to_pro')
    $.ajax({
        type: 'PUT', // define the type of HTTP verb we want to use (GET for our form)
        url: '/updateIdModToProjet/' + id_pjt,
        contentType: 'application/json',
        data: JSON.stringify({
            "mod_id": modID
        }),
        success: function (result) {
            alert('before result')
            console.log('result - ', result)
            alert('result')
            window.location.href = '/assigAndsubDats';
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function add_project_id_to_students(id_pjt, single_or_couple) {
    // let text;
    let id_sdt = prompt("הכנס תז של הסטודנט שעושה פרוייקט זה", "");
    if (id_sdt == null || id_sdt == "") {
        alert("חובה להכניס תז של הסטודנט");
    } else {
        update_student_id_pjt(id_sdt, id_pjt);
    }
    // document.getElementById("demo").innerHTML = text;
    if (single_or_couple == 'couple') {
        // let text1;
        let id_second_sdt = prompt("הכנס תז של הסטודנט הנוסף שעושה פרוייקט זה", "");
        if (id_second_sdt == null || id_second_sdt == "") {
            alert("חובה להכניס תז של הסטודנט");
        } else {
        update_student_id_pjt(id_second_sdt, id_pjt);
        }
        // document.getElementById("demo").innerHTML = text1;
    }
    alert('הסתיים בהצלחה')
}

function update_student_id_pjt(id_sdt, id_pjt){
    $.ajax({
        type: 'PUT', // define the type of HTTP verb we want to use (GET for our form)
        url: '/updateStudentIdPjt/' + id_sdt,
        contentType: 'application/json',
        data: JSON.stringify({
            "id_pjt": id_pjt
        }),
        success: function (result) {
            window.location.href = '/home';
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}
         