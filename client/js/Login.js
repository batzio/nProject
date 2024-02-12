function sub() {
  var username = document.getElementById("id_username").value;
  var password = document.getElementById("id_password").value;

  if (password == '0000') {
    // alert('in 0000')
    resetPassword(); // Wait for resetPassword to complete before proceeding.
  }

  else {
    alert('in else')
    $.ajax({
      type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
      url: '/getStudentPwd/' + password,
      contentType: 'application/json',
      success: function (result) {
        // alert('in else check')
        console.log('result[0] - '+result[0])
        if (JSON.stringify(result[0]) == undefined) {
        // alert('in else check')
          login_mod(username, password);
        }
        else if (result[0].username == username && result[0].password == password) {
          // console.log(result[0]);
          // console.log(result[0].password);
          alert("success to bring student")
          localStorage.setItem("data", "student")
          var name = result[0].sdt_firstName + " " + result[0].sdt_lastName;
          localStorage.setItem("name", name);
          localStorage.setItem("stdID", result[0].sdt_ID);
          // console.log(result[0].sdt_ID)
          window.location.href = "/assigAndsubDats";
          alert(name)
        }
        else {
          alert('שם משתמש ו/או הסיסמה שגויים')
        }
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }
}

function login_mod(username, password) {
  // console.log('username - ' + username + ' password - ' + password)
  alert('in log_mod')
  $.ajax({
    type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
    url: '/getModeratorPwd/' + password,
    success: function (result) {
      console.log(result)
      alert('result[0]')
      alert('before is_coor - in success')
      if (result[0].username == username && result[0].password == password) {
        var name = result[0].mod_firstName + " " + result[0].mod_lastName;
        alert('before is_coor')
        is_coor(result[0].mod_ID, name, result[0]._id);
      }
      else {
        alert('שם משתמש ו/או הסיסמה שגויים')
      }
    },
    error: function (jqXhr, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
}


function is_coor(id, name, modID) {
  // console.log('id - ' + id)
  alert('in is_coor')
  $.ajax({
    type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
    url: '/getCoodinator',///' + id,
    contentType: 'application/json',
    success: function (result) {
      // console.log('result[0] - ',result[0])
      // alert('result[0] - in is_coor')
      if (result[0].coo_ID == id) {
        localStorage.setItem("data", "coordinator");
      }
      else {
        localStorage.setItem("data", "moderator");
      }
      localStorage.setItem("name", name)
      localStorage.setItem("modID", modID)
      window.location.href = "/assigAndsubDats";
      // console.log('is_coor - ' + JSON.stringify(result[0]) )
      // alert('in success of is_coor')
      // return true;
    },
    error: function (jqXhr, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
}


function resetPassword() {
  alert('in reset')
  var username = document.getElementById("id_username").value;
  localStorage.setItem('username', username);
  location.href = '/changepassword';
  alert('in reset after all')
}



// async function sub() {
//   var username = document.getElementById("id_username").value;
//   var password = document.getElementById("id_password").value;
//   if (password == '0000') {
//     await resetPassword(); // Wait for resetPassword to complete before proceeding.
//   }

//   else {
//     try {
//       const result = await $.ajax({
//         type: 'GET',
//         url: '/getStudentPwd/' + password,
//         contentType: 'application/json'
//       });

//       if (JSON.stringify(result[0]) === undefined) {
//         // console.log('אין סטודנט כזה', JSON.stringify(result[0]));
//         // alert('in sub before add_mod');
//         await add_mod(username, password); // Wait for add_mod to complete before proceeding.
//         return;
//       } else if (result[0].username === username && result[0].password === password) {
//         localStorage.setItem("data", "student");
//         // localStorage.setItem("first_name", result[0].sdt_firstName);
//         // localStorage.setItem("last_name", result[0].sdt_lastName);
//         location.href = "/assigAndsubDats";
//       } else {
//         alert('שם משתמש ו/או הסיסמה שגויים');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// async function add_mod(username, password) {
//   // alert('in add_mod');
//   try {
//     const result = await $.ajax({
//       type: 'GET',
//       url: '/getModeratorPwd/' + password,
//       contentType: 'application/json'
//     });

//     if (result[0].username === username && result[0].password === password) {
//       if (result[0].mod_isCoordinator) {
//         localStorage.setItem("data", "coordinator");
//       } else {
//         localStorage.setItem("data", "moderator");
//       }
//       localStorage.setItem("first_name", result[0].mod_firstName);
//       localStorage.setItem("last_name", result[0].mod_lastName);
//       window.location.href = "/assigAndsubDats";
//     } else {
//       alert('שם משתמש ו/או הסיסמה שגויים');
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function resetPassword() {
//   // alert('in reset');
//   var username = document.getElementById("id_username").value;
//   localStorage.setItem('username', username);
//   console.log('username - ' + username)
//   alert('k')
//   window.location.href = '/resetpassword';
//   // alert('after reset');
// }

//   // Now call the executeCodeSynchronously function when you want to run the code synchronously.
//   executeCodeSynchronously();
