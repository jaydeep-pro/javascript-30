// Play sound for keyboard press
window.addEventListener("keydown", (e) => {
  playSound(e.code);
});

//play sound for touch
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", function () {
    playSound(key.getAttribute("data-key"));
  });
});

function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName != "transform") return;

  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
