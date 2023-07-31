const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowLeft.addEventListener('click', () => {
  animateArrow(arrowLeft.getAttribute('href'));
});

arrowRight.addEventListener('click', () => {
  animateArrow(arrowRight.getAttribute('href'));
});

function animateArrow(url) {
  const timeInterval = 10; // Set the time interval for the animation (in milliseconds)
  const distancePerInterval = 10; // Set the distance to move the arrow per interval (in pixels)
  const maxDistance = 100; // Set the maximum distance to move the arrow (in pixels)
  const currentPosition = window.scrollY;
  const targetPosition = 0;
  const distance = targetPosition - currentPosition;
  const direction = distance > 0 ? 1 : -1;
  const distanceToMove = Math.abs(distance) < maxDistance ? Math.abs(distance) : maxDistance;

  let distanceMoved = 0;
  const interval = setInterval(() => {
    const nextPosition = currentPosition + distanceMoved * direction;
    if (distanceMoved < distanceToMove) {
      window.scrollTo(0, nextPosition);
      distanceMoved += distancePerInterval;
    } else {
      window.location.href = url;
      clearInterval(interval);
    }
  }, timeInterval);
}