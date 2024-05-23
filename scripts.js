var users = []

document.getElementById('signUp').addEventListener('click', () => {
    document.querySelector('.container').classList.add('right-panel-active');
});

document.getElementById('signIn').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('right-panel-active');
});

function addUser() {
    var userNameIn1 = document.getElementById('in1').value;
    var passwordIn2 = document.getElementById('in2').value;
    var isUserExist = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == userNameIn1) {
            document.getElementById('s1').innerHTML = "This username already has an account";
            return false;
        }
    }

    if (passwordIn2.length < 8) {
        document.getElementById('s1').innerHTML = "Password must contain at least 8 characters";
        return false;
    } else {
        var user = {};
        user.username = userName
    }