// Show message when button is clicked (if used)
function showMessage() {
  document.getElementById("message").innerText = "🎉 You clicked the button!";
}

// Handle form submission
function submitForm(event) {
  event.preventDefault(); // stops the page from refreshing

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const responseMessage = `Thanks, ${name}! I received your message and will get back to you at ${email} soon.`;
  document.getElementById("response").innerText = responseMessage;

  // Clear the form
  document.getElementById("contactForm").reset();
}

// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Close mobile menu when clicking nav links (optional but useful)
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const navMenu = document.getElementById('navLinks');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('show');
    });
  });

  // Optional: connect the contact form submit event safely
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", submitForm);
  }
});
