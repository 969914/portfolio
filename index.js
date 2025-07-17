// Theme Toggle with LocalStorage
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'light') {
    document.body.classList.add('light');
    document.querySelector('.toggle-btn').textContent = '🌙 Dark Mode';
  }

  // Typed.js Init
  new Typed('#element', {
    strings: ['Frontend Developer', 'Computer Engineering Student'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });

  // AOS Init
  AOS.init({
    duration: 1000,
    once: true
  });
});

const profilePic = document.getElementById("profilePic");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("fullImage");

 profilePic.onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }

  function closeModal() {
    modal.style.display = "none";
  }
// Theme toggle function
function toggleMode() {
  const body = document.body;
  const btn = document.querySelector('.toggle-btn');
  body.classList.toggle('light');

  if (body.classList.contains('light')) {
    btn.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  } else {
    btn.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  }
}
/*document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('name').value = localStorage.getItem('contactName') || '';
  document.getElementById('email').value = localStorage.getItem('contactEmail') || '';
  document.getElementById('message').value = localStorage.getItem('contactMessage') || '';
});*/

// Save form data on submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual submission (you can remove this if you're sending to backend)

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  localStorage.setItem('contactName', name);
  localStorage.setItem('contactEmail', email);
  localStorage.setItem('contactMessage', message);

  alert("Contact form data saved to local storage!");

  this.reset(); // Optional: clear the form after saving

});
 function toggleNavbar() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
  }