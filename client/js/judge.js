jQuery(function ($) {
    projects();
    judge1();
    judge2();
    judge3();
});

//הצגת כל הפרויקטים כדי שזיהיה ניתן לבחור 3 שופטים עבורו
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

//בחירת שופט מס' 1 לפרויקט
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
                // console.log("option - ", option)
                localStorage.setItem('id_judge1', option.id)
                // addPjToJudge(option.id)
            }
        }
    });
}

//בחירת שופט מס' 2 לפרויקט
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

//בחירת שופט מס' 3 לפרויקט
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

    // console.log('id_judge - ', id_judge1)
    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/project/' + id_pjt,
        success: function (result) {
            // console.log('result[0] ' )
            // console.log( result[0])
            var grades = result[0].Grades_arr;
            // var subs = result[0].SubRpt;

            // console.log( "grades")
            // console.log( grades[0])

            // console.log( "subs")
            // console.log( subs)
            //הוספת האיידי של הפרויקט לשופטים
            add_pjt_to_judge(id_pjt, id_judge1);
            add_pjt_to_judge(id_pjt, id_judge2);
            add_pjt_to_judge(id_pjt, id_judge3);

            //הוספת האיידי של טפסי הציונים לשופטים - אחד לכל שופט
            add_judge_grd(id_judge1, grades[0]);
            add_judge_grd(id_judge2, grades[1]);
            add_judge_grd(id_judge3, grades[2]);

            //הוספת האיידי של טפסי האישורים לשופטים - אחד לכל שופט
            // console.log('subs')
            // console.log(subs[0])
            // console.log(subs[1])
            // console.log(subs[2])
            // alert('subs')
            // add_judge_sub(id_judge1, subs[0]);
            // add_judge_sub(id_judge2, subs[1]);
            // add_judge_sub(id_judge3, subs[2]);

            //הוספת האיידי של השופטים לפרויקט
            add_judge_to_pjt(id_pjt, id_judge1);
            add_judge_to_pjt(id_pjt, id_judge2);
            add_judge_to_pjt(id_pjt, id_judge3);

            location.href = "/assigAndsubDats";
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });

    // add_pjt_to_judge(id_pjt, id_judge1);
    // add_pjt_to_judge(id_pjt, id_judge2);
    // add_pjt_to_judge(id_pjt, id_judge3);
    // beforeAddJudgeToPjt();
    // addJudgeToPjt(id_pjt, id_judge1)
    // addJudgeToPjt(id_pjt, id_judge2)
    // addJudgeToPjt(id_pjt, id_judge3)

    // addJudgeToSubRpt(id_pjt, id_judge1)
    // addJudgeToSubRpt(id_pjt, id_judge2)
    // addJudgeToSubRpt(id_pjt, id_judge3)

}

//Adding project's id to array in judge
function add_pjt_to_judge(id_pjt, id_judge) {
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addProjectToJudge/' + id_judge, // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "projectID": id_pjt
            // "id_grade": grade,
            // "id_sub": sub
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            // update_judge(id_judge, grade, sub);
            // console.log("beforeAddJudgeToPjt")
            // beforeAddJudgeToPjt();
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

//פונקציה המוסיפה לשופט את המסמכים הקשורים לפרויקט שהוא שופט
function add_judge_grd(id_judge, grade) {
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (GET for our form)
        url: '/addJudgeGrd/' + id_judge,
        contentType: 'application/json',
        data: JSON.stringify({
            "id_grade": grade
        }),
        success: function (result) {

            //הוספת איידי של שופט לטופס הציון של הפרויקט שהוא שופט
            add_grd_judge(id_judge, grade);
            // window.location.href = '/assigAndsubDats';
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

// //פונקציה המוסיפה לשופט את המסמכים הקשורים לפרויקט שהוא שופט
// function add_judge_sub(id_judge, sub) {
//     // console.log("sub add_judge_sub - ", sub);
//     $.ajax({
//         type: 'POST', // define the type of HTTP verb we want to use (GET for our form)
//         url: '/addJudgeSub/' + id_judge,
//         contentType: 'application/json',
//         data: JSON.stringify({
//             "id_sub": sub
//         }),
//         success: function (result) {

//             // console.log("sub - ", result);
//             // alert('in add_judge_sub')


//             add_sub_judge(id_judge, sub);
//             // window.location.href = '/assigAndsubDats';
//         },
//         error: function (jqXhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// }

//Adding the judge's id to the project
function add_judge_to_pjt(id_pjt, id_judge) {
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
            // location.href = "/assigAndsubDats";
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

function add_grd_judge(id_judge, id_grade) {
    $.ajax({
        type: 'PUT', // define the type of HTTP verb we want to use (PUT for our form)
        url: '/updateGrdDocId/' + id_grade, // the url where we want to PUT
        contentType: 'application/json',
        data: JSON.stringify({
            "id_judge": id_judge
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}

// //הוספת האיידי של השופט לטופס של אישורי הדוחות בפרויקט שהוא שופט
// function add_sub_judge(id_judge, id_sub) {
//     // alert('in add_sub_judge')
//     $.ajax({
//         type: 'PUT', // define the type of HTTP verb we want to use (PUT for our form)
//         url: '/updateSubDocId/' + id_sub, // the url where we want to PUT
//         contentType: 'application/json',
//         data: JSON.stringify({
//             "id_judge": id_judge
//         }),
//         processData: false,
//         encode: true,
//         success: function (data, textStatus, jQxhr) {
//             // console.log('data - ', data);
//             // alert('data');
//         },
//         error: function (jqXhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//         }
//     })
// }
// //Create Grades document and save the id of pjt
// function createGraedeDoc(id_pjt) {
//     $.ajax({
//         type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
//         url: '/createGrdDoc' , // the url where we want to POST
//         contentType: 'application/json',
//         data: JSON.stringify({
//             "id_project": id_pjt,
//         }),
//         processData: false,
//         encode: true,
//         success: function (result) {
//             // console.log(result)
//             save_grade_id_doc(id_pjt, result);
//         },
//         error: function (jqXhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//         }
//     })
// }

// //שומר
// function save_grade_id_doc(id_pjt, id_grade_doc){
//     $.ajax({
//         type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
//         url: '/saveGrdInPjt/' + id_pjt, // the url where we want to POST
//         contentType: 'application/json',
//         data: JSON.stringify({
//             "GradeID": id_grade_doc,
//         }),
//         processData: false,
//         encode: true,
//         success: function (result) {
//             // add_mod_to_pro(id_pjt);
//             window.location.href = '/assigAndsubDats';
//         },
//         error: function (jqXhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//         }
//     })
// }

// //הוספת תז שופט למערך אישור הקבצים
// function addJudgeToSubRpt(id_pjt, id_judge){
//     $.ajax({
//         type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
//         url: '/addJudgesToSubRpt/' + id_pjt, // the url where we want to POST
//         contentType: 'application/json',
//         data: JSON.stringify({
//             "JudgeID": id_judge,
//         }),
//         processData: false,
//         encode: true,
//         success: function (data, textStatus, jQxhr) {
//             // alert('in success')
//             // if (num == 3) {
//             // alert('in success - if - num = 3')
//             location.href = "/assigAndsubDats";
//             // beforeAddJudgeToPjt();
//             // }
//             // else {
//             //     location.href = "/assigAndsubDats";
//             // }
//         },
//         error: function (jqXhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//         }
//     })
// }

