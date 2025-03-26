document.addEventListener('DOMContentLoaded', function() {
  // Create the cosmic nebula effect
  createNebulaEffect();
  
  // Apply advanced staggered animations to service groups
  const serviceGroups = document.querySelectorAll('.service-group');
  serviceGroups.forEach((group, index) => {
    group.style.setProperty('--index', index);
    group.style.animationDelay = `${0.15 + (index * 0.12)}s`;
    group.style.opacity = '0';
    group.style.animation = 'fadeInUpScale 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards';
    group.style.animationDelay = `${0.15 + (index * 0.12)}s`;
  });

  // Enhanced hover effects for service items with light trails
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = 'var(--card-hover)';
      item.style.transform = 'translateX(5px)';
      item.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.15)';
      
      // Add light trail effect
      const trail = document.createElement('div');
      trail.className = 'light-trail';
      trail.style.position = 'absolute';
      trail.style.top = '0';
      trail.style.left = '-10px';
      trail.style.width = '10px';
      trail.style.height = '100%';
      trail.style.background = 'linear-gradient(to right, transparent, rgba(168, 85, 247, 0.2))';
      trail.style.opacity = '0';
      trail.style.animation = 'trailAnimation 0.5s forwards';
      
      item.appendChild(trail);
      
      // Remove trail after animation
      setTimeout(() => {
        if (trail && trail.parentNode === item) {
          item.removeChild(trail);
        }
      }, 500);
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'rgba(26, 21, 51, 0.3)';
      item.style.transform = 'translateX(0)';
      item.style.boxShadow = 'none';
    });
  });
  
  // Add animation keyframes
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes fadeInUpScale {
      from { 
        opacity: 0; 
        transform: translateY(30px) scale(0.95); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0) scale(1); 
      }
    }
    
    @keyframes trailAnimation {
      from { 
        opacity: 0;
        transform: translateX(0);
      }
      to { 
        opacity: 1;
        transform: translateX(10px);
      }
    }
    
    @keyframes textPulse {
      0%, 100% { opacity: 0.8; }
      50% { opacity: 0.5; }
    }
    
    @keyframes nebulaDrift {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }
    
    @keyframes glowingBorder {
      0%, 100% {
        border-color: rgba(168, 85, 247, 0.3);
      }
      50% {
        border-color: rgba(99, 102, 241, 0.5);
      }
    }
  `;
  document.head.appendChild(styleSheet);

  // Create advanced enhanced cosmic loader
  function createLoader() {
    const loader = document.createElement('div');
    loader.id = 'loading-animation';
    
    // Create cosmic background for loader
    loader.style.background = 'linear-gradient(135deg, #0c0a1d 0%, #1a0b2e 50%, #170a33 100%)';
    
    // Add stars to loader background
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'loader-star';
      star.style.position = 'absolute';
      star.style.width = `${Math.random() * 2}px`;
      star.style.height = star.style.width;
      star.style.backgroundColor = 'white';
      star.style.borderRadius = '50%';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
      star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
      
      loader.appendChild(star);
    }
    
    // Create spinner with cosmic design
    const spinnerContainer = document.createElement('div');
    spinnerContainer.className = 'spinner-container';
    spinnerContainer.style.position = 'relative';
    spinnerContainer.style.width = '100px';
    spinnerContainer.style.height = '100px';
    
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    spinnerContainer.appendChild(spinner);
    
    // Add orbital ring around spinner
    const orbitalRing = document.createElement('div');
    orbitalRing.className = 'orbital-ring';
    orbitalRing.style.position = 'absolute';
    orbitalRing.style.top = '50%';
    orbitalRing.style.left = '50%';
    orbitalRing.style.width = '90px';
    orbitalRing.style.height = '90px';
    orbitalRing.style.transform = 'translate(-50%, -50%)';
    orbitalRing.style.borderRadius = '50%';
    orbitalRing.style.border = '2px solid rgba(168, 85, 247, 0.3)';
    orbitalRing.style.borderTopColor = 'rgba(99, 102, 241, 0.8)';
    orbitalRing.style.animation = 'spin 3s linear infinite';
    spinnerContainer.appendChild(orbitalRing);
    
    // Add small orbiting particle
    const orbitalParticle = document.createElement('div');
    orbitalParticle.className = 'orbital-particle';
    orbitalParticle.style.position = 'absolute';
    orbitalParticle.style.top = '-5px';
    orbitalParticle.style.left = '50%';
    orbitalParticle.style.width = '10px';
    orbitalParticle.style.height = '10px';
    orbitalParticle.style.backgroundColor = 'var(--accent-color)';
    orbitalParticle.style.borderRadius = '50%';
    orbitalParticle.style.boxShadow = '0 0 10px var(--accent-color)';
    orbitalParticle.style.transform = 'translateX(-50%)';
    orbitalParticle.style.animation = 'spin 3s linear infinite reverse';
    orbitalRing.appendChild(orbitalParticle);
    
    const text = document.createElement('p');
    text.textContent = 'Connecting to the Cosmos...';
    text.style.fontFamily = "'Space Grotesk', sans-serif";
    text.style.fontWeight = '500';
    text.style.letterSpacing = '0.05em';
    text.style.marginTop = '20px';
    text.style.color = 'rgba(226, 232, 240, 0.8)';
    text.style.textShadow = '0 0 10px rgba(168, 85, 247, 0.5)';
    
    // Add a subtle pulsing effect to the text
    text.style.animation = 'textPulse 1.5s infinite ease-in-out';
    
    loader.appendChild(spinnerContainer);
    loader.appendChild(text);
    document.body.appendChild(loader);
    
    // Add keyframes for twinkling stars
    const twinkleStyle = document.createElement('style');
    twinkleStyle.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      
      @keyframes spin {
        from { transform: translate(-50%, -50%) rotate(0deg); }
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }
    `;
    document.head.appendChild(twinkleStyle);
    
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.7s ease';
      setTimeout(() => {
        loader.remove();
      }, 700);
    }, 1500);
  }
  
  // Create the cosmic nebula effect
  function createNebulaEffect() {
    const nebula = document.createElement('div');
    nebula.className = 'cosmic-nebula';
    nebula.style.position = 'fixed';
    nebula.style.top = '0';
    nebula.style.left = '0';
    nebula.style.width = '100%';
    nebula.style.height = '100%';
    nebula.style.zIndex = '-2';
    nebula.style.background = `
      radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 60%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 60%)
    `;
    nebula.style.backgroundSize = '200% 200%';
    nebula.style.animation = 'nebulaDrift 60s ease infinite alternate';
    nebula.style.opacity = '0.8';
    document.body.appendChild(nebula);
  }
  
  // Apply conditional status classes for styling
  const overallStatus = document.getElementById('overall-status');
  if (overallStatus) {
    const statusText = overallStatus.textContent.toLowerCase();
    if (statusText.includes('operational')) {
      overallStatus.classList.add('overall-operational');
      
      // Add glowing border for operational status
      overallStatus.style.borderColor = 'rgba(168, 85, 247, 0.3)';
      overallStatus.style.animation = 'glowingBorder 4s infinite';
    } else if (statusText.includes('degraded') || statusText.includes('partial')) {
      overallStatus.classList.add('overall-degraded');
    } else if (statusText.includes('outage') || statusText.includes('issue')) {
      overallStatus.classList.add('overall-issue');
    } else if (statusText.includes('slow')) {
      overallStatus.classList.add('overall-slow');
    } else if (statusText.includes('maintenance')) {
      overallStatus.classList.add('overall-maintenance');
    }
  }
  
  // Create and display the enhanced loading animation
  createLoader();
});