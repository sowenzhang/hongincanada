// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove("opacity-0", "invisible");
    backToTopBtn.classList.add("opacity-100", "visible");
  } else {
    backToTopBtn.classList.remove("opacity-100", "visible");
    backToTopBtn.classList.add("opacity-0", "invisible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Ping pong ball animation
function createPingPongBall() {
  const ball = document.createElement("div");
  ball.className = "ping-pong-ball";

  // Random position at the top of the viewport
  const startX = Math.random() * window.innerWidth;
  ball.style.left = `${startX}px`;
  ball.style.top = "-20px";

  document.body.appendChild(ball);

  // Random end position at the bottom
  const endX = Math.random() * window.innerWidth;

  // Animate
  let opacity = 0;
  let top = -20;
  const id = setInterval(frame, 20);

  function frame() {
    if (top >= window.innerHeight) {
      clearInterval(id);
      ball.remove();
    } else {
      opacity += 0.02;
      if (opacity > 1) opacity = 1;
      top += 5;

      // Calculate current x position (quadratic curve)
      const progress = top / window.innerHeight;
      const currentX = startX + (endX - startX) * progress;

      ball.style.opacity = opacity;
      ball.style.top = `${top}px`;
      ball.style.left = `${currentX}px`;
    }
  }
}

// Create ping pong balls periodically
setInterval(createPingPongBall, 2000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});
