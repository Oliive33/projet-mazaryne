// Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

// sr.reveal(".logo-box");
sr.reveal(".title-picture, .btn-scroll-down", { delay: 200 });
sr.reveal(".titles-products", { interval: 500 });
// sr.reveal(".titles-products", {
//   origin: "top",
//   delay: 1000,
// });
// sr.reveal(".footer, footer-nav", { interval: 200 });
sr.reveal(".img1, .img3", { origin: "right" });
sr.reveal(".img2, .img4", { origin: "left" });
