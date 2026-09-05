const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", login);

async function login(event) {
    
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3333/login/user", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            email: email,
            password: password

        })

    });

    const data = await response.json();

    console.log(data);

}