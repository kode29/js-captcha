// Select necessary DOM elements
const captchaTextBox = document.querySelector('.captcha_box input');
const captchaInputBox = document.querySelector('.captcha_input input');
const refreshButton = document.querySelector('.refresh_button');
const message = document.querySelector('.message');
const submitButton = document.querySelector('.button');

// Variable to store generated captcha
let captchaText = null

// function to generate captcha
const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2,7);
    const randomStringArray = randomString.split("");
    // Randomly make letters uppercase
    const changeString = randomStringArray.map((char) => Math.random() > 0.5? char.toUpperCase() : char);
    captchaText = changeString.join(" ");
    captchaTextBox.value = captchaText;
    // console.log(randomString, changeString);
}

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
}

const captchaKeyUpValidate = () => {
    // Toggle submit button disable class based on captcha input field
    submitButton.classList.toggle("disabled", !captchaInputBox.value);

    if (captchaInputBox.value === ""){
        message.classList.remove("active");
    }
}

// function to validate the entered captcha
const submitBtnClick = () => {
    captchaText = captchaText.split("")
    .filter(char => char !== " ")
    .join("");
    message.classList.add("active");
    // console.log(captchaText);
    if (captchaInputBox.value === captchaText){
        message.innerText = "Correct!";
        message.style.color = '#696de3';
        // If you want to do something else, put LOGIC here
    } else {
        message.innerText = "Not Correct";
        message.style.color = '#ff2525';
    }
}


// Add event listeners for the refresh button, captchaInputBox, submit biutton
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

// generate random captcha when the page loads
generateCaptcha();
