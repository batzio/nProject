// const { use } = require("../../server/routes/routes");

jQuery(function ($) {
    var name = localStorage.getItem('name')
    // console.log('name - ', name)
    // alert('name')
    document.getElementById("title").innerHTML = "שלום, " + name;

    var project = document.createElement("option")

    project.setAttribute("diasbled", "disabled")
    project.setAttribute("selected", "selected")
    projects_name.appendChild(project);

    var data = localStorage.getItem("data");
    var btnEditProj = document.getElementById("editProjbtn");
    // If the user id student he will see all the projects
    if (data === "student") {
        btnEditProj.style.visibility = "hidden";
        projects_name.appendChild(project)
        getAllProjectsDetails();
    }
    else {
        // document.getElementById("status_id").style.display = "none";
        // If the user is moderator he will see onle his projects
        //אם המשתמש הוא מנחה אז נביא את כל הפרויקטים שלו לפי האיי די שלו. ניתן יהיה לסדר את זה ברגע שהלוגין יהיה מוכן ונוכל להיכנס לאתר לפי שם משתמש וסיסמה
        if (data === "moderator" || data === "coordinator") {
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

                    },
                    error: function (jqXhr, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });

                if (document.getElementById("id_explanation") != "") {
                    // alert("in if in for num1 - check edit btn - ",option.id)
                    document.getElementById('editProjbtn').onclick = function () {
                        editProject(option.id);
                    };
                }
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

            console.log('name - ', value.name_hebrew);
            // alert('name')
            project.innerHTML = value.name_hebrew
            projects_name.appendChild(project)
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function getAllProjectsDetails(){
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