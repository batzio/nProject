const id_sdt = localStorage.getItem('stdID');
const id_mod = localStorage.getItem('modID');
const data = localStorage.getItem("data");


jQuery(function ($) {
    console.log('data - ', data)
    // Your code here
    if (data === "moderator" || data === "coordinator") {
        document.getElementById("upload_file").innerHTML = "הורדת מסמך";
        document.getElementById("weighted_score").innerHTML = "נתינת ציון";
        var hiddenElements = $("[style='visibility: hidden;']");

        // Show all hidden elements
        hiddenElements.each(function () {
            $(this).css("visibility", "visible"); // Change display style to make them visible
        });
        $("[id='uploadForm']").hide();
    }
    // btnToPjt();
});

// //מקשרת פרויקט וכפתור
// function btnToPjt() {
//     $.ajax({
//         type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
//         url: '/getPjts/' + id_mod,
//         success: function (result) {            
//             var button1 = document.getElementById('firstPjt');
//             // Add a class to the button
//             button1.className = result[0];
//             console.log(button1.className)

//             var button2 =document.getElementById("secondPjt");
//             button2.className = result[1];
//             console.log(button2.className)

//             var button3 =document.getElementById("thirsdPjt");
//             button3.className = result[2];
//             console.log(button3.className)

//             // console.log(button.className);
//             // $.each(result, function (index, value) {
//             //     // console.log('username - ' + username)
//             //     // alert('j')
//             //     // if (value.mod_ID == id) {//((value.username == username) && ) {
//             //     //     // check_id_moderator(username, id)
//             //     //     update_moderator_pwd(id, newPwd);
//             //     //     // return;
//             //     // }
//             // });
//         },
//         error: function (jqXhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//         }
//     });
// }

function proposal_upload(id) {
    if (data === "student") {
        id = id_sdt;
    }
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('propFileInput').files[0];

    const fileName = 'proposal_rpt-' + id + '.pdf';

    // Append the file to the formData
    formData.append('proposal_rpt', file);//, fileName);

    $.ajax({
        url: '/uploadProposalRep/' + id + '/' + fileName,
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (data, textStatus, jQxhr) {
            alert('הקובץ עלה בהצלחה')
            // if (flag == true) {
            //     $.ajax({
            //         type: 'POST', // define the type of HTTP verb we want to use (GET for our form)
            //         url: '/addIdRptInStudent/' + id,
            //         contentType: 'application/json',
            //         data: JSON.stringify({
            //             "rptPath": fileName
            //         }),
            //         success: function (result) {
            //             // alert('before result')
            //             console.log('result - ', result)
            //             alert('result')
            //             // window.location.href = '/assigAndsubDats';
            //         },
            //         error: function (jqXhr, textStatus, errorThrown) {
            //             console.log(errorThrown);
            //         }
            //     });
            // }
            location.reload();
        }
    });
}

function alfa_upload(id) {
    if (data === "student") {
        id = id_sdt;
    }
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('alfaFileInput').files[0];

    const fileName = 'alfa_rpt-' + id + '.pdf';

    // Append the file to the formData
    formData.append('alfa_rpt', file);

    $.ajax({
        url: '/uploadAlfaRep/' + id + '/' + fileName,
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (data, textStatus, jQxhr) {
            alert('הקובץ עלה בהצלחה')
            location.reload();
        }
    });
}

function beta_upload(id) {
    if (data === "student") {
        id = id_sdt;
    }
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('betaFileInput').files[0];

    // Set the desired filename (you can modify this part)
    const fileName = 'beta_rpt-' + id + '.pdf';

    // Append the file to the formData
    formData.append('beta_rpt', file);
    $.ajax({
        url: '/uploadBetaRep/' + id + '/' + fileName,
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (data, textStatus, jQxhr) {
            alert('הקובץ עלה בהצלחה')
            location.reload();
        }
    });
}

function final_upload(id) {
    if (data === "student") {
        id = id_sdt;
    }
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('finalFileInput').files[0];

    const fileName = 'final_rpt-' + id + '.pdf';

    // Append the file to the formData
    formData.append('final_rpt', file);

    $.ajax({
        url: '/uploadFinalRep/' + id + '/' + fileName,
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (data, textStatus, jQxhr) {
            alert('הקובץ עלה בהצלחה')
            location.reload();
        }
    });
}

function downloadFile(fileId, rpt) {
    //     if (fileId != '0000' || fileId != '0001' || fileId != '0010' || fileId != '0011') {
    //         $.ajax({
    //             type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
    //             url: '/student/' + fileId,
    //             success: function (result) {
    //                 $.each(result, function (index, data) {
    //                     // console.log('username - ' + username)
    //                     // alert('j')
    //                     if (data.sdt_ID == fileId) {//((value.username == username) && ) {
    //                         var arr = data.reports_arr;
    //                         for (let i = 0; i < arr.length; i++) {
    //                             const isSubstringFound = arr[0].indexOf(rpt) !== -1;
    //                             if (isSubstringFound) {
    //                                 alert('wait!'); ``
    //                             }
    //                             /*
    //                             // Sample long text
    // const longText = "This is a long text, and we want to find a specific substring.";

    // // Substring to find
    // const substringToFind = "specific substring";

    // // Check if the substring exists in the long text
    // const isSubstringFound = longText.indexOf(substringToFind) !== -1;

    // if (isSubstringFound) {
    //     console.log("Substring found!");
    // } else {
    //     console.log("Substring not found.");
    // }

    //                             */
    //                         }
    //                         // check_id_moderator(username, id)
    //                         // update_moderator_pwd(id, newPwd);
    //                         // return;
    //                     }
    //                 });
    //             },
    //             error: function (jqXhr, textStatus, errorThrown) {
    //                 console.log(errorThrown);
    //             }
    //         });
    //     }
    var form = document.getElementById('downloadForm');
    form.action = '/download-file/' + fileId + '/' + rpt;
    form.submit();
}

// function getDates() {
//     var prop = document.getElementById("proposal_id");
//     var alfa = document.getElementById("alpha_id");
//     var beta = document.getElementById("beta_id");
//     var final = document.getElementById("final_id");
//     var present = document.getElementById("presentation_id");

//     $.ajax({
//         type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
//         url: '/getdates',
//         success: function (result) {
//             var current = new Date().getTime();
//             $.each(result, function (index, value) {
//                 if ("propRpt" in value) {
//                     if (current <= value.propRpt) {
//                         prop.innerHTML = value.propRpt;
//                     }
//                     else {
//                         document.getElementById("propFileInput").disabled = true;
//                         document.getElementById("proposal").disabled = true;
//                         prop.innerHTML = "תאריך הגשה עבר";
//                     }
//                 }
//                 else if ("alfaRpt" in value) {
//                     if (current <= value.alfaRpt) {
//                         alfa.innerHTML = value.alfaRpt;
//                     }
//                     else {
//                         document.getElementById("alfaFileInput").disabled = true;
//                         document.getElementById("alfa").disabled = true;
//                         alfa.innerHTML = "תאריך הגשה עבר";
//                     }
//                 }
//                 else if ("betaRpt" in value) {
//                     if (current <= value.betaRpt) {
//                         beta.innerHTML = value.betaRpt;
//                     }
//                     else {
//                         document.getElementById("betaFileInput").disabled = true;
//                         document.getElementById("beta").disabled = true;
//                         beta.innerHTML = "תאריך הגשה עבר";
//                     }
//                 }
//                 else if ("finalRpt" in value) {
//                     if (current <= value.finalRpt) {
//                         final.innerHTML = value.finalRpt;
//                     }
//                     else {
//                         document.getElementById("finalFileInput").disabled = true;
//                         document.getElementById("final").disabled = true;
//                         final.innerHTML = "תאריך הגשה עבר";
//                     }
//                 }
//                 else if ("presentation" in value) {
//                     present.innerHTML = value.presentation;
//                 }
//             });
//         },
//         error: function (jqXhr, textStatus, errorThrown) {
//             console.log(errorThrown);
//         }
//     })
// }

//מקשרת כפתור לפרויקט
function loadPjt(idBtn) {
    $.ajax({
        type: 'GET',
        url: '/getModeratorProjectsJudge/' + id_mod + "/" + idBtn,
        success: function (result) {
            //מקבלים בתשובה את האיידי של הפרויקט
            console.log(result)
            alert("moderatorProjects")
            localStorage.setItem('id_pjt', result);

            $.ajax({
                type: 'GET',
                url: '/project/' + result,
                success: function (result) {
                    var name = result[0].name_hebrew;
                    document.getElementById("namePjt").innerHTML = "שם הפרויקט: " + name;
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });

        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

//אישור דוח
function subRpt(idBtn) {
    var id_pjt = localStorage.getItem('id_pjt')

    $.ajax({
        type: 'GET', 
        url: '/getSubRptIdDoc/' + id_mod,
        success: function (result) {
            var subsFromMod = result;
            $.ajax({
                type: 'GET', 
                url: '/getSubRptId/' + id_pjt,
                success: function (result) {
                    var subsFromPjt = result;

                    subsFromMod.forEach(element => {
                        const index = subsFromPjt.indexOf(element);
                        if (index !== -1) {
                            saveSub(subsFromPjt[index], idBtn);
                        }
                    });
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

function saveSub(id, idBtn) {
    $.ajax({
        type: 'PUT', // define the type of HTTP verb we want to use (GET for our form)
        url: '/saveSub/' + id,
        contentType: 'application/json',
        data: JSON.stringify({
            "idBtn": idBtn
        }),
        success: function (result) {
            alert("האישור נשלח");
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

//נתינת ציון
function grade(idBtn) {
    var id_pjt = localStorage.getItem('id_pjt')

    var grade = prompt("הכנס ציון:", "");
    if (grade < 0 || grade > 100) {
        alert("הזן רק מספרים");
    }
    else {
        // מביאים את שני המערכים של מסמכי הציונים - מהשופט ומהפרויקט- המסמך הקיים בשני המערכים הוא המסמך ששם צריך לשנות את הציון
        $.ajax({
            type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
            url: '/getGradeIdDoc/' + id_mod,
            success: function (result) {
                var grdsFromMod = result;
                $.ajax({
                    type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
                    url: '/getGradeId/' + id_pjt,
                    success: function (result) {
                        var grdsFromPjt = result;

                        grdsFromMod.forEach(element => {
                            const index = grdsFromPjt.indexOf(element);
                            if (index !== -1) {
                                saveGrd(grdsFromPjt[index], idBtn, grade);
                            }
                        });
                    },
                    error: function (jqXhr, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }
}

function saveGrd(id, idBtn, grade) {
    $.ajax({
        type: 'PUT', // define the type of HTTP verb we want to use (GET for our form)
        url: '/saveGrade/' + id,
        contentType: 'application/json',
        data: JSON.stringify({
            "grd": grade,
            "idBtn": idBtn
        }),
        success: function (result) {
            alert("הציון נשמר בהצלחה");
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}



/*function download_file(fileId) {
    $.ajax({
      url: '/download/' + fileId, // Route on your server to handle download
      method: 'GET',
      success: function (data) {
        console.log(data)
        alert('data')
        // Data should contain the file URL from the server
        if (data) {
          var link = document.createElement('a');
          link.href = data;//.fileURL;
          link.style.display = 'none';
          link.setAttribute('download', ''); // Specify the file should be downloaded
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          console.log('File downloaded successfully!');
        } else {
          console.log('Error: File URL not received from the server.');
        }
      },
      error: function () {
        console.log('Error: Failed to download the file.');
      }
    });
  }*/



// function download_file(fileId) {
//     // var fileId = localStorage.getItem('idFile');
//     console.log('fileId - ', fileId)
//     alert('fileId')
//     $.ajax({
//       url: '/download/' + fileId, // Route on your server to handle download
//       method: 'GET',
//       success: function (data) {
//         console.log('File downloaded successfully!');
//       }
//     });
//   }