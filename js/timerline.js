function updateClip() {
  const parent = document.getElementById('timeLineScrollBackground');
  const child = document.getElementById("timeLineScrollLine");
  const parentRect = parent.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();
  const top = Math.max(0, parentRect.top - childRect.top);
  const bottom = top + parentRect.height;
  child.style.clip = `rect(${top}px, ${parentRect.width}px, ${bottom}px, 0px)`;
}
window.addEventListener('scroll', updateClip);
updateClip();  // Initial call

function updateClip() {
  const parent = document.getElementById('timeLineScrollBackground');
  const child = document.getElementById("timeLineScrollLine");
  const parentRect = parent.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();
  const top = Math.max(0, parentRect.top - childRect.top);
  const bottom = top + parentRect.height;
  child.style.clip = `rect(${top}px, ${parentRect.width}px, ${bottom}px, 0px)`;
  
  updateTimelineOpacity();
}

function updateTimelineOpacity() {
  const timelineItems = document.querySelectorAll('.timeline_item');
  const viewportCenter = window.innerHeight / 2;
  
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.top + rect.height / 2;
    
    // Distance from viewport center (normalized to 0-1)
    const distance = Math.abs(itemCenter - viewportCenter);
    const maxDistance = window.innerHeight / 2;
    const normalizedDistance = Math.min(1, distance / maxDistance);
    
    // FASTER CHANGE: Square the distance for exponential curve
    // This makes opacity stay high longer, then drop fast at edges
    const opacity = Math.max(0.2, 1 - (normalizedDistance ** 2) * 0.7);
    item.style.opacity = opacity;
  });
}

window.addEventListener('scroll', updateClip);
updateClip();


const targetEl = document.querySelector('#timeLineScrollBackground'); // Change to your target ID/class
const fixedEl = document.querySelector('#timeLineScrollLine'); // Change to your fixed element ID/class

if (targetEl && fixedEl) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Target in viewport: show fixed element (opacity 1)
          fixedEl.style.opacity = '1';
          fixedEl.style.visibility = 'visible';
          fixedEl.style.transition = 'opacity 0.3s ease-in-out';
        } else {
          // Target out of viewport: hide fixed element (opacity 0)
          fixedEl.style.opacity = '0';
          fixedEl.style.visibility = 'hidden';
          fixedEl.style.transition = 'opacity 0.3s ease-in-out';
        }
      });
    },
    {
      root: null, // Use viewport as root
      rootMargin: '0px', // Trigger exactly at edges
      threshold: 0.1 // 10% visible to trigger (adjust 0-1)
    }
  );

  observer.observe(targetEl);
}

