const player = document.getElementById("player");
const haltere = document.getElementById("haltere");
const backButton = document.getElementById("backButton");
const pushButton = document.getElementById("pushButton");

let scene = "salle";
let reps = 0;
let isCurlUp = false; //Alterne haut / bas biceps curl

haltere.addEventListener("click", () => {
  if (scene === "salle") {
    scene = "entrainement";
    reps = 0;
    isCurlUp = false;
    player.src = "Assets/pixil-frame-maigre curl.png"; // version maigre avec haltère
    backButton.style.display = "block";
    haltere.style.display = "none";
    pushButton.style.display = "block";
    repCounter.textContent = "0 / 20"; // reset compteur
  }
});

backButton.addEventListener("click", () => {
  scene = "salle";
  reps = 0;
  player.src = "Assets/pixil-frame-0 (1).png"; // version maigre en attente
  backButton.style.display = "none";  
  haltere.style.display = "block";
  pushButton.style.display = "none";  
  repCounter.textContent = "0 / 20";
});

// === Bouton PUSH ===

pushButton.addEventListener("click", () => {
  if (scene === "entrainement" && reps < 20) {
    // Alterne entre 2 frames
    if (isCurlUp) {
      player.src = "Assets/pixil-frame-maigre curl.png"; // bras bas
    } else {
      player.src = "Assets/pixil-frame-mm0 (6).png"; // bras haut
    }
    isCurlUp = !isCurlUp;

    reps++;
    repCounter.textContent = reps + " / 20";

    // Quand on atteint 20 reps → version musclée
    if (reps === 20) {
      player.src = "Assets/pixil-frame-0 (5).png";
      repCounter.textContent = "20 / 20";
    }
  }
});
