document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    if (username.length < 6) {
        setError('username', 'Username must be 6 characters or longer.');
        isValid = false;
    } else {
        setSuccess('username');
    }

    if (!validateEmail(email)) {
        setError('email', 'Invalid Email.');
        isValid = false;
    } else {
        setSuccess('email');
    }

    if (!validatePassword(password)) {
        setError('password', 'Password must be at least 8 characters long, include a number, and have a capital letter.');
        isValid = false;
    } else {
        setSuccess('password');
    }

    if (isValid) {
        alert('Registration successful!');
        
    }
});

function setError(field, message) {
    const e = document.getElementById(field).parentElement;
    const b = e.querySelector('small');
    b.innerText = message;
}

function setSuccess(field) {
    const f = document.getElementById(field).parentElement;
    const g = f.querySelector('small');
    g.innerText = '';
}

function validateEmail(email) {
    const vec = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return vec.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const vpc = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return vpc.test(password);
}
