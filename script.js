let pwd = document.querySelector("#password").value;
let confPwd = document.querySelector("#confirmPassword").value;

function passConfirm() {
    if (pwd !== confPwd) {
        console.log("working");
    } else {
        console.log('not working');
    }
}