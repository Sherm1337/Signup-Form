let pwd = document.querySelector("#password");
let confPwd = document.querySelector("#confirmPassword");
let nomatchtxt = document.querySelector("#pwdnomatch");


function passConfirm() {
    if (pwd.value !== confPwd.value) {
        nomatchtxt.style.visibility = "visible";       
    } else {
        nomatchtxt.style.visibility = "hidden";
    }
}