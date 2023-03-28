// const { json } = require("express");

$(document).ready(function () {
    var username = localStorage.getItem('username')
    document.getElementById("title").innerHTML = "Hello, " + username;

    var project = document.createElement("option")
    project.setAttribute("disabled", "disabled")
    project.setAttribute("selected", "selected")

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
                // console.log('hggg '+project.getAttribute('project_name'))
            });
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
    projects_name.addEventListener("change", function () {     //choose the id of project that selected
        var select = document.getElementById('projects_name');
        for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
            if (option.selected) {
                $.ajax({
                    type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
                    url: '/explanation/' + option.id,
                    success: function (result) {
                        // console.log(result[0].details)
                        document.getElementById('id_explanation').value = result[0].details;
                        // projects_name = document.getElementById("projects_name")
                        // index = 0;
                        // $.each(result, function (index, value) {
                        //     var project = document.createElement("option")
                        //     project.setAttribute('value', index)
                        //     project.setAttribute("id", value._id)
                        //     project.setAttribute("project_name", value.name)
                        //     project.setAttribute("project_subject", value.subject)
                        //     project.setAttribute("details", value.details)
                        //     project.setAttribute("project_type", value.project_type)
                        //     project.setAttribute("status", value.status)
                        //     project.setAttribute("offer", value.offer)
                        //     project.setAttribute("add_time", value.add_time)
            
                        //     project.innerHTML = value.name
                        //     projects_name.appendChild(project)
                        //     index++;
                        //     // console.log('hggg '+project.getAttribute('project_name'))
                        // });
                    },
                    error: function (jqXhr, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });
                // localStorage.setItem('id_proj', option.id);
                // console.log('lalal - ');
                // console.log(option.projects_name);
                // document.getElementById('id_explanation').value = option.details;
                break;
            }
        }
    });
});

function goToTracking() {
    // console.log('tttttt')
    localStorage.setItem('password', password)
    window.location.href = "/Monitoring";
}