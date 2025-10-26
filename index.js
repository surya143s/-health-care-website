// ===== Mobile Menu Toggle =====
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
const closeMenu = document.getElementById('close-menu');

mobileMenu.addEventListener('click', () => {
  navbar.classList.add('active');
});
closeMenu.addEventListener('click', () => {
  navbar.classList.remove('active');
});

// ===== Appointment Form Validation =====
const bookBtn = document.getElementById('bookBtn');
const message = document.getElementById('message');

bookBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const doctor = document.getElementById('doctor').value;

  if (name && email && phone && date && time && doctor) {
    message.style.color = "green";
    message.textContent = "✅ Appointment booked successfully!";
    alert("Appointment booked successfully!");
    // Clear form
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('date').value = "";
    document.getElementById('time').value = "";
    document.getElementById('doctor').value = "";
  } else {
    message.style.color = "red";
    message.textContent = "⚠️ Please fill all the details correctly!";
    alert("⚠️ Fill the all details");
  }
});


// // contact

// Select the form
const form = document.getElementById('contactForm');

function fun(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if(!name || !email || !phone || !subject || !message) {
        alert("Please fill all fields.");
        return;
    }
    // Success
    alert(`Thank you ${name}! Your message has been sent.`);
    
}
