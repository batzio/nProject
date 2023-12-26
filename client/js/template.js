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






function proposal_upload(id){
    // var b = localStorage.setItem('idFile', '0000');
    // alert('id')
    // console.log(id)
    // alert('id')

    if(id == ""){
        id = id_sdt
        // console.log(id)
        // alert('id is empty')
    }
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('propFileInput').files[0];
    // Append the file to the formData
    formData.append('proposal_rpt', file);
    // var id = document.get

    $.ajax({
        url: '/uploadProposalRep/' + id,
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

function alfa_upload(id) {
    // localStorage.setItem('idFile', '0001');
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('alfaFileInput').files[0];
    // Append the file to the formData
    formData.append('alfa_rpt', file);

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

function beta_upload(id){
    // localStorage.setItem('idFile', '0010');
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('betaFileInput').files[0];
    // Append the file to the formData
    formData.append('beta_rpt', file);
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

function final_upload(id){
    // localStorage.setItem('idFile', '0011');
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('finalFileInput').files[0];
    // Append the file to the formData
    formData.append('final_rpt', file);

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


function download_file(fileId) {
    // var fileId = localStorage.getItem('idFile');
    console.log('fileId - ', fileId)
    alert('fileId')
    $.ajax({
      url: '/download/' + fileId, // Route on your server to handle download
      method: 'GET',
      success: function () {
        console.log('File downloaded successfully!');
      }
    });
  }

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