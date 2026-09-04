const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", register);

async function register(event) {
    
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const response = await fetch("http://localhost:3333/register/user", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            email: email,
            password: password

        })

    });

}