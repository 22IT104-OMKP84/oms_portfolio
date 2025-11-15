// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  updateThemeIcon();
});

function updateThemeIcon() {
  const icon = themeToggle.querySelector('i');
  if (body.getAttribute('data-theme') === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.querySelector('i').classList.remove('fa-times');
  });
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('active');
  } else {
    scrollTopBtn.classList.remove('active');
  }
});

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Wait for DOM and EmailJS to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init("uoDsefYekCeJcsWmJ");
  } else {
    console.error('EmailJS library not loaded');
  }
});

// Form Submission with EmailJS
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnLoader = document.getElementById('btn-loader');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    submitBtn.disabled = true;
    formMessage.textContent = '';
    formMessage.className = 'form-message';
    
    // Get form data
    const formData = {
      user_name: document.getElementById('user_name').value.trim(),
      user_email: document.getElementById('user_email').value.trim(),
      subject: document.getElementById('subject').value.trim(),
      message: document.getElementById('message').value.trim()
    };
    
    // Validate form data
    if (!formData.user_name || !formData.user_email || !formData.subject || !formData.message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.className = 'form-message error';
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
      submitBtn.disabled = false;
      return;
    }
    
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
      formMessage.textContent = 'Email service is not available. Please refresh the page and try again.';
      formMessage.className = 'form-message error';
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
      submitBtn.disabled = false;
      return;
    }
    
    try {
      // Send email using EmailJS
      // Display name will show visitor's name and email
      const templateParams = {
        from_name: formData.user_name, // Shows visitor's name and email
        from_email: formData.user_email, // Visitor's email (for reference)
        reply_to: formData.user_email, // Allows direct reply to visitor
        subject: formData.subject,
        message: formData.message,
        to_email: 'omkpatel110@gmail.com'
      };
      
      console.log('Sending email with params:', templateParams);
      
      const response = await emailjs.send(
        'service_co2eiqk',
        'template_2kpo1dh',
        templateParams
      );
      
      // Success
      if (response.status === 200) {
        formMessage.textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
        formMessage.className = 'form-message success';
        contactForm.reset();
      } else {
        throw new Error('Unexpected response status: ' + response.status);
      }
      
    } catch (error) {
      // Error handling with more details
      console.error('EmailJS Error Details:', error);
      let errorMessage = 'Sorry, there was an error sending your message. ';
      
      if (error.text) {
        const errorText = error.text;
        errorMessage += 'Error: ' + errorText;
        
        // Provide specific guidance for common errors
        if (errorText.includes('insufficient authentication scopes') || errorText.includes('Gmail_API')) {
          errorMessage += '\n\n🔧 To fix this:\n1. Go to EmailJS Dashboard\n2. Click Email Services\n3. Find your service (service_co2eiqk)\n4. Click Reconnect\n5. Grant ALL permissions when prompted';
        } else if (errorText.includes('Template not found')) {
          errorMessage += '\n\n🔧 To fix: Check that your template ID (template_2kpo1dh) is correct and the template is published.';
        } else if (errorText.includes('Service not found')) {
          errorMessage += '\n\n🔧 To fix: Check that your service ID (service_co2eiqk) is correct and the service is active.';
        }
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please check your EmailJS configuration or contact me directly at omkpatel110@gmail.com';
      }
      
      formMessage.textContent = errorMessage;
      formMessage.className = 'form-message error';
    } finally {
      // Reset button state
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
      submitBtn.disabled = false;
      
      // Scroll to message
      formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.progress');
const animateSkillBars = () => {
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
};

// Intersection Observer for skill bars
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  observer.observe(skillsSection);
}

// Add hover effect to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
}); 
