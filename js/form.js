var xhr = new XMLHttpRequest();

function signUpSubmit(firstName, lastName, email, password, mobile) {
    var parems = {
        firstName : firstName.value,
        lastName: lastName.value,
        email_address: email.value,
        password: password.value,
        mobile: mobile.value
    }
    xhr.open('POST', 'http://localhost:8080/api/v1/signup');
    xhr.setRequestHeader('Content-Type', 'aaplication/json;charset=UTF-8');
    xhr.send(JSON.stringify(parems));
    xhr.onreadystatechange = sendRequest;
}

function sendRequest() {
    console.log(xhr.readyState);
}