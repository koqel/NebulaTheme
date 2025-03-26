const apiUrl = "data.json"; 
// ^^ Set this to your UptimeMatrix API URL, you can find this either at https://app.uptimematrix.com or if you are self-hosting, it will just be data.json ^^

// Theme configuration
const themeName = "Nebula"; // Theme name
const themeVersion = "1.0.0"; // Theme version
const themeAuthor = "Plasma Services"; // Theme author

// Theme settings - Adjust these to customize your theme
const themeSettings = {
  // Visual Effects
  enableParticleEffects: true,    // Enable floating particles
  enableStarfield: true,          // Enable background starfield
  enableGlowEffects: true,        // Enable glow effects on elements
  animationIntensity: "high",     // Animation intensity: "low", "medium", "high"
  accentColorIntensity: "medium", // Accent color intensity: "low", "medium", "high"
  
  // Navigation & Footer
  enableNavbar: true,             // Enable the top navigation bar
  enableFooter: true,             // Enable the enhanced footer with social icons
  enableDarkModeToggle: true,     // Show dark mode toggle in navbar
  
  // Company/Brand Details
  companyName: "Plasma Services",    // Your company or brand name
  companySlogan: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", // Slogan or tagline
  
  // Social Media Links (set to empty string "" to hide)
  socialLinks: {
    twitter: "https://twitter.com/yourcompany",
    github: "https://github.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
    facebook: "https://facebook.com/yourcompany",
    instagram: "",                // Example of a disabled social link
    discord: "https://discord.gg/yourserver"
  },
  
  // Navbar Links (label: "url")
  navLinks: {
    "Home": "https://yourdomain.com",
    "Blog": "https://yourdomain.com/blog",
    "Contact": "https://yourdomain.com/contact",
    "Support": "https://yourdomain.com/support"
  }
};

// Example format:
//  const apiUrl = "https://api.uptimematrix.com/example"; 
// where "example" is your unique identifier for your status page.
// More configuration options will be added in the future