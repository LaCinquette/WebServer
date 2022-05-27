// import SuperTokens from 'supertokens-website';
// SuperTokens.init({    apiDomain: "http://localhost:3000",    apiBasePath: "/auth"});

function signup() {
    const email = document.getElementById("signup").elements["email"].value
    const password = document.getElementById("signup").elements["password"].value
    const name = document.getElementById("signup").elements["name"].value
    const company = document.getElementById("signup").elements["company"].value
    const body = {
        formFields: [
        { id: 'email', value: email },
        { id: 'password', value: password },
        { id: 'name', value: name },
        { id: 'company', value: company },
        ],
    };
    const bodyJson = JSON.stringify(body);
    console.log(bodyJson);

    fetch('/auth/signup', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: bodyJson,
    })
    .then((resp) => {
        console.log(resp);
        if (resp.status !== 200) {
            console.log('Error');
        }
        return resp.json();
    })
    .then((resp) => {
    console.log(resp);
        if (resp.status === 'OK') {
            location.replace('/');
        } else {
            console.log('Error');
        }
    });
}

function signin() {
    const email = document.getElementById("signin").elements["email"].value
    const password = document.getElementById("signin").elements["password"].value
    const body = {
        formFields: [
        { id: 'email', value: email },
        { id: 'password', value: password },
        ],
    };
    const bodyJson = JSON.stringify(body);
    // console.log(bodyJson);

    fetch('/auth/signin', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: bodyJson,
    })
    .then((resp) => {
        console.log(resp);
        if (resp.status !== 200) {
            console.log('Error');
        }
        return resp.json();
    })
    .then((resp) => {
        console.log(resp);
        if (resp.status === 'OK') {
            location.replace('/');
        } else {
            console.log('Error');
        }
    });
}

const signInButton = document.getElementById("signInButton")
signInButton.addEventListener("click", (event) => {
    event.preventDefault()

    signin();
})

const signUpButton = document.getElementById("signUpButton")
signUpButton.addEventListener("click", (event) => {
    event.preventDefault()

    signup();
})