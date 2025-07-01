// We’ll store all data in a single JS object:
const formData = {
  fullName: '',
  email: '',
  age: '',
  username: '',
  password: ''
};

// Use a currentStep variable to track the active card.
let currentStep = 0;

// Create a function to toggle visibility of cards
function showStep(step) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.classList.toggle("hidden", index !== step);
  });
}

// Create a function to validate the input
function validateStep(step) {
  // If we are on card 1
  if (step === 0) {
    const name = document.getElementById("names").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();

    if (name.length < 2) {
      alert("Full Name must be at least 2 characters.");
      return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Email must contain @ and .");
      return false;
    }
    if (age && isNaN(age)) {
      alert("Age must be a number.");
      return false;
    }

    // Save to formData
    formData.fullName = name;
    formData.email = email;
    formData.age = age;
  }

  // If we are on card 2
  if (step === 1) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confPass = document.getElementById("conf_pass").value;

    if (username.length < 3) {
      alert("Username must be at least 3 characters.");
      return false;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return false;
    }
    if (password !== confPass) {
      alert("Passwords do not match.");
      return false;
    }

    // Save to formData
    formData.username = username;
    formData.password = password;
  }

  return true;
}

// Function for the "next" button
function goNext() {
  // Validate input
  if (!validateStep(currentStep)) return;

  if (currentStep === 1) {
    // Fill review step
    document.getElementById("review-fullName").innerText = formData.fullName;
    document.getElementById("review-email").innerText = formData.email;
    document.getElementById("review-age").innerText = formData.age;
    document.getElementById("review-username").innerText = formData.username;
  }

  currentStep++;
  showStep(currentStep);
}

// Function for the "Go Back" button
function goBack() {
  currentStep--;
  showStep(currentStep);
}

// Funtion for the "Submit" button
function submit() {
  currentStep++;
  showStep(currentStep);    
}

// Show the first card when page loads
document.addEventListener("DOMContentLoaded", () => {
  showStep(0);
});