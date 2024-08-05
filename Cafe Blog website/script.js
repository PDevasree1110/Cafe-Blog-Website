 
  // JavaScript for Responsive Navigation Bar
  document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const menuLinks = document.querySelector('.menu-links');
  
    // Toggle menu on hamburger button click
    hamburgerBtn.addEventListener('click', function() {
      menuLinks.classList.add('active');
    });
  
    // Close menu on close button click
    closeMenuBtn.addEventListener('click', function() {
      menuLinks.classList.remove('active');
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuLinks.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        menuLinks.classList.remove('active');
      }
    });
  });
  
  // JavaScript for Order Now Button
  document.addEventListener('DOMContentLoaded', function() {
    const orderNowButton = document.querySelector('.hero-section button');
  
    orderNowButton.addEventListener('click', function() {
      alert('Thank you for your order! We will get in touch with you soon.');
      // You can also redirect to another page or form here if needed
      // window.location.href = 'order-page.html';
    });
  });
  
  // JavaScript for Contact Form Submission
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-page form');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting the traditional way
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Simple form validation
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Here, you can handle form submission with AJAX or another method
      alert('Your message has been sent! We will get back to you shortly.');
  
      // Clear the form fields after submission
      contactForm.reset();
    });
  });
