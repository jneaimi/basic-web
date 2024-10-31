document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Fade in elements on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
  });

  // Show more experience functionality
  const showMoreBtn = document.querySelector(".show-more-btn");
  const hiddenExperience = document.querySelector(".hidden-experience");

  if (showMoreBtn && hiddenExperience) {
    showMoreBtn.addEventListener("click", () => {
      hiddenExperience.style.display =
        hiddenExperience.style.display === "none" ? "block" : "none";
      showMoreBtn.textContent =
        hiddenExperience.style.display === "none"
          ? "Show More Experience"
          : "Show Less";
    });
  }
});
