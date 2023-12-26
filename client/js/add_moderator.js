function add_mod() {
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addmoderator', // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "username": $("#mod_username_id").val(),
            "password": $("#mod_pswd_id").val(),
            "mod_firstName": $("#firstName_mod_id").val(),
            "mod_lastName": $("#lastName_mod_id").val(),
            "mod_ID": $("#id_mod").val(),
            "mod_email": $("#email_mod_id").val(),
            "grades1": [
                {
                    "alfa_rpt_grd1": 0,
                    "final_rpt_grd1": 0,
                    "final_grd_pjt1": 0
                },
            ],
            "grades2": [
                {
                    "alfa_rpt_grd2": 0,
                    "final_rpt_grd2": 0,
                    "final_grd_pjt2": 0
                },
            ],
            "grades3": [
                {
                    "alfa_rpt_grd3": 0,
                    "final_rpt_grd3": 0,
                    "final_grd_pjt3": 0
                },
            ]
            // "mod_isCoordinator": isCoordinator,
            // "pjt1_grd": 0,
            // "pjt2_grd": 0,
            // "pjt3_grd": 0
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            // alert('check - ', data)
            location.href = "/assigAndsubDats"
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log('tring')
            console.log(errorThrown);
        }
    });
}
















// function add_mod() {
//     // alert('in add')
//     var isCoordinator = document.getElementById('is_coordinator_id').checked;
//     // var coordinatorFound = false; // Flag to track if a coordinator is found
//     if (isCoordinator) {
//         $.ajax({
//             type: 'GET',
//             url: '/moderators',
//             success: function (result) {
//                 if (result[0] == undefined) {
//                     alert('in add')
//                     $.ajax({
//                         type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
//                         url: '/addmoderator', // the url where we want to POST
//                         contentType: 'application/json',
//                         data: JSON.stringify({
//                             "username": $("#mod_username_id").val(),
//                             "password": $("#mod_pswd_id").val(),
//                             "mod_firstName": $("#firstName_mod_id").val(),
//                             "mod_lastName": $("#lastName_mod_id").val(),
//                             "mod_ID": $("#id_mod").val(),
//                             "mod_email": $("#email_mod_id").val(),
//                             // "mod_isCoordinator": isCoordinator,
//                             "pjt1_grd": 0,
//                             "pjt2_grd": 0,
//                             "pjt3_grd": 0
//                         }),
//                         processData: false,
//                         encode: true,
//                         success: function (data, textStatus, jQxhr) {
//                             // alert('check - ', data)
//                             location.href = "/assigAndsubDats"
//                         },
//                         error: function (jqXhr, textStatus, errorThrown) {
//                             console.log('tring')
//                             console.log(errorThrown);
//                         }
//                     });
//                 }
//                 $.each(result, function (index, value) {
//                     if (value.mod_isCoordinator) {
//                         // If a coordinator is found, set the flag and break the loop
//                         coordinatorFound = true;
//                         return false; // Equivalent to 'break' in jQuery's $.each loop
//                     }
//                 });

//                 if (coordinatorFound) {
//                     isCoordinator = false
//                     $.ajax({
//                         type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
//                         url: '/addmoderator', // the url where we want to POST
//                         contentType: 'application/json',
//                         data: JSON.stringify({
//                             "username": $("#mod_username_id").val(),
//                             "password": $("#mod_pswd_id").val(),
//                             "mod_firstName": $("#firstName_mod_id").val(),
//                             "mod_lastName": $("#lastName_mod_id").val(),
//                             "mod_ID": $("#id_mod").val(),
//                             "mod_email": $("#email_mod_id").val(),
//                             "mod_isCoordinator": isCoordinator,
//                             "pjt1_grd": 0,
//                             "pjt2_grd": 0,
//                             "pjt3_grd": 0
//                         }),
//                         processData: false,
//                         encode: true,
//                         success: function (data, textStatus, jQxhr) {
//                             alert('check - ', data)
//                             window.location.href = "/assigAndsubDats"
//                         },
//                         error: function (jqXhr, textStatus, errorThrown) {
//                             console.log('tring')
//                             console.log(errorThrown);
//                         }
//                     });
//                 }
//             },
//             error: function (jqXhr, textStatus, errorThrown) {
//                 console.log(errorThrown);
//             }
//         });
//     }

//     else {
//         $.ajax({
//             type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
//             url: '/addmoderator', // the url where we want to POST
//             contentType: 'application/json',
//             data: JSON.stringify({
//                 "username": $("#mod_username_id").val(),
//                 "password": $("#mod_pswd_id").val(),
//                 "mod_firstName": $("#firstName_mod_id").val(),
//                 "mod_lastName": $("#lastName_mod_id").val(),
//                 "mod_ID": $("#id_mod").val(),
//                 "mod_email": $("#email_mod_id").val(),
//                 "mod_isCoordinator": isCoordinator,
//                 "pjt1_grd": 0,
//                 "pjt2_grd": 0,
//                 "pjt3_grd": 0
//             }),
//             processData: false,
//             encode: true,
//             success: function (data, textStatus, jQxhr) {
//                 window.location.href = "/assigAndsubDats"
//             },
//             error: function (jqXhr, textStatus, errorThrown) {
//                 console.log('tring')

//                 console.log(errorThrown);
//             }
//         })
//     }

// }