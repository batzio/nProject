function subLogin() {
    $(document).on('click', 'input[type="checkbox"]', function () {
        $('input[type="checkbox"]').not(this).prop('checked', false);
    });
    var coordinator = document.getElementById("coordinator");
    var moderator = document.getElementById("moderator");
    var student = document.getElementById("student");

    if (coordinator.checked) {
        localStorage.setItem("data", "coordinator");
    }

    if (moderator.checked) {
        localStorage.setItem("data", "moderator");
    }
    if (student.checked) {
        localStorage.setItem("data", "student");
    }
    window.location.href = "/assigAndsubDats";
}