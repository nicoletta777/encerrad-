// GLITCH RANDOM
setInterval(() => {
  document.body.style.filter = "hue-rotate(90deg)";

  setTimeout(() => {
    document.body.style.filter = "none";
  }, 100);
}, 4000);

// EFECTO PARPADEO
setInterval(() => {
  document.body.style.opacity = "0.8";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
}, 5000);
