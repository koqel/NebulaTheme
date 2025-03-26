// Add custom JS modifications here
// Check out https://github.com/layeredy/uptimematrix-mods/ for public modifications made by others
// Nebula Theme - Advanced JS for UptimeMatrix
document.addEventListener('DOMContentLoaded', function() {
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
});