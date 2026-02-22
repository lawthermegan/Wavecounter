let count = 0;
const crashSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1114/1114-preview.mp3');

function autoCrash() {
  const tree = document.getElementById('palm-tree');
  const counter = document.getElementById('counter');

  // Trigger tree animation
  tree.classList.remove('tree-hit');
  void tree.offsetWidth; // Reset animation
  tree.classList.add('tree-hit');

  // Play sound
  crashSound.currentTime = 0;
  crashSound.play();

  // Update Score
  count++;
  counter.innerText = "SPLASHES: " + count;
}

// Check every 3 seconds (the same time as the CSS animation)
// We set a delay (2.1s) so the sound happens exactly when the wave hits the tree!
setInterval(() => {
    setTimeout(autoCrash, 2100); 
}, 3000);
