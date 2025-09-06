
// PART 1: EVENT HANDLING

// 1. Show hidden welcome message when button is clicked
const welcomeBtn = document.getElementById("welcome-btn");
const welcomeMessage = document.getElementById("welcome-message");

welcomeBtn.addEventListener("click", () => {
  welcomeMessage.style.display =
    welcomeMessage.style.display === "none" ? "block" : "none";
});

// 2. Toggle theme (light/dark mode)
const themeBtn = document.getElementById("theme");
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// PART 2: INTERACTIVE ELEMENTS

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling; // find matching answer <p>
    answer.style.display =
      answer.style.display === "none" ? "block" : "none";
  });
});

// Dropdown menu (just log selection to show interactivity)
const moviesList = document.getElementById("movies-list");
moviesList.addEventListener("change", () => {
  if (moviesList.value) {
    alert(`You chose ${moviesList.value}`);
  }
});

// PART 3: FORM VALIDATION
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login");

// Error elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError"); 

const loginMsg = document.getElementById('login-msg');

// clear error messages
function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
}

function validateForm() {
    let valid = true;
    clearErrors(); // reset

    // Name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;}
    if(nameInput.value.length < 3){
        nameError.textContent = 'Name must be at least 3 characters long'; 
        valid = false;
    }

    // Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    // Password
    if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    }

    return valid;
}

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (validateForm()) {
        loginMsg.textContent = 'Logged in successfully!';
        loginMsg.style.color = 'green'; 

        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    
    }
}); 
