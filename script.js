// Add animate-on-scroll effect to objects and text
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.animate');

  function checkViewport() {
    for (let i = 0; i < animatedElements.length; i++) {
      const element = animatedElements[i];
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - window.innerHeight <= 0) {
        element.classList.add('animate-visible');
      }
    }
  }

  function scrollHandler() {
    checkViewport();
    window.addEventListener('scroll', checkViewport);
  }

  scrollHandler();
});
