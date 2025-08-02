for (let i = 0; i < 30; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.body.appendChild(flower);
  }
// Hide loading screen after 3 seconds
setTimeout(() => {
  document.getElementById('loading-screen').style.display = 'none';
}, 3000);

// Music toggle
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-toggle");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🔇";
  }
});



  window.addEventListener('scroll', () => {
    const scrollHeight = window.innerHeight + window.scrollY;
    const fullHeight = document.body.offsetHeight;
    const surprise = document.querySelector('.scroll-surprise');
    if (scrollHeight >= fullHeight - 50) {
      surprise.style.display = 'block';
    }
  });
