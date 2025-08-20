// Matrix Background Effect
function createMatrixBackground() {
  const matrixBg = document.getElementById("matrixBg");
  const characters =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const matrixChars = characters.split("");

  function createMatrixChar() {
    const char = document.createElement("div");
    char.className = "matrix-char";
    char.textContent =
      matrixChars[Math.floor(Math.random() * matrixChars.length)];
    char.style.left = Math.random() * 100 + "vw";
    char.style.animationDuration = Math.random() * 3 + 2 + "s";
    char.style.animationDelay = Math.random() * 2 + "s";

    matrixBg.appendChild(char);

    // Remove character after animation
    setTimeout(() => {
      if (char.parentNode) {
        char.parentNode.removeChild(char);
      }
    }, 5000);
  }

  // Create characters at intervals
  setInterval(createMatrixChar, 100);
}

// Smooth scrolling for navigation links
document.querySelectorAll(".scroll-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for fade-in animations
document.addEventListener("DOMContentLoaded", function () {
  // Initialize matrix background
  createMatrixBackground();

  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  fadeIns.forEach((fadeIn) => {
    observer.observe(fadeIn);
  });

  // Add typing effect to project titles
  const projectTitles = document.querySelectorAll(".project h3");
  projectTitles.forEach((title) => {
    title.addEventListener("mouseenter", function () {
      this.style.textShadow = "0 0 20px #00ff41, 0 0 40px #00ff41";
    });

    title.addEventListener("mouseleave", function () {
      this.style.textShadow = "none";
    });
  });

  // Add scanning effect to skill categories
  const skillCategories = document.querySelectorAll(".skill-category");
  skillCategories.forEach((category) => {
    category.addEventListener("mouseenter", function () {
      this.style.borderColor = "#00cc33";
      this.style.boxShadow = "0 0 30px rgba(0, 204, 51, 0.5)";
    });

    category.addEventListener("mouseleave", function () {
      this.style.borderColor = "#00ff41";
      this.style.boxShadow = "0 0 30px rgba(0, 255, 65, 0.2)";
    });
  });

  // Add glitch effect to profile picture on hover
  const profilePic = document.querySelector(".profile-pic");
  if (profilePic) {
    // Keep natural colors; no color change on hover
  }

  // Add terminal-style cursor blink effect
  const typewriter = document.querySelector(".typewriter");
  if (typewriter) {
    setInterval(() => {
      typewriter.style.borderRightColor =
        typewriter.style.borderRightColor === "transparent"
          ? "#00ff41"
          : "transparent";
    }, 500);
  }

  // Add particle effect to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add cybersecurity-themed loading animation
  const sections = document.querySelectorAll(".section");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";

    setTimeout(() => {
      section.style.transition = "all 0.8s ease-out";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// Add keyboard navigation support
document.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    // Add focus styles for accessibility
    document.body.classList.add("keyboard-navigation");
  }
});

// Remove keyboard navigation class when mouse is used
document.addEventListener("mousedown", function () {
  document.body.classList.remove("keyboard-navigation");
});

// Add scroll-triggered animations
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".matrix-bg");

  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }

  // Add glow effect to header on scroll
  const header = document.querySelector("header");
  if (header) {
    if (scrolled > 100) {
      header.style.boxShadow = "0 0 30px rgba(0, 255, 65, 0.5)";
    } else {
      header.style.boxShadow = "0 0 20px rgba(0, 255, 65, 0.3)";
    }
  }
});

// Add cybersecurity-themed form validation
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Add loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Encrypting...";
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      submitBtn.textContent = "Message Sent!";
      submitBtn.style.background = "linear-gradient(45deg, #00ff41, #00ff41)";

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = "linear-gradient(45deg, #00ff41, #00cc33)";
        this.reset();
      }, 2000);
    }, 1500);
  });
}

// Add terminal-style console effect
function addConsoleEffect() {
  const console = document.createElement("div");
  console.className = "terminal-console";
  console.innerHTML = `
        <div class="console-header">
            <span class="console-title">Terminal</span>
            <span class="console-controls">● ○ ●</span>
        </div>
        <div class="console-content">
            <p><span class="prompt">$</span> Initializing portfolio...</p>
            <p><span class="prompt">$</span> Loading matrix background...</p>
            <p><span class="prompt">$</span> System ready. Welcome, user.</p>
        </div>
    `;

  console.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 300px;
        background: rgba(0, 0, 0, 0.9);
        border: 2px solid #00ff41;
        border-radius: 10px;
        font-family: 'JetBrains Mono', monospace;
        color: #00ff41;
        z-index: 1001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.5s ease;
    `;

  document.body.appendChild(console);

  // Show console after a delay
  setTimeout(() => {
    console.style.opacity = "1";
    console.style.transform = "translateX(0)";
  }, 2000);

  // Hide console after 5 seconds
  setTimeout(() => {
    console.style.opacity = "0";
    console.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (console.parentNode) {
        console.parentNode.removeChild(console);
      }
    }, 500);
  }, 7000);
}

// Initialize console effect
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(addConsoleEffect, 1000);
});
