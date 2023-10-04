function showPassword(str) {
    var x
    switch(str){
        case 'sdt':
            x = document.getElementById("sdt_pswd_id");
            break;
        case 'mod':
            x = document.getElementById('mod_pswd_id');
            break;
        case 'old':
            x = document.getElementById('old_pwd_or_ID');
            break;
        case 'new':
            x = document.getElementById('id_new_pwd');
            break;
        case 'again':
            x = document.getElementById('id_again_new_pwd');
            break;
        case 'login':
            x = document.getElementById('id_password');
            break;
    }

    if(x.type === 'password'){
        x.type = 'text';
    }
    else{
        x.type = 'password'
    }
}