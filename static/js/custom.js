// Nebula Theme - Advanced JS for UptimeMatrix
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Navbar and Footer based on configuration
  initializeNavbarAndFooter();
  // Create dynamic starfield background
  createStarfield();
  
  // Add advanced animations to service items
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach((item, index) => {
    // Set a staggered animation delay
    item.style.animationDelay = `${index * 0.05}s`;
    item.style.animationDuration = '0.7s';
    item.style.animationFillMode = 'both';
    item.style.animationName = 'slideInRight';
    
    // Add subtle hover glow effect
    item.addEventListener('mouseenter', () => {
      item.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.15)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.boxShadow = 'none';
    });
  });

  // Create advanced animation keyframes
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(-30px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }
    
    @keyframes glowPulse {
      0% {
        box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
        text-shadow: 0 0 8px rgba(168, 85, 247, 0.5);
      }
      50% {
        box-shadow: 0 0 25px rgba(168, 85, 247, 0.5), 0 0 30px rgba(99, 102, 241, 0.3);
        text-shadow: 0 0 12px rgba(168, 85, 247, 0.8);
      }
      100% {
        box-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
        text-shadow: 0 0 8px rgba(168, 85, 247, 0.5);
      }
    }
    
    @keyframes floatingAnimation {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(styleSheet);

  // Add floating animation to statuses
  const allStatusInds = document.querySelectorAll('.service-status');
  allStatusInds.forEach(status => {
    status.style.animation = 'floatingAnimation 3s ease-in-out infinite';
  });

  // Enhanced overall status with glow effect
  const overallStatus = document.getElementById('overall-status');
  if (overallStatus) {
    if (overallStatus.classList.contains('overall-operational')) {
      const statusIcon = overallStatus.querySelector('.status-icon');
      if (statusIcon) {
        statusIcon.style.animation = 'glowPulse 4s infinite';
      }
    }
    
    // Add particle effect for operational status
    if (overallStatus.classList.contains('overall-operational')) {
      createParticleEffect(overallStatus);
    }
  }

  // Add advanced hover effects to service groups
  const serviceGroups = document.querySelectorAll('.service-group');
  serviceGroups.forEach(group => {
    const title = group.querySelector('h2');
    if (title) {
      title.addEventListener('mouseenter', () => {
        title.style.background = 'linear-gradient(to right, rgba(45, 38, 99, 1), rgba(45, 38, 99, 0.9))';
      });
      
      title.addEventListener('mouseleave', () => {
        title.style.background = 'linear-gradient(to right, rgba(26, 21, 51, 1), rgba(26, 21, 51, 0.9))';
      });
    }
  });

  // Add floating effect to alerts and updates with staggered delays
  const alertsAndUpdates = document.querySelectorAll('.alert, .update');
  alertsAndUpdates.forEach((element, index) => {
    element.style.animationDelay = `${0.2 + (index * 0.15)}s`;
    element.style.animationDuration = '0.9s';
    element.style.animationFillMode = 'both';
    element.style.animationName = 'fadeInUp';
  });

  // Create starfield background effect
  function createStarfield() {
    const stars = 200; // Number of stars
    const starfield = document.createElement('div');
    starfield.className = 'starfield';
    starfield.style.position = 'fixed';
    starfield.style.top = '0';
    starfield.style.left = '0';
    starfield.style.width = '100%';
    starfield.style.height = '100%';
    starfield.style.zIndex = '-3';
    starfield.style.pointerEvents = 'none';
    
    for (let i = 0; i < stars; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2;
      
      star.style.position = 'absolute';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      star.style.borderRadius = '50%';
      star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite ease-in-out ${Math.random() * 5}s`;
      
      starfield.appendChild(star);
    }
    
    // Create twinkling animation
    const twinkleKeyframes = document.createElement('style');
    twinkleKeyframes.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
    `;
    document.head.appendChild(twinkleKeyframes);
    
    document.body.appendChild(starfield);
  }
  
  // Create particle effect for operational status
  function createParticleEffect(element) {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.overflow = 'hidden';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '0';
    
    const numParticles = 15;
    
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      const size = 1 + Math.random() * 2;
      
      particle.style.position = 'absolute';
      particle.style.backgroundColor = 'rgba(16, 185, 129, 0.6)';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.filter = 'blur(1px)';
      
      // Random starting positions
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Create unique animation for each particle
      const duration = 10 + Math.random() * 20;
      const delay = Math.random() * 10;
      
      particle.style.animation = `floatParticle ${duration}s infinite linear ${delay}s`;
      
      particleContainer.appendChild(particle);
    }
    
    const particleKeyframes = document.createElement('style');
    particleKeyframes.textContent = `
      @keyframes floatParticle {
        0% {
          transform: translate(0, 0);
          opacity: 0;
        }
        10% {
          opacity: 0.8;
        }
        90% {
          opacity: 0.8;
        }
        100% {
          transform: translate(${Math.random() > 0.5 ? '' : '-'}${20 + Math.random() * 30}px, ${Math.random() > 0.5 ? '' : '-'}${20 + Math.random() * 30}px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(particleKeyframes);
    
    element.style.position = 'relative';
    element.appendChild(particleContainer);
  }

  // Handle mobile optimization with advanced detection
  function handleResponsiveLayout() {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    
    document.body.classList.toggle('is-mobile', isMobile);
    document.body.classList.toggle('is-tablet', isTablet);
    
    // Apply specific mobile optimizations
    if (isMobile) {
      document.querySelectorAll('.service-status').forEach(status => {
        status.style.padding = '4px 8px';
        status.style.fontSize = '0.75rem';
      });
      
      // Reduce starfield density on mobile
      const starfieldStars = document.querySelectorAll('.starfield div');
      for (let i = 0; i < starfieldStars.length; i++) {
        if (i % 2 === 0) {
          starfieldStars[i].style.display = 'none';
        }
      }
    } else {
      document.querySelectorAll('.service-status').forEach(status => {
        status.style.padding = '6px 14px';
        status.style.fontSize = '0.8rem';
      });
      
      // Restore starfield on desktop
      document.querySelectorAll('.starfield div').forEach(star => {
        star.style.display = 'block';
      });
    }
  }

  // Initial call and event listener for resize
  handleResponsiveLayout();
  window.addEventListener('resize', handleResponsiveLayout);
  
  // Function to initialize Navbar and Footer
  function initializeNavbarAndFooter() {
    // Check if navbar is enabled in configuration
    if (typeof themeSettings !== 'undefined' && themeSettings.enableNavbar) {
      createNavbar();
      
      // Add scroll behavior to navbar
      window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.nebula-navbar');
        if (navbar) {
          if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        }
      });
    } else {
      // Hide navbar element if disabled
      const navbar = document.getElementById('nebula-navbar');
      if (navbar) navbar.style.display = 'none';
    }
    
    // Check if enhanced footer is enabled in configuration
    if (typeof themeSettings !== 'undefined' && themeSettings.enableFooter) {
      createFooter();
      
      // Hide default copyright if enhanced footer is enabled
      const copyright = document.querySelector('.copyright');
      if (copyright) copyright.style.display = 'none';
    } else {
      // Hide footer element if disabled
      const footer = document.getElementById('nebula-footer');
      if (footer) footer.style.display = 'none';
    }
  }
  
  // Function to create navbar
  function createNavbar() {
    const navbar = document.getElementById('nebula-navbar');
    if (!navbar) return;
    
    // Create brand section
    const brand = document.createElement('a');
    brand.href = '/';
    brand.className = 'navbar-brand';
    
    // Add logo
    const logo = document.createElement('img');
    logo.src = 'https://cdn.layeredy.com/uptimematrix/logo.png';
    logo.alt = 'Logo';
    brand.appendChild(logo);
    
    // Add company name
    const companyName = document.createElement('span');
    companyName.textContent = themeSettings.companyName || 'Company';
    brand.appendChild(companyName);
    
    navbar.appendChild(brand);
    
    // Create links section
    const links = document.createElement('div');
    links.className = 'navbar-links';
    
    // Add configured navigation links
    if (themeSettings.navLinks) {
      for (const [label, url] of Object.entries(themeSettings.navLinks)) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = label;
        links.appendChild(link);
      }
    }
    
    // Add dark mode toggle if enabled
    if (themeSettings.enableDarkModeToggle) {
      const darkModeToggle = document.createElement('button');
      darkModeToggle.className = 'dark-mode-toggle';
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      darkModeToggle.setAttribute('title', 'Toggle Dark/Light Mode');
      darkModeToggle.addEventListener('click', toggleDarkMode);
      links.appendChild(darkModeToggle);
    }
    
    navbar.appendChild(links);
    
    // Create hamburger menu for mobile
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      links.classList.toggle('show');
    });
    
    navbar.appendChild(hamburger);
  }
  
  // Function to create enhanced footer
  function createFooter() {
    const footer = document.getElementById('nebula-footer');
    if (!footer) return;
    
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';
    
    // Create info section
    const footerInfo = document.createElement('div');
    footerInfo.className = 'footer-info';
    
    // Add logo and company name
    const footerLogo = document.createElement('div');
    footerLogo.className = 'footer-logo';
    
    const logoImg = document.createElement('img');
    logoImg.src = 'https://cdn.layeredy.com/uptimematrix/logo.png';
    logoImg.alt = 'Logo';
    footerLogo.appendChild(logoImg);
    
    const companyName = document.createElement('div');
    companyName.className = 'footer-company';
    companyName.textContent = themeSettings.companyName || 'Company';
    footerLogo.appendChild(companyName);
    
    footerInfo.appendChild(footerLogo);
    
    // Add slogan
    const slogan = document.createElement('div');
    slogan.className = 'footer-slogan';
    slogan.textContent = themeSettings.companySlogan || 'Service Status';
    footerInfo.appendChild(slogan);
    
    footerContainer.appendChild(footerInfo);
    
    // Create social icons section
    const footerSocial = document.createElement('div');
    footerSocial.className = 'footer-social';
    
    // Add social icons
    const socialIcons = {
      twitter: 'fa-twitter',
      github: 'fa-github',
      linkedin: 'fa-linkedin-in',
      facebook: 'fa-facebook-f',
      instagram: 'fa-instagram',
      discord: 'fa-discord',
      youtube: 'fa-youtube',
      twitch: 'fa-twitch'
    };
    
    if (themeSettings.socialLinks) {
      for (const [platform, url] of Object.entries(themeSettings.socialLinks)) {
        if (url && url.trim() !== '' && socialIcons[platform]) {
          const link = document.createElement('a');
          link.href = url;
          link.className = 'social-icon';
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.innerHTML = `<i class="fab ${socialIcons[platform]}"></i>`;
          link.setAttribute('title', platform.charAt(0).toUpperCase() + platform.slice(1));
          footerSocial.appendChild(link);
        }
      }
    }
    
    footerContainer.appendChild(footerSocial);
    
    // Create legal section
    const footerLegal = document.createElement('div');
    footerLegal.className = 'footer-legal';
    
    const copyright = document.createElement('div');
    copyright.className = 'footer-copyright';
    copyright.innerHTML = `&copy; ${new Date().getFullYear()} ${themeSettings.companyName || 'Company'}. All rights reserved.`;
    footerLegal.appendChild(copyright);
    
    const credit = document.createElement('div');
    credit.className = 'footer-credit';
    credit.innerHTML = `Status page by <a href="https://uptimematrix.com" target="_blank">UptimeMatrix</a><br>Theme made with ❤️ by <a href="https://plasma.services/" target="_blank"><strong>Plasma Services</strong></a>`;
    footerLegal.appendChild(credit);
    
    footerContainer.appendChild(footerLegal);
    
    footer.appendChild(footerContainer);
  }
  
  // Function to toggle dark/light mode
  function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    
    // Update icon
    const darkModeToggle = document.querySelector('.dark-mode-toggle i');
    if (darkModeToggle) {
      if (document.body.classList.contains('light-mode')) {
        darkModeToggle.className = 'fas fa-sun';
      } else {
        darkModeToggle.className = 'fas fa-moon';
      }
    }
    
    // Save preference
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    
    console.log('Theme toggled to', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  }
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    const darkModeToggle = document.querySelector('.dark-mode-toggle i');
    if (darkModeToggle) {
      darkModeToggle.className = 'fas fa-sun';
    }
  }
});