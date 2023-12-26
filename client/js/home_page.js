jQuery(function ($) {
    var name = localStorage.getItem('name')
    document.getElementById("title").innerHTML = "שלום, " + name;

    var project = document.createElement("option")

    project.setAttribute("diasbled", "disabled")
    project.setAttribute("selected", "selected")
    projects_name.appendChild(project);

    var data = localStorage.getItem("data");
    var btnEditProj = document.getElementById("editProjbtn");
    var btnSendingARequest = document.getElementById("sendingARequest");

    // If the user id student he will see all the projects
    if (data === "student") {
        btnEditProj.style.visibility = "hidden";
        projects_name.appendChild(project)
        getAllProjectsDetails();
    }
    else {
        // document.getElementById("status_id").style.display = "none";
        // If the user is moderator he will see onle his projects
        if (data === "moderator" || data === "coordinator") {
            btnSendingARequest.style.visibility = "hidden";
            var id = localStorage.getItem("modID");
            $.ajax({
                type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
                url: '/moderatorProjects/' + id,
                success: function (result) {
                    index = 0;
                    $.each(result, function (index, value) {
                        getProjectsDetails(result[index], index);
                    });
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        }

    }

    projects_name.addEventListener("change", function () {     //choose the id of project that selected
        var select = document.getElementById('projects_name');
        for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
            if (option.selected) {
                $.ajax({
                    type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
                    url: '/explanation/' + option.id,
                    success: function (result) {
                        // console.log(result[2].details)
                        document.getElementById('id_explanation').value = result[0].details;

                    },
                    error: function (jqXhr, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });

                $.ajax({
                    type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
                    url: '/status/' + option.id,
                    success: function (result) {
                        // console.log(result)
                        document.getElementById('status_id').value = result[0].status;
                        if (result[0].status == 'close') {
                            btnSendingARequest.style.visibility = "hidden";
                        }

                    },
                    error: function (jqXhr, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });

                if (document.getElementById("id_explanation") != "") {
                    // alert("in if in for num1 - check edit btn - ",option.id)
                    document.getElementById('editProjbtn').onclick = function () {
                        // const id_pjt = option.id;
                        editProject(option.id);
                    };
                }
                localStorage.setItem('id_pjt', option.id)
                break;
            }
        }
    });
    // }
});


function editProject(id) {
    // alert("in editProject - check edit btn - ", id)
    localStorage.setItem("isEdit", 'true');
    // localStorage.setItem("isedit", 'true');

    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (POST for our form)
        url: '/project/' + id,
        success: function (result) {
            var data = result[0]
            // console.log('edt_btn')
            // console.log(data)
            // localStorage.setItem('update', 'true')
            localStorage.setItem('proj_id', data._id)
            localStorage.setItem('english_name_proj', data.name_english)
            localStorage.setItem('hebrew_name_proj', data.name_hebrew)
            localStorage.setItem('details_proj', data.details)
            localStorage.setItem('type_proj', data.project_type)
            localStorage.setItem('status_proj', data.status)
            localStorage.setItem('offer_proj', data.offer)
            localStorage.setItem('add_time_proj', data.add_time)
            localStorage.setItem('single_or_couple_proj', data.single_or_couple)
            localStorage.setItem('external_factor_proj', data.external_factor)
            localStorage.setItem("external_party_email_proj", data.external_party_email)
            window.location.href = "/addproject";
        },
        error: function (err) {
            console.log("err" + err);
        }
    });
}

function getProjectsDetails(id, index) {
    // alert('getProjectsDetails')
    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/project/' + id,
        success: function (result) {
            var value = result[0];
            // console.log('value - ', value)
            // alert('value')
            var project = document.createElement("option")
            project.setAttribute('value', index)
            project.setAttribute("id", value._id)
            project.setAttribute("name_english", value.name_english)
            project.setAttribute("name_hebrew", value.name_hebrew)
            project.setAttribute("details", value.details)
            project.setAttribute("project_type", value.project_type)
            project.setAttribute("status", value.status)
            project.setAttribute("offer", value.offer)
            project.setAttribute("add_time", value.add_time)
            project.setAttribute("single_or_couple", value.single_or_couple)
            project.setAttribute("external_factor", value.external_factor)
            project.setAttribute("external_party_email", value.external_party_email)

            // console.log('name - ', value.name_hebrew);
            // alert('name')
            project.innerHTML = value.name_hebrew
            projects_name.appendChild(project)
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function getAllProjectsDetails() {
    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/projects',
        success: function (result) {
            //adding all the options
            // projects_name = document.getElementById("projects_name")
            index = 0;
            $.each(result, function (index, value) {
                var project = document.createElement("option")
                project.setAttribute('value', index)
                project.setAttribute("id", value._id)
                project.setAttribute("name_english", value.name_english)
                project.setAttribute("name_hebrew", value.name_hebrew)
                project.setAttribute("details", value.details)
                project.setAttribute("project_type", value.project_type)
                project.setAttribute("status", value.status)
                project.setAttribute("offer", value.offer)
                project.setAttribute("add_time", value.add_time)
                project.setAttribute("single_or_couple", value.single_or_couple)
                project.setAttribute("external_factor", value.external_factor)
                project.setAttribute("external_party_email", value.external_party_email)


                // console.log('name - ', value.name_hebrew);

                project.innerHTML = value.name_hebrew;
                projects_name.appendChild(project);
                index++;
            });
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function sendRequest(id_mod, name) {
    // getIdModFromPro();
    //פונ' זו נקראת רק כאשר סטודנט נכנס למערכת. יש להביא איכשהו את המייל של המנחה של אותו פרוייקט לכאן

    // var id_mod = localStorage.getItem("modID");
    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/getemail/' + id_mod,
        contentType: 'application/json',
        success: function (result) {
            // var email = 'batziona99@gmail.com'
            // alert('before')
            var subject = 'בקשת פרוייקט';
            var body1 = 'שלום וברכה,';
            var body2 = "אשמח לשמוע פרטים אודות הפרוייקט:" + '\n' + name;
            var fullBody = body1 + "\n" + body2;
            var mailtoUrl = 'mailto:' + result + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(fullBody);
            // console.log('mailtoUrl - ', mailtoUrl)
            // alert('mailtoUrl')
            window.open(mailtoUrl, '_self');
            // alert('after window.open')
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function getIdModFromPro() {
    var id_pjt = localStorage.getItem('id_pjt');

    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/project/' + id_pjt,
        success: function (result) {
            // console.log(result[0])

            sendRequest(result[0].mod_id, result[0].name_hebrew);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}
