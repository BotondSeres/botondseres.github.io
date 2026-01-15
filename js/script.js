function scrollToSection(sectionId, duration = 1000) {  // Duration in ms
  const element = document.getElementById(sectionId);
  if (!element) return;

  const start = window.pageYOffset;
  const target = element.getBoundingClientRect().top + window.pageYOffset - 80;  // Adjust for header
  const distance = target - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);  // Clamp to 1
    const ease = 1 - Math.pow(1 - progress, 3);  // Cubic ease-out for smoothness

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}