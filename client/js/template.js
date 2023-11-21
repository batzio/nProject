function proposal_upload(){
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('propFileInput').files[0];
    // Append the file to the formData
    formData.append('proposal_rpt', file);

    $.ajax({
        url: '/uploadProposalRep',
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

function alfa_upload() {
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('alfaFileInput').files[0];
    // Append the file to the formData
    formData.append('alfa_rpt', file);

    $.ajax({
        url: '/uploadAlfaRep',
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

function beta_upload(){
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('betaFileInput').files[0];
    // Append the file to the formData
    formData.append('beta_rpt', file);

    $.ajax({
        url: '/uploadBetaRep',
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

function final_upload(){
    const formData = new FormData();  // Create a new FormData object
    // Assuming 'fileInput' is the id of file input element
    const file = document.getElementById('finalFileInput').files[0];
    // Append the file to the formData
    formData.append('final_rpt', file);

    $.ajax({
        url: '/uploadFinalRep',
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