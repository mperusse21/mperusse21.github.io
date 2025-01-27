const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('project')) {
        entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
        entry.target.style.setProperty('--animate-duration', '2s');
      } else if (entry.target.classList.contains('skill-subsection')) {
        entry.target.classList.add('animate__animated', 'animate__zoomIn');
        entry.target.style.setProperty('--animate-duration', '1.5s');
      }
      observer.unobserve(entry.target);
    }
  });
});

const projects = document.querySelectorAll('.project');
const skills = document.querySelectorAll('.skill-subsection');

projects.forEach(project => {
  observer.observe(project);
});

skills.forEach(skill => {
  observer.observe(skill);
});