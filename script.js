
// Initialize Feather icons
document.addEventListener('DOMContentLoaded', function() {
  feather.replace();
  
  // DOM elements
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      
      // Change icon based on menu state
      const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
      if (menuIcon) {
        if (mobileMenu.classList.contains('hidden')) {
          feather.replace(menuIcon, { type: 'menu' });
        } else {
          feather.replace(menuIcon, { type: 'x' });
        }
      }
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu && mobileMenuBtn) {
      if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        
        // Reset icon
        const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
        if (menuIcon) {
          feather.replace(menuIcon, { type: 'menu' });
        }
      }
    }
  });
  
  // Navbar background change on scroll
  window.addEventListener('scroll', function() {
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    
    // Show/hide scroll to top button
    if (scrollToTopBtn) {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('hidden');
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
        scrollToTopBtn.classList.add('hidden');
      }
    }
  });
  
  // Scroll to top functionality
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Add hover effect to team cards
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.card-action')?.classList.add('visible');
    });
    
    card.addEventListener('mouseleave', () => {
      card.querySelector('.card-action')?.classList.remove('visible');
    });
  });
  
  // Add hover effect to cookie cards
  const cookieCards = document.querySelectorAll('.cookie-card');
  cookieCards.forEach(card => {
    const image = card.querySelector('.cookie-image');
    
    card.addEventListener('mouseenter', () => {
      if (image) {
        image.style.transform = 'scale(1.1)';
      }
    });
    
    card.addEventListener('mouseleave', () => {
      if (image) {
        image.style.transform = 'scale(1)';
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          
          // Reset icon
          const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
          if (menuIcon) {
            feather.replace(menuIcon, { type: 'menu' });
          }
        }
      }
    });
  });
});
