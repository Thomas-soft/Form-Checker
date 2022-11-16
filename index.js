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
                name_error.textContent = "Votre pseudo doit contenir entre 3 et 20 caractères et pas de caractères spéciales.";
                good[0] = false;
            }
            else
            {
                name_error.textContent = "";
                good[0] = true;
            }
        }
        if (e.target.id === "email_input")
        {
            if (email_input.value.match(/^[\w._-]+@[\w-]+\.[a-z]{2,4}$/i))
            {
                email_error.textContent = "";
                good[1] = true;
            }
            else
            {
                email_error.textContent = "Email invalide.";
                good[1] = false;
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
            if (input.value.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\W])(?=.*?[\d])/) && input.value.length >= 8)
            {
                password_error.textContent = "";
                good[2] = true;
            }
            else
            {
                password_error.textContent = "Minimum de 8 caractères, une majuscule et un caractère spécial.";
                good[2] = false;
            }
        }
        if (e.target.id === "cPassword_input")
        {
            if (password_input.value === input.value)
            {
                cPassword_error.textContent = "";
                good[3] = true;
            }
            else
            {
                cPassword_error.textContent = "Le mot de passe n'est pas le même.";
                good[3] = false;
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