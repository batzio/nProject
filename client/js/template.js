// function upload_files(fileId){
//     var fileInput;
//     var rptName;
//     if(fileId === '0000'){
//         fileInput = 'propFileInput';
//         rptName = 'proposal_rpt';
//     }
//     else if( fileId === '0001'){
//         fileInput = 'alfaFileInput';
//         rptName = 'alfa_rpt'
//     }
//     else if(fileId === '0010'){
//         fileInput = 'betaFileInput';
//         rptName = 'beta_rpt'
//     }
//     else if(fileId === '0011'){
//         fileInput = 'finalFileInput';
//         rptName = 'final_rpt';
//     }

//     const formData = new FormData();  // Create a new FormData object
//     const file = document.getElementById(fileInput).files[0];
//     formData.append(rptName, file);

//     $.ajax({
//         url: '/uploadRepFiles/' + fileId + '/' + rptName,
//         type: 'POST',
//         data: formData,
//         contentType: false,
//         processData: false,
//         success: function (data, textStatus, jQxhr) {
//             // alert('in success in upload_files')
//             location.reload();
//         }
//     });
// }

// jQuery(function ($) {
//     con
// })

const id_sdt = localStorage.getItem('stdID')






function proposal_upload(id) {
    // var flag = false;
    if (id == "") {
        id = id_sdt;
        // flag = true;
    }
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('propFileInput').files[0];

    const fileName = 'proposal_rpt-' + id + '.pdf';

    // Append the file to the formData
    formData.append('proposal_rpt', file);//, fileName);
    // var id = document.get

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
            // location.reload();
        }
    });
}

function alfa_upload(id) {
    // localStorage.setItem('idFile', '0001');
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('alfaFileInput').files[0];

    const fileName = 'alfa_rpt-' + id + '.pdf';

    // Append the file to the formData
    formData.append('alfa_rpt', file, fileName);

    $.ajax({
        url: '/uploadAlfaRep/' + id,
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (data, textStatus, jQxhr) {
            // alert('in success in upload_files')
            location.reload();
        }
    });
}

function beta_upload(id) {
    // localStorage.setItem('idFile', '0010');
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('betaFileInput').files[0];

    //  להוסיף את השורה שמשנה את השם של הקובץ ולשנות תשם לסוג הקובץ + המזהה שלו

    // Set the desired filename (you can modify this part)
    const fileName = 'beta_rpt-' + id + '.pdf';

    // Append the file to the formData
    formData.append('beta_rpt', file, fileName);
    $.ajax({
        url: '/uploadBetaRep/' + id,
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (data, textStatus, jQxhr) {
            // alert('in success in upload_files')
            location.reload();
        }
    });
}

function final_upload(id) {
    // localStorage.setItem('idFile', '0011');
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('finalFileInput').files[0];

    const fileName = 'final_rpt-' + id + '.pdf';

    // Append the file to the formData
    formData.append('final_rpt', file, fileName);

    $.ajax({
        url: '/uploadFinalRep/' + id,
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (data, textStatus, jQxhr) {
            // alert('in success in upload_files')
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

//   function beforeppp() {
//     // var id = localStorage.getItem('id')
//     const d = new Date();
//     var date = d.getDate() + '.' + (d.getMonth()+1) + '.' + d.getFullYear()
//     var time = d.getHours() + '.' + d.getMinutes() + "." + d.getSeconds() + "." + d.getMilliseconds()
//     var fullTime = date + " " + time;
//     var name = 'alfa_rpt-' + fullTime + '.pdf'
//     console.log('name - ', name)
//     alert('name')
//     // add_to_student(id, name);
//   }