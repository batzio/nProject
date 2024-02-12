jQuery(function ($) {
    projects();
    judge1();
    judge2();
    judge3();
});

function projects() {
    var project = document.createElement("option")
    project.setAttribute("diasbled", "disabled")
    project.setAttribute("selected", "selected")
    projects_name.appendChild(project);

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
                project.innerHTML = value.name_hebrew
                projects_name.appendChild(project)
                index++;
                // console.log('hggg '+lecturer.getAttribute('name_lecturer'))
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
                localStorage.setItem('id_pjt', option.id)
                // addPjToJudge()//Adding the project to the judge
            }
        }
    });
}

function judge1() {
    var judge = document.createElement("option")
    judge.setAttribute("diasbled", "disabled")
    judge.setAttribute("selected", "selected")
    id_judge1.appendChild(judge);

    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/getmoderators',
        success: function (result) {
            //adding all the options
            id_judge1 = document.getElementById("id_judge1")
            index = 0;
            $.each(result, function (index, value) {
                var judge = document.createElement("option")
                judge.setAttribute('value', index)
                judge.setAttribute("id", value._id)
                judge.setAttribute("username", value.username)
                judge.setAttribute("password", value.password)
                judge.setAttribute("mod_firstName", value.mod_firstName)
                judge.setAttribute("mod_lastName", value.mod_lastName)
                judge.setAttribute("mod_ID", value.mod_ID)
                judge.setAttribute("mod_email", value.mod_email)
                judge.innerHTML = value.mod_firstName + " " + value.mod_lastName;
                id_judge1.appendChild(judge)
                index++;
                // console.log('hggg '+lecturer.getAttribute('name_lecturer'))
            });
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })

    id_judge1.addEventListener("change", function () {     //choose the id of project that selected
        var select = document.getElementById('id_judge1');
        for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
            if (option.selected) {
                localStorage.setItem('id_judge1', option.id)
                // addPjToJudge(option.id)
            }
        }
    });
}

function judge2() {
    var judge = document.createElement("option")
    judge.setAttribute("diasbled", "disabled")
    judge.setAttribute("selected", "selected")
    id_judge2.appendChild(judge);

    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/getmoderators',
        success: function (result) {
            //adding all the options
            id_judge2 = document.getElementById("id_judge2")
            index = 0;
            $.each(result, function (index, value) {
                var judge = document.createElement("option")
                judge.setAttribute('value', index)
                judge.setAttribute("id", value._id)
                judge.setAttribute("username", value.username)
                judge.setAttribute("password", value.password)
                judge.setAttribute("mod_firstName", value.mod_firstName)
                judge.setAttribute("mod_lastName", value.mod_lastName)
                judge.setAttribute("mod_ID", value.mod_ID)
                judge.setAttribute("mod_email", value.mod_email)
                judge.innerHTML = value.mod_firstName + " " + value.mod_lastName;
                id_judge2.appendChild(judge)
                index++;
                // console.log('hggg '+lecturer.getAttribute('name_lecturer'))
            });
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });

    id_judge2.addEventListener("change", function () {     //choose the id of project that selected
        var select = document.getElementById('id_judge2');
        for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
            if (option.selected) {
                localStorage.setItem('id_judge2', option.id)
                // addPjToJudge(option.id)
            }
        }
    });
}

function judge3() {
    var judge = document.createElement("option")
    judge.setAttribute("diasbled", "disabled")
    judge.setAttribute("selected", "selected")
    id_judge3.appendChild(judge);

    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/getmoderators',
        success: function (result) {
            //adding all the options
            id_judge3 = document.getElementById("id_judge3")
            index = 0;
            $.each(result, function (index, value) {
                var judge = document.createElement("option")
                judge.setAttribute('value', index)
                judge.setAttribute("id", value._id)
                judge.setAttribute("username", value.username)
                judge.setAttribute("password", value.password)
                judge.setAttribute("mod_firstName", value.mod_firstName)
                judge.setAttribute("mod_lastName", value.mod_lastName)
                judge.setAttribute("mod_ID", value.mod_ID)
                judge.setAttribute("mod_email", value.mod_email)
                judge.innerHTML = value.mod_firstName + " " + value.mod_lastName;
                id_judge3.appendChild(judge)
                index++;
                // console.log('hggg '+lecturer.getAttribute('name_lecturer'))
            });
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });

    id_judge3.addEventListener("change", function () {     //choose the id of project that selected
        var select = document.getElementById('id_judge3');
        for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
            if (option.selected) {
                localStorage.setItem('id_judge3', option.id)
                // addPjToJudge(option.id)
            }
        }
    });
}

//Before adding the project to the judge
function beforeAddPjToJudge() {
    var id_pjt = localStorage.getItem('id_pjt')
    var id_judge1 = localStorage.getItem('id_judge1')
    var id_judge2 = localStorage.getItem('id_judge2')
    var id_judge3 = localStorage.getItem('id_judge3')

    add_pjt_to_judge(id_pjt, id_judge1);
    add_pjt_to_judge(id_pjt, id_judge2);
    add_pjt_to_judge(id_pjt, id_judge3);
    // beforeAddJudgeToPjt();
    addJudgeToPjt(id_pjt, id_judge1)
    addJudgeToPjt(id_pjt, id_judge2)
    addJudgeToPjt(id_pjt, id_judge3)

}

function add_pjt_to_judge(id_pjt, id_judge) {
    // alert('in add_pro_to_mod')
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addProjectToJudge/' + id_judge, // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "projectID": id_pjt,
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            console.log("beforeAddJudgeToPjt")
            // beforeAddJudgeToPjt();
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

// function beforeAddJudgeToPjt() {
//     var id_pjt = localStorage.getItem('id_pjt')
//     var id_judge1 = localStorage.getItem('id_judge1')
//     var id_judge2 = localStorage.getItem('id_judge2')
//     var id_judge3 = localStorage.getItem('id_judge3');

//     addJudgeToPjt(id_pjt, id_judge1)
//     addJudgeToPjt(id_pjt, id_judge2)
//     addJudgeToPjt(id_pjt, id_judge3)
// }

//Adding the judge to the project
function addJudgeToPjt(id_pjt, id_judge) {
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addJudgesToProject/' + id_pjt, // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "JudgeID": id_judge,
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            // alert('in success')
            // if (num == 3) {
            // alert('in success - if - num = 3')
            location.href = "/assigAndsubDats";
            // beforeAddJudgeToPjt();
            // }
            // else {
            //     location.href = "/assigAndsubDats";
            // }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

