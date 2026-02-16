// ================================
// Pawfully Helpful - Main Script
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // --------------------------------
  // Smooth Scrolling 
  // --------------------------------
  const anchors = document.querySelectorAll('a[href^="#"]');

  if (anchors.length > 0) {
    anchors.forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  }


  // --------------------------------
  //Button Hover Glow Effect
  // --------------------------------
  const primaryButtons = document.querySelectorAll(".btn-primary");

  primaryButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      button.style.boxShadow = "0 0 30px rgba(91, 92, 230, 0.6)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.boxShadow = "";
    });
  });


  // --------------------------------
  // Scroll Reveal Animation
  // --------------------------------
  const revealElements = document.querySelectorAll(".category-card, .stat-card");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial hidden state
  revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();


  // --------------------------------
  // Active Nav Highlight on Scroll 
  // --------------------------------
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  }

});
