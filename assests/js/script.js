const glightbox = GLightbox({
    'href': "https://youtu.be/iJKCj8uAHz8",
    'type': "video",
    'autoPlayVideos' : 'true',
  });

  sal();

const c1 = new CountUp("counter1",0,115);
const c2 = new CountUp("counter2",0,210);
const c3= new CountUp('counter3',0, 96);
const c4 = new CountUp('counter4',0, 380);
const el1 = document.getElementById('counter1');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', function () {
  if (isInViewport(el1)) {
    c1.start();
    c2.start();
    c3.start();
    c4.start();
  }
}, false);