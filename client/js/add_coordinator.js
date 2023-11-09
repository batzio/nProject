jQuery(function($) {
    // document.getElementById("id_keness").setAttribute('value', localStorage.getItem('conference_id'))
    // document.getElementById("id_keness").disabled = "false";
    var coordinator = document.createElement("option")
    coordinator.setAttribute("disabled","disabled")
    coordinator.setAttribute("selected","selected")

    coordinators_name.appendChild(coordinator)
    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/getmoderators',
        success: function (result) {
            //adding all the options
            coordinators_name = document.getElementById("coordinators_name")
            index = 0;
            $.each(result, function (index, value) {
                var coordinator = document.createElement("option")
                coordinator.setAttribute('value', index)
                coordinator.setAttribute("id", value.mod_ID)
                coordinator.setAttribute("first_name_coordinator", value.mod_firstName)
                coordinator.setAttribute("last_name_coordinator", value.mod_lastName)
                // coordinator.setAttribute("image_lecturer", value.image_lecturer)
                // lecturer.setAttribute("div_site", value.div_site)
                coordinator.innerHTML = value.mod_firstName + " " + value.mod_lastName
                coordinators_name.appendChild(coordinator)
                index++;
                // console.log('hggg '+lecturer.getAttribute('name_lecturer'))
            });
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
    coordinators_name.addEventListener("change", function () {     //choose the id of lecturer that selected
        var select = document.getElementById('coordinators_name');
        for (var i = 0; i < select.options.length; i++) {
            var option = select.options[i];
            if (option.selected) {
                localStorage.setItem('id_coor', option.id)
                break;
            }
        }
    });

});

function if_there_coor(){
    alert('in if_there_coor')
    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/getCoodinator',
        success: function (result) {

            // console.log('result[0].coo_ID - ' + result[0].coo_ID)
            // alert('result[0].coo_ID ')

            if(result[0] == undefined){
                add_coord();
            }
            else{
            location.href = "/login";
            }
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    }); 
}
       


function add_coord() {
    alert('in add_coord')
    // var id = localStorage.getItem('conference_id')
    var id_coor = localStorage.getItem('id_coor')
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/addcoordinator', // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "coo_ID": id_coor//,
            // "Proposal_rpt": "",
            // "alfa_rpt": "",
            // "beta_rpt": "",
            // "finall_rpt": ""
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            location.href = "/login";
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}


// function add_coord(){
//     $.ajax({
//         type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
//         url: '/addcoordinator', // the url where we want to POST
//         contentType: 'application/json',
//         data: JSON.stringify({
//             "username": $("#mod_username_id").val(),
//             "password": $("#mod_pswd_id").val(),
//             "mod_firstName": $("#firstName_mod_id").val(),
//             "mod_lastName": $("#lastName_mod_id").val(),
//             "mod_ID": $("#id_mod").val(),
//             "mod_email": $("#email_mod_id").val(),
//             // "mod_isCoordinator": isCoordinator,
//             "pjt1_grd": 0,
//             "pjt2_grd": 0,
//             "pjt3_grd": 0
//         }),
//         processData: false,
//         encode: true,
//         success: function (data, textStatus, jQxhr) {
//             // alert('check - ', data)
//             location.href = "/assigAndsubDats"
//         },
//         error: function (jqXhr, textStatus, errorThrown) {
//             console.log('tring')
//             console.log(errorThrown);
//         }
//     });
// }