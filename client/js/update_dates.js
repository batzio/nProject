jQuery(function ($) {

    // document.getElementById("proposal").style.display = 'none';           // Hide

    // document.getElementById('okBtn').onclick = function (data) {
    //     // alert("button was clicked");
    //     window.location.href = "/assigAndsubDats";
    // }
});

function submittingAProposalReport() {
    alert('submittingAProposalReport')
    document.getElementById("proposal").style.display = 'block';          // Show
    // var proposal_date = document.getElementById("proposal_id").value;
    // localStorage.setItem("proposal_date", proposal_date);
    // localStorage.setItem("date", "proposal_date");
    // console.log('proposal_date - ', proposal_date)
    // alert('proposal_date')
    // sentDate();
}

function submittingAnAlfaReport() {
    document.getElementById("alfa").style.display = 'block';          // Show
    // var alfa_date = document.getElementById("alfa_id").value;
    // localStorage.setItem("alfa_date", alfa_date);
    // localStorage.setItem("date", "alfa_date");
    // window.location.href = "/assigAndsubDats";
}

function submittingABetaReport() {
    document.getElementById("beta").style.display = 'block';          // Show
    var beta_date = document.getElementById("beta_id").value;
    localStorage.setItem("beta_date", beta_date);
    localStorage.setItem("date", "beta_date");
    window.location.href = "/assigAndsubDats";
}

function submittingAFinalReport() {
    document.getElementById("final").style.display = 'block';          // Show
    var final_date = document.getElementById("final_id").value;
    localStorage.setItem("final_date", final_date);
    localStorage.setItem("date", "final_date");
    window.location.href = "/assigAndsubDats";
}

function presentationOfTheProject() {
    document.getElementById("presentation").style.display = 'block';          // Show
    var presentation_date = document.getElementById("presentation_id").value;
    localStorage.setItem("presentation_date", presentation_date);
    localStorage.setItem("date", "presentation_date");
    window.location.href = "/assigAndsubDats";
}

function sentDate() {
    if (document.getElementById('proposal').style.display === 'block') {
        var proposal_date = document.getElementById("proposal_id").value;
        if (proposal_date != "") {
            localStorage.setItem("proposal_date", proposal_date);
            localStorage.setItem("date", "proposal_date");
            window.location.href = "/assigAndsubDats";
        }
        else {
            alert('יש לסמן תאריך להגשה');
        }
    }

    else if (document.getElementById("alfa").style.display === 'block') {
        var alfa_date = document.getElementById("alfa_id").value;
        if (alfa_date != "") {
            localStorage.setItem("alfa_date", alfa_date);
            localStorage.setItem("date", "alfa_date");
            window.location.href = "/assigAndsubDats";
        }
        else {
            alert('יש לסמן תאריך להגשה');
        }
    }

    else if (document.getElementById("beta").style.display === 'block') {
        var beta_date = document.getElementById("beta_id").value;
        if (beta_date != "") {
            localStorage.setItem("beta_date", beta_date);
            localStorage.setItem("date", "beta_date");
            window.location.href = "/assigAndsubDats";
        }
        else {
            alert('יש לסמן תאריך להגשה');
        }
    }

    else if (document.getElementById("final").style.display === 'block') {
        var final_date = document.getElementById("final_id").value;
        if (final_date != "") {
            localStorage.setItem("final_date", final_date);
            localStorage.setItem("date", "final_date");
            window.location.href = "/assigAndsubDats";
        }
        else {
            alert('יש לסמן תאריך להגשה');
        }
    }

    else if (document.getElementById("presentation").style.display === 'block') {
        var presentation_date = document.getElementById("presentation_id").value;
        if (presentation_date != "") {
            localStorage.setItem("presentation_date", presentation_date);
            localStorage.setItem("date", "presentation_date");
            window.location.href = "/assigAndsubDats";
        }
        else {
            alert('יש לסמן תאריך להגשה');
        }
    }

}