jQuery(function($) {
    // Your code here
//   });
// $(document).ready(function () {
    var username = localStorage.getItem('username')
    document.getElementById("title").innerHTML = "שלום, " + username;
    // });
    // function check(){

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

        $.ajax({
            type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
            url: '/projects',
            success: function (result) {
                //adding all the options
                projects_name = document.getElementById("projects_name")
                index = 0;
                $.each(result, function (index, value) {
                    var project = document.createElement("option")
                    project.setAttribute('value', index)
                    project.setAttribute("id", value._id)
                    project.setAttribute("project_name", value.name)
                    project.setAttribute("project_subject", value.subject)
                    project.setAttribute("details", value.details)
                    project.setAttribute("project_type", value.project_type)
                    project.setAttribute("status", value.status)
                    project.setAttribute("offer", value.offer)
                    project.setAttribute("add_time", value.add_time)

                    project.innerHTML = value.name
                    projects_name.appendChild(project)
                    index++;
                    console.log('hggg')
                });
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
        // projects_name.addEventListener("change", function () {     //choose the id of project that selected
        //     var select = document.getElementById('projects_name');
        //     for (var i = 0; i < select.options.length; i++) {
        //         var option = select.options[i];
        //         if (option.selected) {
        //             $.ajax({
        //                 type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        //                 url: '/explanation/' + option.id,
        //                 success: function (result) {
        //                     // console.log(result[2].details)
        //                     document.getElementById('id_explanation').value = result[0].details;

        //                 },
        //                 error: function (jqXhr, textStatus, errorThrown) {
        //                     console.log(errorThrown);
        //                 }
        //             });

        //             $.ajax({
        //                 type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        //                 url: '/status/' + option.id,
        //                 success: function (result) {
        //                     // console.log(result)
        //                     document.getElementById('status_id').value = result[0].status;

        //                 },
        //                 error: function (jqXhr, textStatus, errorThrown) {
        //                     console.log(errorThrown);
        //                 }
        //             });
        //             break;
        //         }
        //     }
        // });
    }
    else {
        // document.getElementById("status_id").style.display = "none";
        // If the user is moderator he will see onle his projects
        //אם המשתמש הוא מנחה אז נביא את כל הפרויקטים שלו לפי האיי די שלו. ניתן יהיה לסדר את זה ברגע שהלוגין יהיה מוכן ונוכל להיכנס לאתר לפי שם משתמש וסיסמה
        if (data === "moderator") {
            $.ajax({
                type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
                url: '/projects',
                success: function (result) {
                    //adding all the options
                    projects_name = document.getElementById("projects_name")
                    index = 0;
                    $.each(result, function (index, value) {
                        var project = document.createElement("option")
                        project.setAttribute('value', index)
                        project.setAttribute("id", value._id)
                        project.setAttribute("project_name", value.name)
                        project.setAttribute("project_subject", value.subject)
                        project.setAttribute("details", value.details)
                        project.setAttribute("project_type", value.project_type)
                        project.setAttribute("status", value.status)
                        project.setAttribute("offer", value.offer)
                        project.setAttribute("add_time", value.add_time)

                        project.innerHTML = value.name
                        projects_name.appendChild(project)
                        index++;
                        // console.log('hggg '+project.getAttribute('project_name'))
                    });
                    // // After the options have been added, check if "id_explanation" is not empty
                    // if (document.getElementById("id_explanation").value !== "") {
                    //     // Get the project ID from the selected option
                    //     var selectedOption = projects_name.options[projects_name.selectedIndex];
                    //     var projectId = selectedOption.getAttribute("id");

                    //     console.log("Project ID:", projectId);
                    //     btnEditProj.disable = false;
                    // }
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });

            // if (document.getElementById("id_explanation") != "") {
            //     console.log("into if ", project.id)
            //     btnEditProj.disable = false;

            //     // document.getElementById('button').onclick = editProject(project.id);
            // }
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


function editProject(id, isEdit) {
    // alert("in editProject - check edit btn - ", id)
    localStorage.setItem("isEdit", 'true');

    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (POST for our form)
        url: '/project/' + id,
        success: function (result) {
            var data = result[0]
            // console.log('edt_btn')
            // console.log(data)
            // localStorage.setItem('update', 'true')
            localStorage.setItem('proj_id', data._id)
            localStorage.setItem('name_proj', data.name)
            localStorage.setItem('subject_proj', data.subject)
            localStorage.setItem('details_proj', data.details)
            // var date = new Date(data.date);
            // localStorage.setItem('date_keness', date.toISOString().slice(0, 10))
            localStorage.setItem('status_proj', data.status)
            localStorage.setItem('type_proj', data.project_type)
            localStorage.setItem('offer_proj', data.offer)
            localStorage.setItem('add_time_proj', data.add_time)

            window.location.href = "/addproject";
        },
        error: function (err) {
            console.log("err" + err);
        }
    });
}