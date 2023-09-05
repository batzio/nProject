function sub() {
  var username = document.getElementById("id_username").value;
  var password = document.getElementById("id_password").value;

  if (password == '0000') {
    alert('in 0000')
    resetPassword(); // Wait for resetPassword to complete before proceeding.
  }

  else {
    // alert('in else')
    $.ajax({
      type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
      url: '/getStudentPwd/' + password,
      contentType: 'application/json',
      success: function (result) {
        // console.log('JSON.stringify(result[0]) - '+JSON.stringify(result[0]))
        // alert('in else check')
        if (JSON.stringify(result[0]) == undefined) {
          alert('in undefined')
          login_mod(username, password);
          // return;
        }
        else if (result[0].username == username && result[0].password == password) {
          localStorage.setItem("data", "student")
          location.href = "/assigAndsubDats"
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
  alert('in log_mod')
  $.ajax({
    type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
    url: '/getModeratorPwd/' + password,
    contentType: 'application/json',
    success: function (result) {
      // console.log('in success in log_mod - ' + result[0])
      // alert('in if')
      if (result[0].username == username && result[0].password == password) {
        // console.log('username - ' + result[0].username + ' password - ' + result[0].password + ' id - ' + result[0].mod_ID)
        // console.log('is_coor(result[0].mod_ID) - ' + is_coor(result[0].mod_ID))
        // alert('in else - if its coor')
        is_coor(result[0].mod_ID)
        // console.log('is_coor(result[0].mod_ID) - ' + is_coor(result[0].mod_ID))
        //   alert('is_coor(result[0].mod_ID)')
        // if (is_coor(result[0].mod_ID)) {
        //   // console.log('is_coor(result[0].mod_ID) - ' + is_coor(result[0].mod_ID))
        //   // alert('is_coor(result[0].mod_ID)')
        //   localStorage.setItem("data", "coordinator");
        // }
        // else {
        //   localStorage.setItem("data", "moderator");
        // }
        // window.location.href = "/assigAndsubDats";
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


function is_coor(id) {
  console.log('id - ' + id)
  alert('in is_coor')
  $.ajax({
    type: 'GET', // define the type of HTTP verb we want to use (GET for our form)
    url: '/getCoodinator',///' + id,
    contentType: 'application/json',
    success: function (result) {
      if (result[0].coo_ID == id) {
        localStorage.setItem("data", "coordinator");
      }
      else {
        localStorage.setItem("data", "moderator");
      }
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
  window.location.href = '/changepassword';
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
