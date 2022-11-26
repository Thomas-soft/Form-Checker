// Votre pseudo doit contenir entre 3 et 20 caractères.
// Email invalide.
// Minimum de 8 caractères, une majuscule et un caractère spécial.

const inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='password']");
let good = [false, false, false, false];

inputs.forEach(input =>
{
    input.addEventListener("input", (e) =>
    {
        if (e.target.id === "name_input")
        {
            if (input.value.length > 0 && (input.value.length < 3 || input.value.length > 20 || !input.value.match(/^[éèâïùça-zA-Z0-9\_-]+$/)))
            {
                name_error.style.visibility = "visible";
                good[0] = false;
                name_input.style.color = "red";
            }
            else
            {
                name_error.style.visibility = "hidden";
                good[0] = true;
                name_input.style.color = "white";
            }
        }
        if (e.target.id === "email_input")
        {
            if (email_input.value.length > 0 && !email_input.value.match(/^[\w._-]+@[\w-]+\.[a-z]{2,4}$/i))
            {
                email_error.style.visibility = "visible";
                good[1] = false;
                email_input.style.color = "red";
            }
            else
            {
                email_error.style.visibility = "hidden";
                good[1] = true;
                email_input.style.color = "white";
            }
        }
        if (e.target.id === "password_input")
        {
            bar.className = "";
            if (input.value.length === 0)
            {
                bar.classList.add("bar-normal");
            }
            else if (input.value.length < 4)
            {
                bar.classList.add("bar-low");
            }
            else if (input.value.length < 8)
            {
                bar.classList.add("bar-medium");
            }
            else if (input.value.length >= 8)
            {
                bar.classList.add("bar-up");
            }
            if (input.value.length > 0 && (!input.value.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\W])(?=.*?[\d])/) && input.value.length <= 8))
            {
                password_error.style.visibility = "visible";
                good[2] = false;
                password_input.style.color = "red";
            }
            else
            {
                password_error.style.visibility = "hidden";
                good[2] = true;
                password_input.style.color = "white";
            }
        }
        if (e.target.id === "cPassword_input")
        {
            if (password_input.value === input.value)
            {
                cPassword_error.style.visibility = "hidden";
                good[3] = true;
                cPassword_input.style.color = "white";
            }
            else
            {
                cPassword_error.style.visibility = "visible";
                good[3] = false;
                cPassword_input.style.color = "red";
            }
        }
    });
});

form.addEventListener("submit", (e) =>
{
    e.preventDefault();

    if (good.every(element => element === true))
    {
        const object = {}
    
        inputs.forEach(input =>
            {
                object[`${input.name}`] = input.value;
            })
    
        console.log(object);
    }
    else
    {
        alert("Veuillez remplir correctement les champs.");
    }
});