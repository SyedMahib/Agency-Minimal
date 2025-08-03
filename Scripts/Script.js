const testimonials = [
  {
    text: "They are doing amazing job with hundred percent customer satisfaction, Love their work and would like to work with them again",
  },
  {
    text: "Outstanding support and development skills. We were impressed by their commitment to deadlines and collaboration.",
  },
  {
    text: "Great experience working with them. Their creativity and attention to detail really made a difference in our project.",
  },
];

function setActiveReview(index) {
  // Update testimonial text
  document.getElementById("testimonialText").textContent = testimonials[index].text;

  // Handle indicator bar
  for (let i = 0; i < testimonials.length; i++) {
    const indicator = document.getElementById(`indicator-${i}`);
    if (i === index) {
      indicator.classList.add("bg-purple-600");
    } else {
      indicator.classList.remove("bg-purple-600");
    }
  }
}

// Default to first review
document.addEventListener("DOMContentLoaded", () => {
  setActiveReview(0);
});