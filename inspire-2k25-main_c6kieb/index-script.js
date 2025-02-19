document.addEventListener("DOMContentLoaded", function () {
  // Function to initialize Vanta.js fog effect
  function initVantaFog() {
    // Check if VANTA and VANTA.RINGS are defined before initializing
    if (typeof VANTA !== 'undefined' && VANTA.RINGS) {
      VANTA.RINGS({
        el: "#events",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x1e293b,
        ringColor: 0xff7849,
        showLines: false,
        
        forceAnimate: true,
      });
    } else {
      console.warn("VANTA or VANTA.RINGS not found. Ensure Vanta.js is loaded.");
    }
  }

  // Initialize Vanta.js when the DOM is fully loaded
  initVantaFog();

  // Reinitialize Vanta.js on window resize (optional)
  window.addEventListener("resize", function () {
    // Destroy the existing Vanta instance (if it exists) before reinitializing
    if (VANTA.current && VANTA.current.destroy) {
      VANTA.current.destroy();
    }
    initVantaFog();
  });
});
