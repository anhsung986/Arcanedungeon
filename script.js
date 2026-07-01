document.addEventListener("DOMContentLoaded", () => {

  // ===== COPY IP =====
  window.copyIP = function () {
    const ip = "arcanedungeon.xyz";
    navigator.clipboard.writeText(ip);

    const btn = document.querySelector(".ip-box button");
    btn.innerText = "Copied!";
    setTimeout(() => btn.innerText = "Copy IP", 1500);
  };

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // ===== NAVBAR BLUR ON SCROLL =====
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(10,10,20,0.7)";
      navbar.style.backdropFilter = "blur(15px)";
    } else {
      navbar.style.background = "rgba(10,10,20,0.4)";
      navbar.style.backdropFilter = "blur(12px)";
    }
  });

  // ===== PARTICLE SYSTEM =====
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.zIndex = 0;
  canvas.style.pointerEvents = "none";

  const ctx = canvas.getContext("2d");

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const particles = [];

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2,
      d: Math.random() * 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = "rgba(181,140,255,0.7)";

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.y -= p.d;

      if (p.y < 0) {
        p.y = h;
        p.x = Math.random() * w;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();

  // ===== FADE IN EFFECT =====
  const elements = document.querySelectorAll(".card, h2, .hero-content");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.8s ease";
    observer.observe(el);
  });

});
