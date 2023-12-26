jQuery(function ($) {
    var data = localStorage.getItem("data");
    localStorage.setItem("data", data);

    var addProjBtn = document.getElementById("addProjectBtn")
    var addStudentBtn = document.getElementById("addStudentBtn")
    var addModeratorBtn = document.getElementById("addModeratorBtn")
    var updateDatesBtn = document.getElementById("updateDatesBtn");

    console.log("data", data)
    if (data === "student") {
        addProjBtn.style.display = "none";
        addStudentBtn.style.display = "none";
        addModeratorBtn.style.display = 'none';
        updateDatesBtn.style.display = "none";
    }

    else if (data === "moderator") {
        addStudentBtn.style.display = "none";
        addModeratorBtn.style.display = 'none';
        updateDatesBtn.style.display = "none";
    }

    localStorage.setItem("data", data);

    var date = localStorage.getItem("date");
    console.log('date - ', date);
    // alert('date');

    if (date === "proposal_date") {
        var proposal_date = localStorage.getItem("proposal_date");
        console.log('proposal_date - ', proposal_date);
        // alert('proposal_date');
        if (proposal_date != "") {
            document.getElementById('proposal_id').value = proposal_date;
            document.getElementById("proposal_id").innerHTML = proposal_date;
        }

    }

    else if (date === "alfa_date") {
        var alfa_date = localStorage.getItem("alfa_date");
        console.log('alfa_date - ', alfa_date);
        // alert('alfa_date');
        if (alfa_date != "") {
            document.getElementById('alfa_id').value = alfa_date;
            document.getElementById("alfa_id").innerHTML = alfa_date;
        }

    }

    else if (date === "beta_date") {
        var beta_date = localStorage.getItem("beta_date");
        console.log('beta_date - ', beta_date);
        // alert('beta_date');
        if (beta_date != "") {
            document.getElementById('beta_id').value = beta_date;
            document.getElementById("beta_id").innerHTML = beta_date;
        }

    }

    else if (date === "final_date") {
        var final_date = localStorage.getItem("final_date");
        console.log('final_date - ', final_date);
        // alert('final_date');
        if (final_date != "") {
            document.getElementById('final_id').value = final_date;
            document.getElementById("final_id").innerHTML = final_date;
        }

    }

    else if (date === "presentation_date") {
        var presentation_date = localStorage.getItem("presentation_date");
        console.log('presentation_date - ', presentation_date);
        // alert('presentation_date');
        if (presentation_date != "") {
            document.getElementById('presentation_id').value = presentation_date;
            document.getElementById("presentation_id").innerHTML = presentation_date;
        }

    }
});

function addProject() {
    var modID = localStorage.getItem("modID");
    localStorage.setItem("modID", modID);
    localStorage.setItem("isEdit", 'false');
    var name = localStorage.getItem("name");
    localStorage.setItem("name", name);
    window.location.href = "/addproject";
}

function monitoringTbl() {
    var sdt = localStorage.getItem("stdID")
    localStorage.setItem('stdID', sdt)
    window.location.href = "/Monitoring";
}

function projectsList() {
    var modID = localStorage.getItem("modID");
    localStorage.setItem("modID", modID);
    var name = localStorage.getItem("name")
    localStorage.setItem("name", name);
    window.location.href = "/home";
}

function downloadReports() {
    window.location.href = "/template";
}

function addStudent() {
    window.location.href = "/addstudent";
}

function addModerator() {
    window.location.href = "/addmoderator";
}

function updateDates() {
    window.location.href = "/updateDates";
}