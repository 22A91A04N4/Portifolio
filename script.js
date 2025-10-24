// Section scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('[data-animate]').forEach(section => {
  observer.observe(section);
});
