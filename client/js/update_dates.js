jQuery(function ($) {

    // document.getElementById("proposal").style.display = 'none';           // Hide

    // document.getElementById('okBtn').onclick = function (data) {
    //     // alert("button was clicked");
    //     window.location.href = "/assigAndsubDats";
    // }
    getDates();
});

function sentDate() {
    var proposal = document.getElementById("proposal_id").value;
    var alfa = document.getElementById("alfa_id").value;
    var beta = document.getElementById("beta_id").value;
    var final = document.getElementById("final_id").value;
    var presentation = document.getElementById("presentation_id").value;
    $.ajax({
        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url: '/dateOfSub', // the url where we want to POST
        contentType: 'application/json',
        data: JSON.stringify({
            "propRpt": proposal,
            "alfaRpt": alfa,
            "betaRpt": beta,
            "finalRpt": final,
            "presentation": presentation
        }),
        processData: false,
        encode: true,
        success: function (data, textStatus, jQxhr) {
            alert("התאריך נשמר בהצלחה");
            // window.location.href = '/assigAndsubDats';
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}


function getDates() {
    var prop = document.getElementById("proposal_id_date");
    var alfa = document.getElementById("alpha_id_date");
    var beta = document.getElementById("beta_id_date");
    var final = document.getElementById("final_id_date");
    var present = document.getElementById("presentation_id_date");
    // console.log('prop - ',prop)

    $.ajax({
        type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
        url: '/getdates',
        success: function (result) {
            var current = new Date()//.getTime();
            let dd = String(current.getDate()).padStart(2, '0');
            let mm = String(current.getMonth() + 1).padStart(2, '0'); // January is 0!
            let yyyy = current.getFullYear();
            current = yyyy + '-' + mm + '-' + dd;

            // console.log('current - ',current)
            // console.log('current - ',current)
            
            $.each(result, function (index, value) {
                if ("propRpt" in value) {
                    // alert('current')
                    if (current <= value.propRpt) {
                        // prop = value.propRpt;
                        // console.log('value - ',value.propRpt)
                        prop.innerHTML = value.propRpt;
                    }
                    else {//if(current > value.propRpt) {
                        // console.log('in else')
                        // alert('in else')document.getElementById("myBtn").disabled = true;
                        document.getElementsByName("propFileDis")[0].disabled = true;
                        // document.getElementsByName("propFileDis").disabled = true;
                        // document.getElementById("propFileInput").disabled = true;
                        // document.getElementById("proposal").disabled = true;
                        prop.innerHTML = "תאריך הגשה עבר";
                    }
                }
                if ("alfaRpt" in value) {
                    if (current <= value.alfaRpt) {
                        alfa.innerHTML = value.alfaRpt;
                    }
                    else {
                        // document.getElementById("alfaFileInput").disabled = true;
                        // document.getElementById("alfa").disabled = true;
                        document.getElementsByName("alfaFileDis")[0].disabled = true;
                        alfa.innerHTML = "תאריך הגשה עבר";
                    }
                }
                if ("betaRpt" in value) {
                    if (current <= value.betaRpt) {
                        beta.innerHTML = value.betaRpt;
                    }
                    else {
                        // document.getElementById("betaFileInput").disabled = true;
                        // document.getElementById("beta").disabled = true;
                        document.getElementsByName("betaFileDis")[0].disabled = true;
                        beta.innerHTML = "תאריך הגשה עבר";
                    }
                }
                if ("finalRpt" in value) {
                    if (current <= value.finalRpt) {
                        final.innerHTML = value.finalRpt;
                    }
                    else {
                        // document.getElementById("finalFileInput").disabled = true;
                        // document.getElementById("final").disabled = true;
                        document.getElementsByName("finalFileDis")[0].disabled = true;
                        final.innerHTML = "תאריך הגשה עבר";
                    }
                }
                if ("presentation" in value) {
                    present.innerHTML = value.presentation;
                }
            });
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
}
    // if (proposal != "") {
    //     $.ajax({
    //         type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
    //         url: '/dateOfSub', // the url where we want to POST
    //         contentType: 'application/json',
    //         data: JSON.stringify({
    //             "propRpt": proposal
    //         }),
    //         processData: false,
    //         encode: true,
    //         success: function (data, textStatus, jQxhr) {
    //             alert("התאריך נשמר בהצלחה");
    //             // window.location.href = '/assigAndsubDats';
    //         },
    //         error: function (jqXhr, textStatus, errorThrown) {
    //             console.log(errorThrown);
    //         }
    //     })
    // }

    // if(alfa != ""){
    //     $.ajax({
    //         type: 'PUT', // define the type of HTTP verb we want to use (POST for our form)
    //         url: '/updateDateOfSub', // the url where we want to POST
    //         contentType: 'application/json',
    //         data: JSON.stringify({
    //             "alfaRpt": alfa
    //         }),
    //         processData: false,
    //         encode: true,
    //         success: function (data, textStatus, jQxhr) {
    //             alert("התאריך נשמר בהצלחה");
    //             // window.location.href = '/assigAndsubDats';
    //         },
    //         error: function (jqXhr, textStatus, errorThrown) {
    //             console.log(errorThrown);
    //         }
    //     })
    // }

    // if(beta != ""){
    //     $.ajax({
    //         type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
    //         url: '/dateOfSub', // the url where we want to POST
    //         contentType: 'application/json',
    //         data: JSON.stringify({
    //             "betaRpt": beta
    //         }),
    //         processData: false,
    //         encode: true,
    //         success: function (data, textStatus, jQxhr) {
    //             alert("התאריך נשמר בהצלחה");
    //             // window.location.href = '/assigAndsubDats';
    //         },
    //         error: function (jqXhr, textStatus, errorThrown) {
    //             console.log(errorThrown);
    //         }
    //     }) 
    // }

    // if(final != ""){
    //     $.ajax({
    //         type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
    //         url: '/dateOfSub', // the url where we want to POST
    //         contentType: 'application/json',
    //         data: JSON.stringify({
    //             "finalRpt": final
    //         }),
    //         processData: false,
    //         encode: true,
    //         success: function (data, textStatus, jQxhr) {
    //             alert("התאריך נשמר בהצלחה");
    //             // window.location.href = '/assigAndsubDats';
    //         },
    //         error: function (jqXhr, textStatus, errorThrown) {
    //             console.log(errorThrown);
    //         }
    //     }) 
    // }

    // if(presentation != ""){
    //     $.ajax({
    //         type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
    //         url: '/dateOfSub', // the url where we want to POST
    //         contentType: 'application/json',
    //         data: JSON.stringify({
    //             "presentation": presentation
    //         }),
    //         processData: false,
    //         encode: true,
    //         success: function (data, textStatus, jQxhr) {
    //             alert("התאריך נשמר בהצלחה");
    //             // window.location.href = '/assigAndsubDats';
    //         },
    //         error: function (jqXhr, textStatus, errorThrown) {
    //             console.log(errorThrown);
    //         }
    //     }) 
    // }
// }



    // $.ajax({
    //     type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
    //     url: '/dateOfSub', // the url where we want to POST
    //     contentType: 'application/json',
    //     data: JSON.stringify({
    //         "propRpt": proposal,
    //         "alfaRpt": alfa,
    //         "betaRpt": beta,
    //         "finalRpt": final,
    //         "presentation": presentation
    //     }),
    //     processData: false,
    //     encode: true,
    //     success: function (data, textStatus, jQxhr) {
    //         alert("התאריכים נשמרו בהצלחה");
    //         window.location.href = '/assigAndsubDats';
    //     },
    //     error: function (jqXhr, textStatus, errorThrown) {
    //         console.log(errorThrown);
    //     }
    // })


// function submittingAProposalReport() {
//     alert('submittingAProposalReport')
//     document.getElementById("proposal").style.display = 'block';          // Show
//     // var proposal_date = document.getElementById("proposal_id").value;
//     // localStorage.setItem("proposal_date", proposal_date);
//     // localStorage.setItem("date", "proposal_date");
//     // console.log('proposal_date - ', proposal_date)
//     // alert('proposal_date')
//     // sentDate();
// }

// function submittingAnAlfaReport() {
//     document.getElementById("alfa").style.display = 'block';          // Show
//     // var alfa_date = document.getElementById("alfa_id").value;
//     // localStorage.setItem("alfa_date", alfa_date);
//     // localStorage.setItem("date", "alfa_date");
//     // window.location.href = "/assigAndsubDats";
// }

// function submittingABetaReport() {
//     document.getElementById("beta").style.display = 'block';          // Show
//     var beta_date = document.getElementById("beta_id").value;
//     localStorage.setItem("beta_date", beta_date);
//     localStorage.setItem("date", "beta_date");
//     window.location.href = "/assigAndsubDats";
// }

// function submittingAFinalReport() {
//     document.getElementById("final").style.display = 'block';          // Show
//     var final_date = document.getElementById("final_id").value;
//     localStorage.setItem("final_date", final_date);
//     localStorage.setItem("date", "final_date");
//     window.location.href = "/assigAndsubDats";
// }

// function presentationOfTheProject() {
//     document.getElementById("presentation").style.display = 'block';          // Show
//     var presentation_date = document.getElementById("presentation_id").value;
//     localStorage.setItem("presentation_date", presentation_date);
//     localStorage.setItem("date", "presentation_date");
//     window.location.href = "/assigAndsubDats";
// }

// function sentDate() {
// if (document.getElementById('proposal').style.display === 'block') {
//     var proposal_date = document.getElementById("proposal_id").value;
//     if (proposal_date != "") {
//         localStorage.setItem("proposal_date", proposal_date);
//         localStorage.setItem("date", "proposal_date");
//         window.location.href = "/assigAndsubDats";
//     }
//     else {
//         alert('יש לסמן תאריך להגשה');
//     }
// }

// else if (document.getElementById("alfa").style.display === 'block') {
//     var alfa_date = document.getElementById("alfa_id").value;
//     if (alfa_date != "") {
//         localStorage.setItem("alfa_date", alfa_date);
//         localStorage.setItem("date", "alfa_date");
//         window.location.href = "/assigAndsubDats";
//     }
//     else {
//         alert('יש לסמן תאריך להגשה');
//     }
// }

// else if (document.getElementById("beta").style.display === 'block') {
//     var beta_date = document.getElementById("beta_id").value;
//     if (beta_date != "") {
//         localStorage.setItem("beta_date", beta_date);
//         localStorage.setItem("date", "beta_date");
//         window.location.href = "/assigAndsubDats";
//     }
//     else {
//         alert('יש לסמן תאריך להגשה');
//     }
// }

// else if (document.getElementById("final").style.display === 'block') {
//     var final_date = document.getElementById("final_id").value;
//     if (final_date != "") {
//         localStorage.setItem("final_date", final_date);
//         localStorage.setItem("date", "final_date");
//         window.location.href = "/assigAndsubDats";
//     }
//     else {
//         alert('יש לסמן תאריך להגשה');
//     }
// }

// else if (document.getElementById("presentation").style.display === 'block') {
//     var presentation_date = document.getElementById("presentation_id").value;
//     if (presentation_date != "") {
//         localStorage.setItem("presentation_date", presentation_date);
//         localStorage.setItem("date", "presentation_date");
//         window.location.href = "/assigAndsubDats";
//     }
//     else {
//         alert('יש לסמן תאריך להגשה');
//     }
// }

// }