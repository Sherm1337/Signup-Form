let pwd = document.querySelector("#password");
let confPwd = document.querySelector("#confirmPassword");
let nomatchtxt = document.querySelector("#pwdnomatch");

let confborder = document.querySelector(".text-input confpwd");
let pwdborder = document.querySelector(".text-input pwd");

function passConfirm() {
    if (pwd.value !== confPwd.value) {
        nomatchtxt.style.visibility = "visible";
        console.log("pwdconf all good");
    } else {
        nomatchtxt.style.visibility = "hidden";
        console.log('not working');
    }
}