$(document).ready(function () {
    var data = localStorage.getItem("data");

    var addProjBtn = document.getElementById("addProjectBtn")
    var addStudentBtn = document.getElementById("addStudentBtn")
    var addModeratorBtn = document.getElementById("addModeratorBtn")

    console.log("data" , data)
    if(data === "student"){
        console.log("check")
        addProjBtn.style.display="none";
        addStudentBtn.style.display = "none";
        addModeratorBtn.style.display = 'none';
    }

    else if(data === "moderator"){
        addStudentBtn.style.display = "none";
        addModeratorBtn.style.display = 'none';
    }
    
    localStorage.setItem("data", data);
});

function addProject(){
    localStorage.setItem("isEdit", 'false');
    window.location.href = "/addproject";
}

function monitoringTbl(){
    window.location.href = "/Monitoring";
}

function projectsList(){
    window.location.href = "/home";
}

function downloadReports(){
    window.location.href = "/template";
}

function addStudent() {
    window.location.href = "/addstudent";
}

function addModerator() {
    window.location.href = "/addmoderator";
}